import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  
    return (
        <footer id="contact" className="scroll-mt-16 border-t border-slate-200 bg-white/70 py-12 backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <h3 className="mb-4 text-xl font-bold text-indigo-700 dark:text-indigo-300">
                            Lucas<span className="text-slate-900 dark:text-white">_Debeterco</span>
                        </h3>
                        <p className="mb-4 flex max-w-md flex-col text-slate-600 dark:text-slate-400">
                            <span>Developed by Lucas Debeterco</span>
                            Built with Vite, React and TailwindCSS.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://github.com/lucasdebeterco" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://instagram.com/lucasdebeterco/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a 
                                href="mailto:lucasdebeterco@gmail.com" 
                                className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
          
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
          
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Contact Me</h4>
                        <div className="space-y-3">
                            <p className="text-slate-600 dark:text-slate-400">
                                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                            </p>
                            <a 
                                href="mailto:lucasdebeterco@gmail.com" 
                                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
        
                <div className="mt-12 border-t border-slate-200 pt-8 text-center dark:border-slate-700">
                    <p className="flex items-center justify-center text-slate-600 dark:text-slate-400">
                        © {currentYear} Lucas Debeterco. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer