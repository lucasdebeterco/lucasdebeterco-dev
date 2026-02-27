import { skills } from '../data/skills.tsx'

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-3xl font-bold">
                    My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
                </h2>

                <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map(item => (
                        <li
                            key={item.skill}
                            className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200/60 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
                        >
                            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 p-2 text-white shadow-sm">
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