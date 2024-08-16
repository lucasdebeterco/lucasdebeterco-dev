import Link from 'next/link'

import { HeaderLink } from '@/app/components/header/header-link'

export function Header() {
    return (
        <header id="header" className="z-10 flex w-full items-center justify-between bg-slate-900 px-10 py-6 shadow-overlay min-h-[88px]">
            <span id='header-logo' className="text-3xl">Lucas Debeterco</span>

            <nav className="navbar flex items-center gap-6 [&>a]:py-2">
                <div id='about-section-link'>
                    <HeaderLink sectionId="about-section">
                        <span className="mr-1 text-indigo-500">1.</span>
                        About
                    </HeaderLink>
                </div>
                <div id='experience-section-link'>
                    <HeaderLink sectionId="experience-section">
                        <span className="mr-1 text-indigo-500">2.</span>
                        Experience
                    </HeaderLink>
                </div>
                <div id='projects-section-link'>
                    <HeaderLink sectionId="projects-section">
                        <span className="mr-1 text-indigo-500">3.</span>
                        Projects
                    </HeaderLink>
                </div>
                <div id='contact-section-link'>
                    <HeaderLink sectionId="contact-section">
                        <span className="mr-1 text-indigo-500">4.</span>
                        Contact
                    </HeaderLink>
                </div>
                <Link id='download-cv-btn' className="rounded-md bg-indigo-600 px-4 py-2" href="#">Download CV</Link>
            </nav>
        </header>
    )
}