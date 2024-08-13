import { ProjectItem } from '@/app/components/projects/project-item'

export function Projects() {
    return (
        <section id="projects-section" className="flex flex-col gap-6">
            <h2 id="projects-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">4.</span>
                Projects
            </h2>

            <div className="grid grid-cols-3 gap-4">
                <ProjectItem
                    id={1}
                    imageSrc="/projects/pizza-shop.png"
                    imageAlt="Pizza Shop Project"
                    githubLink="https://github.com/lucasdebeterco/pizza-shop"
                    productionLink="https://github.com/lucasdebeterco/pizza-shop"
                    title="Pizza Shop"
                    description="A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size."
                    tools={['Next.js', 'Tailwind CSS', 'ReactJS']}
                />
            </div>
        </section>
    )
}