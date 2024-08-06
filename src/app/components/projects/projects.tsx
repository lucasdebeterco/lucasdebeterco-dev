import { ProjectItem } from '@/app/components/projects/project-item'

export function Projects() {
    return (
        <section id="projects-section" className="flex flex-col gap-6">
            <h2 className="text-xl">
                <span className="mr-1 text-indigo-500">3.</span>
                Projects
            </h2>

            <div className="grid grid-cols-3 gap-4">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </section>
    )
}