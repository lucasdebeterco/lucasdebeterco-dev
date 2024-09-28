import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'

import { professionalAchievements } from '@/app/components/projects/data/professional-achievements'
import { ProjectItem } from '@/app/components/projects/project-item'

export function ProfessionalAchievements() {
    return (
        <section id="professional-achievements" className="flex flex-col justify-center gap-6">
            <h2 id="professional-achievements-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">4.</span>
                    Professional Achievements
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
                {professionalAchievements.map((item, index) => (
                    <ProjectItem id={index} item={item} />
                ))}
            </div>
        </section>
    )
}