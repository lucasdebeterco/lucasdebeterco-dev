import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect,useState } from 'react'

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
    // Check for user preference
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const savedTheme = localStorage.getItem('theme')
    
        if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="shrink-0">
                        <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Lucas<span className="text-slate-900 dark:text-white">_Debeterco</span>
                        </a>
                    </div>
          
                    {/* Desktop Navigation */}
                    <nav className="hidden space-x-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1SmWreX6Z9DaxAc_oZKu9rpi8DIdau_GQ/view?usp=sharing"
                            target="_blank"
                            className={`rounded-md bg-indigo-600  px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 hover:text-indigo-600 dark:text-white dark:hover:text-slate-200`} rel="noreferrer"
                        >
              Download CV
                        </a>
                    </nav>
          
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-slate-600 hover:text-indigo-600 focus:outline-none dark:text-slate-300 dark:hover:text-indigo-400"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
            
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="ml-2 rounded-md p-2 text-slate-600 hover:text-indigo-600 focus:outline-none dark:text-slate-300 dark:hover:text-indigo-400 md:hidden"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
      
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 border-b border-slate-200 bg-white px-2 pb-3 pt-2 dark:border-slate-800 dark:bg-slate-900 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400 ${link.name === 'Download CV' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1SmWreX6Z9DaxAc_oZKu9rpi8DIdau_GQ/view?usp=sharing"
                            target="_blank"
                            className={`block rounded-md bg-indigo-600 px-3  py-2 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-700 hover:text-indigo-600 dark:text-white dark:hover:text-slate-200`} rel="noreferrer"
                        >
              Download CV
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header