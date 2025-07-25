export function setupNavbarClickEvents() {
    const container = document.getElementById('navbar-container')
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
