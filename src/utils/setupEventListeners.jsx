import { useState, useEffect } from "react";

export function setupDeviceDetectionEvents() {
    
    const [device, setDevice] = useState('')
    useEffect(() => {
        const handleDeviceDetection = () => {
            const userAgent = navigator.userAgent.toLowerCase()
            const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent)
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent)
            if (isMobile) setDevice('Mobile')
            else if (isTablet) setDevice('Tablet')
            else setDevice('Desktop')
        }

        handleDeviceDetection()
        window.addEventListener('resize', handleDeviceDetection)

        return () => window.removeEventListener('resize', handleDeviceDetection)
    }, [])

    return device
}

export function setupNavbarClickEvents(elementId) {
    const container = document.getElementById(elementId)
    if (!container) return () => {}

    const items = container.querySelectorAll('a')

    // Scroll to target element on click event
    const handleClick = (event) => {
        event.preventDefault()
        const targetId = event.currentTarget.href.match(/[^#]*$/)[0]
        if (targetId.split(' ').length == !1) return

        const targetElement = document.getElementById(targetId)
        if (!targetElement) return

        targetElement.scrollIntoView({ behavior: 'smooth' })
    }

    // Add click event listeners
    items.forEach((item) => {
        item.addEventListener('click', handleClick)
    })

    // Return cleanup function to remove listeners
    return () => {
        items.forEach((item) => {
            item.removeEventListener('click', handleClick)
        })
    }
}
