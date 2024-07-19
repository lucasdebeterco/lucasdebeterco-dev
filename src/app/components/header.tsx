export function Header() {
    return (
        <div className="flex justify-between p-10 shadow-overlay">
            <span className="text-3xl">Lucas Debeterco</span>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Resume</a></li>
                </ul>
            </nav>
        </div>)
}