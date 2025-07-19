import { Children, Component, cloneElement, createElement, createRef } from 'react'
import { defaultPreset } from '../../utils/flipMoverUtils/enterLeavePresets'

import {
    applyStylesToDOMNode,
    createTransitionString,
    getNativeNode,
    getPositionDelta,
    getRelativeBoundingBox,
    removeNodeFromDOMFlow,
    updateHeightPlaceholder,
    whichTransitionEvent,
} from '../../utils/flipMoverUtils/domManipulation'
import { arraysEqual } from '../../utils/flipMoverUtils/helpers'
import { childIsDisabled, parentNodePositionStatic } from '../../utils/flipMoverUtils/errorMessages'
//import propConverter from '../../utils/flipMoverUtils/propConverter'

const transitionEnd = whichTransitionEvent()
const noBrowserSupport = !transitionEnd

function getKey(childData) {
    if (!childData.key) {
        console.warn('Each child must have a unique key', childData)
        return null
    }

    return childData.key
}

function getElementChildren(children) {
    return Children.toArray(children)
}

class FlipMove extends Component {
    constructor(props) {
        super(props)
        this.divRef = createRef()
    }

    static defaultProps = {
        easing: 'ease-in-out',
        duration: 350,
        delay: 0,
        staggerDurationBy: 0,
        staggerDelayBy: 0,
        typeName: 'div',
        enterAnimation: defaultPreset,
        leaveAnimation: defaultPreset,
        disableAllAnimations: false,
        getPosition: (node) => node.getBoundingClientRect(),
        maintainContainerHeight: false,
        verticalAlignment: 'top',
    }

    state = {
        children: getElementChildren(this.props?.children).map((element) => ({
            key: element.key,
            element,
            appearing: true,
        })),
    }

    childrenData = {}
    parentData = {
        domNode: null,
        boundingBox: null,
    }
    heightPlaceholderData = {
        domNode: null,
    }
    remainingAnimations = 0
    childrenToAnimate = []

    componentDidMount() {
        // Because React 16 no longer requires wrapping elements, Flip Move can opt
        // to not wrap the children in an element. In that case, find the parent
        // element using `findDOMNode`.
        if (this.props.typeName === null) {
            this.findDOMContainer()
        }

        // Run our `appearAnimation` if it was requested, right after the
        // component mounts.
        const shouldTriggerFLIP = this.props.appearAnimation && !this.isAnimationDisabled(this.props)

        if (shouldTriggerFLIP) {
            this.prepForAnimation()
            this.runAnimation()
        }
    }

    componentDidUpdate(previousProps) {
        if (this.props.typeName === null) {
            this.findDOMContainer()
        }
        // If the children have been re-arranged, moved, or added/removed,
        // trigger the main FLIP animation.
        //
        // IMPORTANT: We need to make sure that the children have actually changed.
        // At the end of the transition, we clean up nodes that need to be removed.
        // We DON'T want this cleanup to trigger another update.

        const oldChildrenKeys = getElementChildren(this.props.children).map((d) => d.key)
        const nextChildrenKeys = getElementChildren(previousProps.children).map((d) => d.key)

        const shouldTriggerFLIP =
            !arraysEqual(oldChildrenKeys, nextChildrenKeys) && !this.isAnimationDisabled(this.props)
        //console.log("Old: " + oldChildrenKeys)
        //console.log("New: " + nextChildrenKeys)
        //console.log("Not equal: " + !arraysEqual(oldChildrenKeys, nextChildrenKeys))

        if (shouldTriggerFLIP) {
            this.prepForAnimation()
            this.runAnimation()
        }
    }

    findDOMContainer = () => {
        ///const domNode = ReactDOM.findDOMNode(this)
        const parentNode = this.divRef && this.divRef.parentNode

        // This ought to be impossible, but handling it for Flow's sake.
        if (!parentNode || !(parentNode instanceof HTMLElement)) {
            return
        }

        // If the parent node has static positioning, leave animations might look
        // really funky. Let's automatically apply `position: relative` in this
        // case, to prevent any quirkiness.
        if (window.getComputedStyle(parentNode).position === 'static') {
            parentNode.style.position = 'relative'
            parentNodePositionStatic()
        }

        this.parentData.domNode = parentNode
    }

