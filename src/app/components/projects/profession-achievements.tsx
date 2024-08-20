import { professionalAchievements } from '@/app/components/projects/data/professional-achievements'
import { ProjectItem } from '@/app/components/projects/project-item'

export function ProfessionalAchievements() {
    return (
        <section id="professional-achievements" className="flex flex-col justify-center gap-6">
            <h2 id="professional-achievements-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">3.</span>
                    Professional Achievements
            </h2>

            <div className="grid grid-cols-3 gap-4">
                {professionalAchievements.map((item, index) => (
                    <ProjectItem
                        id={index}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc[0]}
                        imageAlt={item.imageAlt}
                        githubLink={item.githubLink}
                        productionLink={item.productionLink}
                        tools={item.tools}
                    />
                ))}
            </div>
        </section>
    )
}