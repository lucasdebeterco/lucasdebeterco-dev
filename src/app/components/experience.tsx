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

            <div id="experience-section-content" className="flex md:px-8">
                <Accordion type="multiple" className="flex w-full flex-col gap-5 text-sm [&>div:hover]:bg-background-light [&>div:hover]:drop-shadow-sm [&>div:hover_h3]:text-indigo-500 [&>div]:rounded-lg [&>div]:px-5 [&>div]:transition">
                    <AccordionItem value="item-1 flex">
                        <AccordionTrigger className="w-full">
                            <div className="flex flex-col gap-4 md:gap-1">
                                <div className="flex flex-col items-start gap-2 text-left md:flex-row md:items-center">
                                    <h3 className="text-lg font-bold transition">
                                        Front-End Developer
                                    </h3>
                                    <div className="flex flex-col text-sm text-slate-400">
                                        <span>(APR 2020 - PRESENT)</span>
                                    </div>
                                </div>
                                <span className="flex gap-2 text-sm">
                                    Magazord Tecnologia <Image src="/experience/magazord-logo.svg" alt="Logo Magazord" width={16} height={18}/>
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="max-w-[90%] text-slate-300">
                                Responsible for maintaining the e-commerce platform and client websites. Over time, I gained additional responsibilities, adopted new technologies, and mentored new team members. During this period, the company began a technology update process, in which I specialized in React.js, TypeScript, Next.js, RESTful APIs, React Query, and other modern front-end tools.
                            </p>
                            <ul className="ml-8 mt-5 flex list-disc flex-col gap-3 text-slate-300">
                                <li>Built and architected front-end projects from scratch using Next.js, React.js and TypeScript.</li>
                                <li>Breaking down monolithic architectures into agile and manageable components using micro-frontends.</li>
                                <li>CI/CD practices using AWS Amplify.</li>
                                <li>Help other developers with pair programming, code reviews and mentored new developers on the team.</li>
                                <li>Collaborated with other teams, including QA and back-end, to create APIs from scratch.</li>
                                <li>Gained knowledge of web concepts such as SSR, SPA, SSG.</li>
                                <li>Applied SEO techniques and strategies.</li>
                                <li>Used state management tools and techniques.</li>
                                <li>Developed a Design System using Storybook.</li>
                                <li>Performed E2E testing using Cypress.</li>
                                <li>Followed Scrum methodology and Git Flow.</li>
                                <li>Developed complete site templates for new customers using Twig.</li>
                                <li>Basic knowledge in PHP and PostgreSQL.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}