import Link from 'next/link'

import { HeaderLink } from '@/app/components/header/header-link'

export function Header() {
    return (
        <div className="fixed flex w-full items-center justify-between bg-slate-900 px-10 py-6 shadow-overlay">
            <span className="text-3xl">Lucas Debeterco</span>

            <nav className="flex gap-4">
                <HeaderLink sectionId="about-section">
                    <span className="mr-1 text-indigo-600">1.</span>
                    About
                </HeaderLink>
                <HeaderLink sectionId="experience-section">
                    <span className="mr-1 text-indigo-600">2.</span>
                    Experience
                </HeaderLink>
                <HeaderLink sectionId="projects-section">
                    <span className="mr-1 text-indigo-600">3.</span>
                    Projects
                </HeaderLink>
                <HeaderLink sectionId="contact-section">
                    <span className="mr-1 text-indigo-600">4.</span>
                    Contact
                </HeaderLink>
                <Link href="#">Download CV</Link>
            </nav>
        </div>
    )
}