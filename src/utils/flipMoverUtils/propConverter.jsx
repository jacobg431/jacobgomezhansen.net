import { Component, Children } from 'react'
import { appearPresets, enterPresets, leavePresets, defaultPreset, disablePreset } from './enterLeavePresets'
import { isElementAnSFC, omit } from './helpers'
import { primitiveNodeSupplied, statelessFunctionalComponentSupplied } from './errorMessages'

function propConverter() {
    return class FlipMovePropConverter extends Component {
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

        checkChildren(children) {
            // FlipMove does not support stateless functional components.
            // Check to see if any supplied components won't work.
            // If the child doesn't have a key, it means we aren't animating it.
            // It's allowed to be an SFC, since we ignore it.
            Children.forEach(children, (child) => {
                // null, undefined, and booleans will be filtered out by Children.toArray
                if (child == null || typeof child === 'boolean') {
                    return
                }

                if (typeof child !== 'object') {
                    primitiveNodeSupplied()
                    return
                }

                if (isElementAnSFC(child) && child.key != null) {
                    statelessFunctionalComponentSupplied()
                }
            })
        }

        convertProps(props) {
            const workingProps = {
                // explicitly bypass the props that don't need conversion
                children: props.children,
                easing: props.easing,
                onStart: props.onStart,
                onFinish: props.onFinish,
                onStartAll: props.onStartAll,
                onFinishAll: props.onFinishAll,
                typeName: props.typeName,
                disableAllAnimations: props.disableAllAnimations,
                getPosition: props.getPosition,
                maintainContainerHeight: props.maintainContainerHeight,
                verticalAlignment: props.verticalAlignment,

                // Do string-to-int conversion for all timing-related props
                duration: this.convertTimingProp('duration'),
                delay: this.convertTimingProp('delay'),
                staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
                staggerDelayBy: this.convertTimingProp('staggerDelayBy'),

                // Our enter/leave animations can be specified as boolean (default or
                // disabled), string (preset name), or object (actual animation values).
                // Let's standardize this so that they're always objects
                appearAnimation: this.convertAnimationProp(props.appearAnimation, appearPresets),
                enterAnimation: this.convertAnimationProp(props.enterAnimation, enterPresets),
                leaveAnimation: this.convertAnimationProp(props.leaveAnimation, leavePresets),

                delegated: {},
            }

            this.checkChildren(workingProps.children)

            // Gather any additional props;
            // they will be delegated to the ReactElement created.
            const primaryPropKeys = Object.keys(workingProps)
            const delegatedProps = omit(this.props, primaryPropKeys)

            // The FlipMove container element needs to have a non-static position.
            // We use `relative` by default, but it can be overridden by the user.
            // Now that we're delegating props, we need to merge this in.
            delegatedProps.style = {
                position: 'relative',
                ...delegatedProps.style,
            }

            workingProps.delegated = delegatedProps

            return workingProps
        }

        convertTimingProp(prop) {
            const rawValue = this.props[prop]

            const value = typeof rawValue === 'number' ? rawValue : parseInt(rawValue, 10)

            if (isNaN(value)) {
                const defaultValue = FlipMovePropConverter.defaultProps[prop]
                return defaultValue
            }

            return value
        }

        convertAnimationProp(animation, presets) {
            switch (typeof animation) {
                case 'boolean': {
                    // If it's true, we want to use the default preset.
                    // If it's false, we want to use the 'none' preset.
                    return presets[animation ? defaultPreset : disablePreset]
                }

                case 'string': {
                    const presetKeys = Object.keys(presets)

                    if (presetKeys.indexOf(animation) === -1) {
                        return presets[defaultPreset]
                    }

                    return presets[animation]
                }

                default: {
                    return animation
                }
            }
        }

        render() {
            return this.convertProps(this.props)
        }
    }
}

export default propConverter
