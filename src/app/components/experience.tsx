import Image from 'next/image'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export function Experience() {
    return (
        <section id="experience-section" className="flex flex-col gap-6">
            <h2 id="experience-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">2.</span>
                Experience
            </h2>

            <div id="experience-section-content" className="flex px-12">
                <Accordion type="multiple" className="w-full gap-3 text-sm [&>div:hover]:bg-[#141f35] [&>div:hover]:drop-shadow-sm [&>div:hover_h3]:text-indigo-500 [&>div]:rounded-lg [&>div]:px-5 [&>div]:transition">
                    <AccordionItem value="item-1 flex">
                        <div className="flex items-center">
                            <div className="mt-3 flex w-1/5 flex-col text-slate-400">
                                <span>MAR 2021 - PRESENT</span>
                                <span>3 years 6 months</span>
                            </div>
                            <AccordionTrigger className="w-4/5">
                                <div className="flex flex-col text-left">
                                    <div className="flex flex-col text-base">
                                        <h3 className="text-lg font-bold transition">Front-End Developer</h3>
                                        <span className="flex gap-2 text-sm">
                                            Magazord Tecnologia <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={16} height={18}/>
                                        </span>
                                    </div>

                                    <ul className="mt-6 flex flex-wrap gap-2 text-xs [&>li]:whitespace-nowrap [&>li]:rounded-full [&>li]:bg-indigo-900/40 [&>li]:px-3 [&>li]:py-2 [&>li]:text-indigo-200">
                                        <li>React.js</li>
                                        <li>Typescript</li>
                                        <li>Next.js</li>
                                        <li>API REST</li>
                                        <li>Software Architecture</li>
                                        <li>Design System</li>
                                        <li>Zustand | ContextAPI</li>
                                        <li>Cypress</li>
                                        <li>CI/CD</li>
                                        <li>JavaScript</li>
                                        <li>SCSS | CSS | Tailwind | Styled-components</li>
                                        <li>Twig Template Engine</li>
                                        <li>Vite</li>
                                        <li>ESLint</li>
                                        <li>Agile | Scrum</li>
                                        <li>Basic SQL | Postgres</li>
                                        <li>Basic PHP</li>
                                    </ul>
                                </div>
                            </AccordionTrigger>
                        </div>
                        <AccordionContent>
                            <p className="text-slate-300">
                                When I was hired from my internship, I kept taking on new responsibilities, working with new technologies and even mentoring new people on the team. During this period, the company began a technology update process, where I had contact and specialized myself in React.js, Typescript, RESTful APIs, React Query and others modern concepts of the Front-end ecosystem.
                            </p>

                            <ul className="ml-8 mt-5 flex list-disc flex-col gap-3 text-slate-300">
                                <li>Build and architect Front-end projects from scratch using React.js and Typescript.</li>
                                <li>Breaking down monolithic architectures into agile and manageable components using micro-frontends.</li>
                                <li>CI/CD practices using AWS Amplify.</li>
                                <li>Help other developers with pair programming and code reviews.</li>
                                <li>Responsible for mentoring new developers on the team.</li>
                                <li>Communication with other teams, such as QA and Back-end to create APIs from scratch.</li>
                                <li>Knowledge in web concepts such as SSR, SPA, SSG and SEO.</li>
                                <li>Use of state management tools and techniques.</li>
                                <li>Design System development (Storybook).</li>
                                <li>Cypress (E2E Testing).</li>
                                <li>Scrum Methodology.</li>
                                <li>Git Flow</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <div className="flex items-center">
                            <div className="mt-3 flex w-1/5 flex-col text-slate-400">
                                <span>APR 2020 - MAR 2021</span>
                                <span>1 year</span>
                            </div>
                            <AccordionTrigger className="w-4/5">
                                <div className="flex flex-col text-left">
                                    <div className="flex flex-col text-base">
                                        <h3 className="text-lg font-bold transition">Front-End Developer (Internship)</h3>
                                        <span className="flex gap-2 text-sm">
                                        Magazord Tecnologia <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={16} height={18}/>
                                        </span>
                                    </div>

                                    <ul className="mt-6 flex flex-wrap gap-2 text-xs [&>li]:whitespace-nowrap [&>li]:rounded-full [&>li]:bg-indigo-900/40 [&>li]:px-3 [&>li]:py-2 [&>li]:text-indigo-200">
                                        <li>HTML</li>
                                        <li>SASS | CSS</li>
                                        <li>Twig Template Engine</li>
                                        <li>JavaScript</li>
                                        <li>JQuery</li>
                                        <li>Basic PHP</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>
                            </AccordionTrigger>
                        </div>
                        <AccordionContent>
                            <p className="text-slate-300">
                                I was responsible for maintaining the E-Commerce platform and client websites. Over time, I gained new responsibilities, such as developing new interfaces, got involved in large projects and created templates for clients from scratch.
                            </p>

                            <ul className="ml-8 flex list-disc flex-col gap-3 text-slate-300">
                                <li>Development of complete site templates for new customers.</li>
                                <li>SEO techniques and strategies.</li>
                                <li>Application HTML, CSS and Javascript/JQuery concepts.</li>
                                <li>Template management using Twig.</li>
                                <li>Back-end maintenance and contact with PostgreSQL database.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}