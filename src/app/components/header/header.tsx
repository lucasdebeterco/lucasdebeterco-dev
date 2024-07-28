'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { HeaderLink } from '@/app/components/header/header-link'
import sr from '@/app/utils/sr'

export function Header() {
    const revealContainer = useRef(null)

    useEffect(() => {
        sr?.reveal(revealContainer.current, {
            srConfig: (delay = 200, viewFactor = 0.25) => ({
                origin: 'bottom',
                distance: '20px',
                duration: 500,
                delay,
                rotate: { x: 0, y: 0, z: 0 },
                opacity: 0,
                scale: 1,
                easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                mobile: true,
                reset: false,
                useDelay: 'always',
                viewFactor,
                viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            }),
        })
    }, [])

    return (
        <div className="fixed flex w-full items-center justify-between bg-slate-900 px-10 py-6 shadow-overlay" ref={revealContainer}>
            <span className="text-3xl">Lucas Debeterco</span>

            <nav className="flex items-center gap-6 [&>a]:py-2">
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
                <Link className="rounded-md bg-indigo-600 px-4 py-2" href="#">Download CV</Link>
            </nav>
        </div>
    )
}