    runAnimation = () => {
        const dynamicChildren = this.state.children.filter(this.doesChildNeedToBeAnimated)

        // Splitting DOM reads and writes to be peformed in batches
        const childrenInitialStyles = dynamicChildren.map((child) => this.computeInitialStyles(child))
        dynamicChildren.forEach((child, index) => {
            if (childrenInitialStyles[index] == null) return

            this.remainingAnimations += 1
            this.childrenToAnimate.push(getKey(child))
            this.animateChild(child, index, childrenInitialStyles[index])
        })

        if (typeof this.props.onStartAll === 'function') {
            this.callChildrenHook(this.props.onStartAll)
        }
    }

    doesChildNeedToBeAnimated = (child) => {
        // If the child doesn't have a key, it's an immovable child (one that we
        // do not want to do FLIP stuff to.)
        if (!getKey(child)) {
            return false
        }

        const childData = this.getChildData(getKey(child))
        const childDomNode = childData.domNode
        const childBoundingBox = childData.boundingBox
        const parentBoundingBox = this.parentData.boundingBox

        if (!childDomNode) {
            return false
        }

        const { appearAnimation, enterAnimation, leaveAnimation, getPosition } = this.props

        const isAppearingWithAnimation = child.appearing && appearAnimation
        const isEnteringWithAnimation = child.entering && enterAnimation
        const isLeavingWithAnimation = child.leaving && leaveAnimation

        if (isAppearingWithAnimation || isEnteringWithAnimation || isLeavingWithAnimation) {
            return true
        }

        // If it isn't entering/leaving, we want to animate it if it's
        // on-screen position has changed.
        const [dX, dY] = getPositionDelta({
            childDomNode,
            childBoundingBox,
            parentBoundingBox,
            getPosition,
        })

        return dX !== 0 || dY !== 0
    }

    calculateNextSetOfChildren(nextChildren) {
        // 1) Map the incoming array of React elements into state‑shape
        const updatedChildren = nextChildren.map((element) => {
            const child = this.findChildByKey(element.key)
            const isEntering = !child || child.leaving
            return {key: element.key, element, entering: isEntering}
        }
        
        )

        let numOfChildrenLeaving = 0

        // 2) Walk your old state, find the ones that aren’t in nextChildren…
        this.state.children.forEach((child, index) => {
            const origKey = getKey(child)
            const isLeaving = !nextChildren.find((e) => e.key === origKey)

            console.log("Is not leaving: " + !isLeaving)
            console.log("No leave animation: " + !this.props.leaveAnimation)

            if (!isLeaving || !this.props.leaveAnimation) return

            // 3) Build a new unique key, and clone the element itself
            
            const nextChild = {
                ...child,
                leaving: true,
            }

            const nextChildIndex = index + numOfChildrenLeaving;

            // 4) Splice it into the updatedChildren array
            updatedChildren.splice(nextChildIndex, 0, nextChild)
            numOfChildrenLeaving += 1
            console.log(updatedChildren)
        })

        return updatedChildren
    }

