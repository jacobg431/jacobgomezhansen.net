import { useState, useEffect } from 'react'

export function useDeviceDetection() {
    const [device, setDevice] = useState('')

    useEffect(() => {
        const detectDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase()
            const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent)
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent)

            if (isMobile) setDevice('Mobile')
            else if (isTablet) setDevice('Tablet')
            else setDevice('Desktop')
        }

        detectDevice()
        window.addEventListener('resize', detectDevice)

        return () => window.removeEventListener('resize', detectDevice)
    }, [])

    return device
}
