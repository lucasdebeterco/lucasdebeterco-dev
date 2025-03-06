import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for user preference
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Lucas<span className="text-slate-900 dark:text-white">_Debeterco</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors'
              >
                {link.name}
              </a>
            ))}
            <a
              href='https://drive.google.com/file/d/1SmWreX6Z9DaxAc_oZKu9rpi8DIdau_GQ/view?usp=sharing'
              target='_blank'
              className={`bg-indigo-600 hover:bg-indigo-700  text-white dark:text-white dark:hover:text-slate-200 rounded-md hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Download CV
            </a>
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-2 md:hidden p-2 rounded-md text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-slate-800 ${link.name === 'Download CV' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='https://drive.google.com/file/d/1SmWreX6Z9DaxAc_oZKu9rpi8DIdau_GQ/view?usp=sharing'
              target='_blank'
              className={`text-center block bg-indigo-600 hover:bg-indigo-700  text-white dark:text-white dark:hover:text-slate-200 rounded-md hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;