    prepForAnimation() {
        // Our animation prep consists of:
        // - remove children that are leaving from the DOM flow, so that the new
        //   layout can be accurately calculated,
        // - update the placeholder container height, if needed, to ensure that
        //   the parent's height doesn't collapse.

        const { leaveAnimation, maintainContainerHeight, getPosition } = this.props

        // we need to make all leaving nodes "invisible" to the layout calculations
        // that will take place in the next step (this.runAnimation).
        if (leaveAnimation) {
            const leavingChildren = this.state.children.filter((child) => child.leaving)

            leavingChildren.forEach((leavingChild) => {
                const childData = this.getChildData(getKey(leavingChild))

                // Warn if child is disabled
                if (!this.isAnimationDisabled(this.props) && childData.domNode && childData.domNode.disabled) {
                    childIsDisabled()
                }

                // We need to take the items out of the "flow" of the document, so that
                // its siblings can move to take its place.
                if (childData.boundingBox) {
                    removeNodeFromDOMFlow(childData, this.props.verticalAlignment)
                }
            })

            if (maintainContainerHeight && this.heightPlaceholderData.domNode) {
                updateHeightPlaceholder({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition,
                })
            }
        }

        // For all children not in the middle of entering or leaving,
        // we need to reset the transition, so that the NEW shuffle starts from
        // the right place.
        this.state.children.forEach((child) => {
            const { domNode } = this.getChildData(getKey(child))

            // Ignore children that don't render DOM nodes (eg. by returning null)
            if (!domNode) {
                return
            }

            if (!child.entering && !child.leaving) {
                applyStylesToDOMNode({
                    domNode,
                    styles: {
                        transition: '',
                    },
                })
            }
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // When the component is handed new props, we need to figure out the
        // "resting" position of all currently-rendered DOM nodes.
        // We store that data in this.parent and this.children,
        // so it can be used later to work out the animation.
        this.updateBoundingBoxCaches()

        // Convert opaque children object to array.
        const nextChildren = getElementChildren(nextProps.children)

        // Next, we need to update our state, so that it contains our new set of
        // children. If animation is disabled or unsupported, this is easy;
        // we just copy our props into state.
        // Assuming that we can animate, though, we have to do some work.
        // Essentially, we want to keep just-deleted nodes in the DOM for a bit
        // longer, so that we can animate them away.
        this.setState({
            children: this.isAnimationDisabled(nextProps)
                ? nextChildren.map((element) => ({ ...element, element }))
                : this.calculateNextSetOfChildren(nextChildren),
        })
    }

    animateChild(child, index, childInitialStyles) {
        const { domNode } = this.getChildData(getKey(child))
        if (!domNode) {
            return
        }

        // Apply the relevant style for this DOM node
        // This is the offset from its actual DOM position.
        // eg. if an item has been re-rendered 20px lower, we want to apply a
        // style of 'transform: translate(-20px)', so that it appears to be where
        // it started.
        // In FLIP terminology, this is the 'Invert' stage.
        applyStylesToDOMNode({
            domNode,
            styles: childInitialStyles,
        })

        // Start by invoking the onStart callback for this child.
        if (this.props.onStart) this.props.onStart(child, domNode)

        // Next, animate the item from it's artificially-offset position to its
        // new, natural position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // NOTE, RE: the double-requestAnimationFrame:
                // Sadly, this is the most browser-compatible way to do this I've found.
                // Essentially we need to set the initial styles outside of any request
                // callbacks to avoid batching them. Then, a frame needs to pass with
                // the styles above rendered. Then, on the second frame, we can apply
                // our final styles to perform the animation.

                // Our first order of business is to "undo" the styles applied in the
                // previous frames, while also adding a `transition` property.
                // This way, the item will smoothly transition from its old position
                // to its new position.

                let styles = {
                    transition: createTransitionString(index, this.props),
                    transform: '',
                    opacity: '',
                }

                if (child.appearing && this.props.appearAnimation) {
                    styles = {
                        ...styles,
                        ...this.props.appearAnimation.to,
                    }
                } else if (child.entering && this.props.enterAnimation) {
                    styles = {
                        ...styles,
                        ...this.props.enterAnimation.to,
                    }
                } else if (child.leaving && this.props.leaveAnimation) {
                    styles = {
                        ...styles,
                        ...this.props.leaveAnimation.to,
                    }
                }

                // In FLIP terminology, this is the 'Play' stage.
                applyStylesToDOMNode({ domNode, styles })
            })
        })

        this.bindTransitionEndHandler(child)
    }

    bindTransitionEndHandler(child) {
        const { domNode } = this.getChildData(getKey(child))
        if (!domNode) {
            return
        }

        // The onFinish callback needs to be bound to the transitionEnd event.
        // We also need to unbind it when the transition completes, so this ugly
        // inline function is required (we need it here so it closes over
        // dependent variables `child` and `domNode`)
        const transitionEndHandler = (ev) => {
            // It's possible that this handler is fired not on our primary transition,
            // but on a nested transition (eg. a hover effect). Ignore these cases.
            if (ev.target !== domNode) return

            // Remove the 'transition' inline style we added. This is cleanup.
            domNode.style.transition = ''

            // Trigger any applicable onFinish/onFinishAll hooks
            this.triggerFinishHooks(child, domNode)

            domNode.removeEventListener(transitionEnd, transitionEndHandler)

            if (child.leaving) {
                this.removeChildData(getKey(child))
            }
        }

        domNode.addEventListener(transitionEnd, transitionEndHandler)
    }

    triggerFinishHooks(child, domNode) {
        if (this.props.onFinish) this.props.onFinish(child, domNode)

        // Reduce the number of children we need to animate by 1,
        // so that we can tell when all children have finished.
        this.remainingAnimations -= 1

        if (this.remainingAnimations === 0) {
            // Remove any items from the DOM that have left, and reset `entering`.
            const nextChildren = this.state.children
                .filter(({ leaving }) => !leaving)
                .map((item) => ({
                    ...item,
                    // fix for Flow
                    element: item.element,
                    appearing: false,
                    entering: false,
                }))

            this.setState({ children: nextChildren }, () => {
                if (typeof this.props.onFinishAll === 'function') {
                    this.callChildrenHook(this.props.onFinishAll)
                }

                // Reset our variables for the next iteration
                this.childrenToAnimate = []
            })

            // If the placeholder was holding the container open while elements were
            // leaving, we we can now set its height to zero.
            if (this.heightPlaceholderData.domNode) {
                this.heightPlaceholderData.domNode.style.height = '0'
            }
        }
    }

    callChildrenHook(hook) {
        const elements = []
        const domNodes = []

        this.childrenToAnimate.forEach((childKey) => {
            // If this was an exit animation, the child may no longer exist.
            // If so, skip it.
            const child = this.findChildByKey(childKey)

            if (!child) {
                return
            }

            elements.push(child)

            if (this.hasChildData(childKey)) {
                domNodes.push(this.getChildData(childKey).domNode)
            }
        })

        hook(elements, domNodes)
    }

    updateBoundingBoxCaches() {
        // This is the ONLY place that parentData and childrenData's
        // bounding boxes are updated. They will be calculated at other times
        // to be compared to this value, but it's important that the cache is
        // updated once per update.
        const parentDomNode = this.parentData.domNode

        if (!parentDomNode) {
            return
        }

        this.parentData.boundingBox = this.props.getPosition(parentDomNode)

        // Splitting DOM reads and writes to be peformed in batches
        const childrenBoundingBoxes = []

        this.state.children.forEach((child) => {
            const childKey = getKey(child)

            // It is possible that a child does not have a `key` property;
            // Ignore these children, they don't need to be moved.
            if (!childKey) {
                childrenBoundingBoxes.push(null)
                return
            }

            // In very rare circumstances, for reasons unknown, the ref is never
            // populated for certain children. In this case, avoid doing this update.
            // see: https://github.com/joshwcomeau/react-flip-move/pull/91
            if (!this.hasChildData(childKey)) {
                childrenBoundingBoxes.push(null)
                return
            }

            const childData = this.getChildData(childKey)

            // If the child element returns null, we need to avoid trying to
            // account for it
            if (!childData.domNode || !child) {
                childrenBoundingBoxes.push(null)
                return
            }

            childrenBoundingBoxes.push(
                getRelativeBoundingBox({
                    childDomNode: childData.domNode,
                    parentDomNode,
                    getPosition: this.props.getPosition,
                }),
            )
        })

        this.state.children.forEach((child, index) => {
            const childKey = getKey(child)

            const childBoundingBox = childrenBoundingBoxes[index]

            if (!childKey) {
                return
            }

            this.setChildData(childKey, {
                boundingBox: childBoundingBox,
            })
        })
    }

    computeInitialStyles(child) {
        if (child.appearing) {
            return this.props.appearAnimation ? this.props.appearAnimation.from : {}
        } else if (child.entering) {
            if (!this.props.enterAnimation) {
                return {}
            }
            // If this child was in the middle of leaving, it still has its
            // absolute positioning styles applied. We need to undo those.
            return {
                position: '',
                top: '',
                left: '',
                right: '',
                bottom: '',
                ...this.props.enterAnimation.from,
            }
        } else if (child.leaving) {
            return this.props.leaveAnimation ? this.props.leaveAnimation.from : {}
        }

        const childData = this.getChildData(getKey(child))
        const childDomNode = childData.domNode
        const childBoundingBox = childData.boundingBox
        const parentBoundingBox = this.parentData.boundingBox

        if (!childDomNode) {
            return {}
        }

        const [dX, dY] = getPositionDelta({
            childDomNode,
            childBoundingBox,
            parentBoundingBox,
            getPosition: this.props.getPosition,
        })

        return {
            transform: `translate(${dX}px, ${dY}px)`,
        }
    }

    isAnimationDisabled(props) {
        // If the component is explicitly passed a `disableAllAnimations` flag,
        // we can skip this whole process. Similarly, if all of the numbers have
        // been set to 0, there is no point in trying to animate; doing so would
        // only cause a flicker (and the intent is probably to disable animations)
        // We can also skip this rigamarole if there's no browser support for it.
        return (
            noBrowserSupport ||
            props.disableAllAnimations ||
            (props.duration === 0 && props.delay === 0 && props.staggerDurationBy === 0 && props.staggerDelayBy === 0)
        )
    }

    findChildByKey(key) {
        return find((child) => getKey(child) === key, this.state.children)
    }

    hasChildData(key) {
        // Object has some built-in properties on its prototype, such as toString.  hasOwnProperty makes
        // sure that key is present on childrenData itself, not on its prototype.
        return Object.prototype.hasOwnProperty.call(this.childrenData, key)
    }

    getChildData(key) {
        return this.hasChildData(key) ? this.childrenData[key] : {}
    }

    setChildData(key, data) {
        this.childrenData[key] = { ...this.getChildData(key), ...data }
    }

    removeChildData(key) {
        delete this.childrenData[key]
        this.setState((prevState) => ({
            ...prevState,
            children: prevState.children.filter((child) => child.element.key !== key),
        }))
    }

    createHeightPlaceholder() {
        const { typeName } = this.props

        // If requested, create an invisible element at the end of the list.
        // Its height will be modified to prevent the container from collapsing
        // prematurely.
        const isContainerAList = typeName === 'ul' || typeName === 'ol'
        const placeholderType = isContainerAList ? 'li' : 'div'

        return createElement(placeholderType, {
            key: 'height-placeholder',
            ref: (domNode) => {
                this.heightPlaceholderData.domNode = domNode
            },
            style: { visibility: 'hidden', height: 0 },
        })
    }

    childrenWithRefs() {
        // We need to clone the provided children, capturing a reference to the
        // underlying DOM node. Flip Move needs to use the React escape hatches to
        // be able to do its calculations.
        return this.state.children.map((child) =>
            cloneElement(child.element, {
                ref: (element) => {
                    // Functional Components without a forwarded ref are not supported by FlipMove,
                    // because they don't have instances.
                    if (!element) {
                        return
                    }

                    const domNode = getNativeNode(element)
                    this.setChildData(getKey(child), { domNode })
                },
            }),
        )
    }

    render() {
        const { typeName, delegated, leaveAnimation, maintainContainerHeight } = this.props

        const children = this.childrenWithRefs()
        if (leaveAnimation && maintainContainerHeight) {
            children.push(this.createHeightPlaceholder())
        }

        if (!typeName) return children

        const props = {
            ...delegated,
            children,
            ref: (node) => {
                this.parentData.domNode = node
            },
        }

        return createElement(typeName, props)
    }
}

//const enhancedFlipMove = /* #__PURE__ */ propConverter(FlipMove)

export default FlipMove
