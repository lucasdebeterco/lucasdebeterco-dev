'use client'

import { useEffect } from 'react'

import { About } from '@/app/components/about'
import { Experience } from '@/app/components/experience'
import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/header/header'
import { Presentation } from '@/app/components/presentation'
import { PersonalProjects } from '@/app/components/projects/personal-projects'
import { ProfessionalAchievements } from '@/app/components/projects/profession-achievements'
import { elementsToReveal } from '@/app/data/elementsToReveal'

export default function Home() {
    useEffect(() => {
        async function animate() {
            const sr = (await import('scrollreveal')).default
            elementsToReveal.forEach(element => {
                sr().reveal(element.selector, {
                    origin: 'top',
                    duration: 800,
                    delay: element.delay,
                    distance: '100px',
                    scale: 1,
                    easing: 'ease'
                })
            })
        }
        animate()
    }, [])

    return (
        <>
            <Header />

            <div className="mx-auto flex max-w-[1360px] flex-col gap-28 px-10 pt-28">
                <Presentation />
                <About />
                <Experience/>
                <ProfessionalAchievements />
                <PersonalProjects />
            </div>

            <Footer />
        </>
    )
}
