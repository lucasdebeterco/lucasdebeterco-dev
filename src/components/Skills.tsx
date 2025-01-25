import { skills } from '../data/skills.tsx'

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-3xl font-bold">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
                </h2>

                <ul className="[&>li]: grid gap-3 text-sm md:grid-cols-4 [&>li>span]:text-indigo-200 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:whitespace-nowrap [&>li]:rounded-md [&>li]:bg-white [&>li]:p-3 [&>li]:dark:bg-slate-800">
                    {skills.map(item => (
                        <li>
                            <div className="rounded-md bg-indigo-600 p-2">
                                {item.icon}
                            </div>
                            {item.skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills