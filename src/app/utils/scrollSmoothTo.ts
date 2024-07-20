export function scrollSmoothTo(event, elementId) {
    event.preventDefault()
    const element = document.getElementById(elementId)

    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}