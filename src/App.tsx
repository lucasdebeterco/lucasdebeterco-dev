import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
    return (
        <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
                <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-fuchsia-500/15 blur-3xl" />
                <div className="absolute -bottom-40 right-0 h-80 w-[40rem] rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
            </div>

            <Header />
      
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <section id="hero" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 py-16 md:flex-row md:py-24">
                    <div className="md:w-1/2">
                        <span className="inline-flex items-center rounded-full border border-indigo-200/60 bg-white/60 px-3 py-1 text-sm font-medium text-indigo-700 backdrop-blur dark:border-indigo-900/50 dark:bg-slate-900/40 dark:text-indigo-300">
                            Hello, I'm
                        </span>
                        <h1 className="mb-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400 md:text-5xl lg:text-6xl">
                            Lucas Debeterco
                        </h1>
                        <h2 className="mb-6 text-xl font-medium text-slate-700 dark:text-slate-300 md:text-2xl">
                            A passionate <span className="text-indigo-600 dark:text-indigo-400">web developer</span> creating solutions for modern challenges
                        </h2>
                        <p className="mb-8 max-w-lg text-slate-600 dark:text-slate-400">
                            I’m a front-end software engineer specialized in building accessible products using the <strong>Javascript ecosystem.</strong>
                        </p>
            
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="mailto:lucasdebeterco@gmail.com"
                                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white shadow-sm transition hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
                            >
                                <Mail size={18} />
                                Contact Me
                            </a>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/lucasdebeterco"
                                    className="p-2 text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                                    className="p-2 text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/lucasdebeterco/"
                                    className="p-2 text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
          
                    <div className="flex justify-center md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-xl"></div>
                            <img 
                                src="/about/profile-photo.png"
                                alt="Lucas Debeterco" 
                                className="relative size-72 rounded-full border-4 border-white object-cover shadow-lg dark:border-slate-800"
                            />
                        </div>
                    </div>
                </section>
        
                <About />
                <Skills />
                <Experience />
                <Projects />
            </main>
      
            <Footer />
        </div>
    )
}

export default App