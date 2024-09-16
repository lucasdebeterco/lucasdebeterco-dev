import Link from 'next/link'

import { HeaderLink } from '@/app/components/header/header-link'

export function Header() {
    return (
        <header id="header" className="fixed z-10 flex min-h-[88px] w-full items-center justify-between bg-slate-900 bg-opacity-60 px-10 py-6 shadow-overlay backdrop-blur">
            <span id="header-logo" className="text-3xl">Lucas Debeterco</span>

            <nav className="navbar flex items-center gap-6 [&>a]:py-2">
                <div id="about-section-link">
                    <HeaderLink sectionId="about-section">
                        <span className="mr-1 text-indigo-500">1.</span>
                        About
                    </HeaderLink>
                </div>
                <div id="tools-section-link">
                    <HeaderLink sectionId="tools-section">
                        <span className="mr-1 text-indigo-500">2.</span>
                        Tools
                    </HeaderLink>
                </div>
                <div id="experience-section-link">
                    <HeaderLink sectionId="experience-section">
                        <span className="mr-1 text-indigo-500">3.</span>
                        Experience
                    </HeaderLink>
                </div>
                <div id="professional-achievements-section-link">
                    <HeaderLink sectionId="professional-achievements">
                        <span className="mr-1 text-indigo-500">4.</span>
                        Professional Achievements
                    </HeaderLink>
                </div>
                <div id="projects-section-link">
                    <HeaderLink sectionId="projects-section">
                        <span className="mr-1 text-indigo-500">5.</span>
                        Projects
                    </HeaderLink>
                </div>
                <Link
                    id="download-cv-btn"
                    className="rounded-md bg-indigo-600 px-4 py-2"
                    href="https://docs.google.com/document/d/1fq_V-xOR7V-zkqSvxnxsgUlVA3M7EP6PV3CPV0VEIqk/edit?usp=sharing"
                    target="_blank"
                >
                    Download CV
                </Link>
            </nav>
        </header>)
}