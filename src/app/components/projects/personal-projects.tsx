import React from 'react'

import { personalProjects } from '@/app/components/projects/data/personal-projects'
import { ProjectItem } from '@/app/components/projects/project-item'

export function PersonalProjects() {
    return (
        <section id="projects-section" className="flex flex-col gap-6">
            <h2 id="projects-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">5.</span>
                Personal Projects
            </h2>

            <div className="grid grid-cols-3 gap-4">
                {personalProjects.map((item, index) => (
                    <ProjectItem id={index} item={item} />
                ))}
            </div>
        </section>
    )
}