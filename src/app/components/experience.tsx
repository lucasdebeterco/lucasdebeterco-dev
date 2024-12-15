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
                <span className="mr-1 text-indigo-500">3.</span>
                Experience
            </h2>

            <div id="experience-section-content" className="flex gap-4 md:px-8">
                <div className="hidden w-[188px] flex-col items-center justify-between gap-2 py-6 text-sm md:visible md:flex">
                    <div className="mt-3 flex flex-col text-slate-400">
                        <span>MAR 2021 - PRESENT</span>
                    </div>
                    <div className="relative h-full w-[3px] bg-indigo-900 before:absolute before:left-[-4px] before:size-[10px] before:rounded-full before:bg-indigo-700 after:absolute after:bottom-0 after:left-[-4px] after:size-[10px] after:rounded-full after:bg-indigo-700"></div>
                    <div className="mt-3 flex flex-col text-slate-400">
                        <span>APR 2020 - MAR 2021</span>
                    </div>
                </div>

                <Accordion type="multiple" className="flex w-full flex-col gap-5 text-sm [&>div:hover]:bg-background-light [&>div:hover]:drop-shadow-sm [&>div:hover_h3]:text-indigo-500 [&>div]:rounded-lg [&>div]:px-5 [&>div]:transition">
                    <AccordionItem value="item-1 flex">
                        <AccordionTrigger className="w-full">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-left text-lg font-bold transition">
                                    Front-End Developer
                                </h3>
                                <span className="flex gap-2 text-sm">
                                    Magazord Tecnologia <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={16} height={18}/>
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-300">
                                After my period as a trainee, I took on new responsibilities, adopted new technologies, and mentored new team members. During this period, the company began a technology update process, in which I specialized in ReactJS, TypeScript, RESTful APIs, React Query, and other modern front-end concepts.
                            </p>
                            <ul className="ml-8 mt-5 flex list-disc flex-col gap-3 text-slate-300">
                                <li>Built and architected front-end projects from scratch using React.js and TypeScript.</li>
                                <li>Built and architected Next.js front-end projects from scratch.</li>
                                <li>Breaking down monolithic architectures into agile and manageable components using micro-frontends.</li>
                                <li>CI/CD practices using AWS Amplify.</li>
                                <li>Help other developers with pair programming and code reviews.</li>
                                <li>Mentored new developers on the team.</li>
                                <li>Collaborated with other teams, including QA and back-end, to create APIs from scratch.</li>
                                <li>Gained knowledge of web concepts such as SSR, SPA, SSG, and SEO.</li>
                                <li>Used state management tools and techniques.</li>
                                <li>Developed a design system using Storybook.</li>
                                <li>Performed E2E testing using Cypress.</li>
                                <li>Followed Scrum methodology and Git Flow.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="w-full">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-left text-lg font-bold transition">
                                    Front-End Developer Trainee
                                </h3>
                                <span className="flex gap-2 text-sm">
                                    Magazord Tecnologia <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={16} height={18}/>
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-300">
                                During my period as a trainee, I was responsible for maintaining the e-commerce platform and client websites. Over time, I gained additional responsibilities, such as developing new interfaces, getting involved in large projects, and creating templates for clients from scratch.
                            </p>

                            <ul className="ml-8 mt-5 flex list-disc flex-col gap-3 text-slate-300">
                                <li>Developed complete site templates for new customers.</li>
                                <li>Applied SEO techniques and strategies.</li>
                                <li>Utilized HTML, CSS, and JavaScript/jQuery concepts.</li>
                                <li>Managed templates using Twig.</li>
                                <li>Maintained back-end functionality and worked with PostgreSQL databases.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>)
}