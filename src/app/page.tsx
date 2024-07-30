'use client'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

import { About } from '@/app/components/about'
import { Experience } from '@/app/components/Experience'
import { Header } from '@/app/components/header/header'
import { Presentation } from '@/app/components/presentation'

export default function Home() {
    useEffect(() => {
        ScrollReveal().reveal('#header', {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        })
    }, [])

    return (
        <>
            <Header />

            <div className="mx-auto flex max-w-[1360px] flex-col gap-28 px-10 pt-28">
                <Presentation />
                <About />
                <Experience/>

                <section id="projects-section" className="">
                    <span className="mr-1 text-indigo-500">3.</span>
                    Projects
                </section>
                <section id="contact-section" className="">
                    <span className="mr-1 text-indigo-500">4.</span>
                    Contact
                </section>
            </div>
        </>)
}
