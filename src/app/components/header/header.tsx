import Link from 'next/link'

import { HeaderLink } from '@/app/components/header/header-link'

export function Header() {
    return (
        <header id="header" className="fixed flex w-full items-center justify-between bg-slate-900 px-10 py-6 shadow-overlay">
            <span className="text-3xl">Lucas Debeterco</span>

            <nav className="flex items-center gap-6 [&>a]:py-2">
                <HeaderLink sectionId="about-section">
                    <span className="mr-1 text-indigo-500">1.</span>
                    About
                </HeaderLink>
                <HeaderLink sectionId="experience-section">
                    <span className="mr-1 text-indigo-500">2.</span>
                    Experience
                </HeaderLink>
                <HeaderLink sectionId="projects-section">
                    <span className="mr-1 text-indigo-500">3.</span>
                    Projects
                </HeaderLink>
                <HeaderLink sectionId="contact-section">
                    <span className="mr-1 text-indigo-500">4.</span>
                    Contact
                </HeaderLink>
                <Link className="rounded-md bg-indigo-600 px-4 py-2" href="#">Download CV</Link>
            </nav>
        </header>
    )
}