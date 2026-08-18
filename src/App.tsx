import { useState } from 'react'

import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
    const [toastMessage, setToastMessage] = useState<string | null>(null)

    const showToast = (message: string) => {
        setToastMessage(message)
        setTimeout(() => {
            setToastMessage(null)
        }, 4000)
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#334155]">
            <Header onShowToast={showToast} />
            
            <main>
                <Hero />
                <Experience />
                <Technologies />
                <Projects />
            </main>

            <Footer onShowToast={showToast} />

            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-lg border-l-4 border-[#E20D34] bg-[#0F172A] px-5 py-3.5 text-xs font-semibold text-white shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
                    <span>📧</span>
                    <span>{toastMessage}</span>
                </div>
            )}
        </div>
    )
}

export default App