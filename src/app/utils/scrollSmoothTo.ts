export function scrollSmoothTo(event, elementId) {
    event.preventDefault()
    const element = document.getElementById(elementId)
    const y = element.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({top: y, behavior: 'smooth'})
}