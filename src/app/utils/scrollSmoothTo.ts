export function scrollSmoothTo(event: React.MouseEvent<HTMLElement>, elementId: string) {
    event.preventDefault()
    const element = document.getElementById(elementId)
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 120
        window.scrollTo({top: y, behavior: 'smooth'})
    }
}