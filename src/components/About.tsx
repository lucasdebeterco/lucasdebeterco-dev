import { Globe, GraduationCap } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-3xl font-bold">
                    About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                </h2>
        
                <div className="mb-8 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                        I am a developer with a Bachelor's degree in Information Systems and professional experience in front-end development. I have contributed to <strong>projects with milions of daily users</strong> and have <strong>developed applications from scratch</strong> to meet the needs of various consumers and retailers in the e-commerce market.
                    </p>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                        With over <strong>7 years of professional experience in React.js, TypeScript and Next.js</strong>, I have also demonstrated strong teamwork skills, mentoring new members in my squad multiple times.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
                        <div className="mb-4 flex items-center">
                            <div className="mr-4 rounded-lg bg-indigo-100 p-2 dark:bg-indigo-900/50">
                                <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold">Location</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                            Based in Rio do Sul, Santa Catarina, Brazil. Available for remote work worldwide.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
                        <div className="mb-4 flex items-center">
                            <div className="mr-4 rounded-lg bg-indigo-100 p-2 dark:bg-indigo-900/50">
                                <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold">Education</h3>
                        </div>
                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                            Computer Science from Instituto Federal Catarinense.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            Bachelor's degree in Information Systems from UNIDAVI
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About