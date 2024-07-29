import Image from 'next/image'
import Link from 'next/link'

export function Experience() {
    return (
        <section id="experience-section" className="flex flex-col gap-12">
            <h2 className="text-xl">
                <span className="mr-1 text-indigo-500">2.</span>
                Experience
            </h2>

            <div className="flex gap-20 px-12">
                <div className="flex flex-col">
                    <Link href="https://www.magazord.com.br/" className="flex items-center justify-center gap-4" target="_blank">
                        <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={44} height={52}/>
                        <div className="flex flex-col text-nowrap">
                            <h3 className="font-bold">Magazord Tecnologia</h3>
                            <span className="text-base">4y 5m</span>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-4 text-sm">
                        <div>
                            <h3 className="text-base font-bold">Front-End Developer</h3>
                            March 2021 - now | 3 years 6 months
                        </div>

                        <p className="text-slate-300">
                            After internship time, I kept taking on new responsibilities, new technologies and even mentoring new people on the team.
                            During this period, the company began a technology update process, where I had contact and specialized myself in
                            ReactJS, Typescript, RESTful APIs and others modern concepts of the Front-end ecosystem.
                        </p>

                        <ul className="ml-8 list-disc text-slate-300">
                            <li>Building interfaces from scratch using ReactJS and Typescript.</li>
                            <li>Architecture of Front-end projects.</li>
                            <li>Help other developers with pair programming and code reviews.</li>
                            <li>Responsible for mentoring new developers on the team.</li>
                            <li>Communication with other development sectors to create APIs from scratch.</li>
                            <li>Web concepts such as SSR, SPA, SSG and SEO.</li>
                            <li>Use of state management tools and techniques.</li>
                            <li>Scrum Methodology</li>
                            <li>Design System development (Storybook).</li>
                        </ul>

                        <ul className="flex flex-wrap gap-2 text-xs [&>li]:rounded-full [&>li]:bg-indigo-900/40 [&>li]:px-4 [&>li]:py-2 [&>li]:text-indigo-100">
                            <li>React.js</li>
                            <li>TypeScript</li>
                            <li>API REST</li>
                            <li>Software Architecture</li>
                            <li>JavaScript</li>
                            <li>Design System</li>
                            <li>Scss</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>Styled-components</li>
                            <li>Twig</li>
                            <li>Vite</li>
                            <li>ESLint</li>
                            <li>Scrum</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 text-sm">
                        <div>
                            <h3 className="text-base font-bold">Front-End Developer (Internship)</h3>
                            April 2020 - March 2021 | 1 year
                        </div>

                        <p className="text-slate-300">
                            Internship where I was responsible for maintaining the E-Commerce platform and client
                            websites.
                            Over time, I gained new responsibilities, such as developing new interfaces, got involved in
                            large projects and created templates for clients from scratch.
                        </p>

                        <ul className="ml-8 list-disc text-slate-300">
                            <li>Development of complete site templates for new customers.</li>
                            <li>SEO techniques and strategies.</li>
                            <li>Application HTML, CSS and Javascript/JQuery concepts.</li>
                            <li>Template management using Twig.</li>
                            <li>Back-end maintenance and contact with PostgreSQL database.</li>
                        </ul>

                        <ul className="flex flex-wrap gap-2 text-xs [&>li]:rounded-full [&>li]:bg-indigo-900/40 [&>li]:px-4 [&>li]:py-2 [&>li]:text-indigo-100">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Twig</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>SASS</li>
                            <li>PHP</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>)
}