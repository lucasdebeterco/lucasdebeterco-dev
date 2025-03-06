import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="hero" className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              Lucas Debeterco
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6">
              A passionate <span className="text-indigo-600 dark:text-indigo-400">web developer</span> creating solutions for modern challenges
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              I’m a front-end software engineer specialized in building accessible products using the <strong>Javascript ecosystem.</strong>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:lucasdebeterco@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/lucasdebeterco"
                  className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                  className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com/lucasdebeterco/"
                  className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-xl"></div>
              <img 
                src="/about/profile-photo.png"
                alt="Lucas Debeterco" 
                className="relative w-72 h-72 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
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
  );
}

export default App;