import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

import { HeaderLink } from '@/app/components/header/header-link'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const navItems = [
        {
            id: 'about-section-link',
            sectionId: 'about-section',
            description: 'About'
        },
        {
            id: 'tools-section-link',
            sectionId: 'tools-section',
            description: 'Tools'
        },
        {
            id: 'experience-section-link',
            sectionId: 'experience-section',
            description: 'Experience'
        },
        {
            id: 'professional-achievements-section-link',
            sectionId: 'professional-achievements',
            description: 'Professional Achievements'
        },
        {
            id: 'projects-section-link',
            sectionId: 'projects-section',
            description: 'Projects'
        }
    ]

    return (
        <header
            onTouchCancel={() => setIsMenuOpen(false)}
            id="header"
            className="fixed z-10 min-h-[88px] w-full bg-background-light bg-opacity-60 shadow-overlay backdrop-blur"
        >
            <div className="flex items-center justify-between px-4 py-6 md:px-10">
                <span id="header-logo" className="text-2xl md:text-3xl">Lucas Debeterco</span>

                <div className="md:hidden">
                    {isMenuOpen ? (
                        <button
                            title="Close menu"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center rounded-lg border-2 border-white from-blue-500 via-indigo-600 to-purple-800 p-2 hover:bg-gradient-to-br"
                        >
                            <X size={20}/>
                        </button>
                    ) : (
                        <button
                            title="Open menu"
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center rounded-lg border-2 border-white from-blue-500 via-indigo-600 to-purple-800 p-2 hover:bg-gradient-to-br"
                        >
                            <FaHamburger size={20}/>
                        </button>
                    )}
                </div>

                <nav className="navbar hidden items-center gap-6 md:flex [&>a]:py-2">
                    {navItems.map((item, index) => (
                        <div id={item.id} key={item.id}>
                            <HeaderLink sectionId={item.sectionId}>
                                <span className="mr-1 text-indigo-500">{index + 1}.</span>
                                {item.description}
                            </HeaderLink>
                        </div>
                    ))}
                    <Link
                        id="download-cv-btn"
                        className="rounded-md bg-indigo-600 px-4 py-2"
                        href="https://drive.google.com/file/d/1-0eui9eUXwEtkZadlcD1P-1tfQsdXLrd/view?usp=sharing"
                        target="_blank"
                    >
                        Download CV
                    </Link>
                </nav>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-[16px] top-[102px] mx-auto flex w-[calc(100%-32px)] flex-col items-center gap-6 rounded-md bg-background-light p-3 transition"
                    >
                        {navItems.map((item, index) => (
                            <div
                                id={item.id}
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full [&>a]:block [&>a]:w-full"
                                key={item.id}
                            >
                                <HeaderLink sectionId={item.sectionId}>
                                    <span className="mr-1 text-indigo-500">{index + 1}.</span>
                                    {item.description}
                                </HeaderLink>
                            </div>
                        ))}
                        <Link
                            id="download-cv-btn"
                            className="w-full rounded-md bg-indigo-600 px-4 py-2"
                            href="https://drive.google.com/file/d/1-0eui9eUXwEtkZadlcD1P-1tfQsdXLrd/view?usp=sharing"
                            target="_blank"
                        >
                            Download CV
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}