import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
    const experiences = [
    // {
    //   title: 'Senior Fullstack Developer',
    //   company: 'WEG',
    //   location: 'Jaraguá do Sul, SC, Brazil ',
    //   period: 'Jan 2022 - Present',
    //   description: [
    //     'Lead the frontend development of the company\'s flagship product, improving performance by 40%',
    //     'Implemented a component library used across multiple projects, reducing development time by 30%',
    //     'Mentored junior developers and conducted code reviews to ensure high code quality',
    //     'Collaborated with designers and product managers to create intuitive user experiences',
    //   ],
    // },
        {
            title: 'Frontend Developer',
            company: 'Magazord Commerce',
            companyIcon: <img src="/experience/magazord-logo.svg" alt="Logo Magazord" width={14} height={14}/>,
            location: 'Rio do Sul, SC, Brazil',
            period: 'Mar 2018 - Present',
            resume:'Responsible for maintaining the e-commerce platform and client websites. Over time, I gained additional responsibilities, adopted new technologies, and mentored new team members. During this period, the company began a technology update process, in which I specialized in React.js, TypeScript, Next.js, RESTful APIs, React Query, and other modern front-end tools.',
            description: [
                'Built and architected front-end projects from scratch using Next.js, React.js and TypeScript',
                'Breaking down monolithic architectures into agile and manageable components using micro-frontends',
                'CI/CD practices using AWS Amplify',
                'Help other developers with pair programming, code reviews and mentored new developers on the team',
                'Collaborated with other teams, including QA and back-end, to create APIs from scratch',
                'Gained knowledge of web concepts such as SSR, SPA, SSG',
                'Applied SEO techniques and strategies',
                'Used state management tools and techniques',
                'Developed a Design System using Storybook',
                'Performed E2E testing using Cypress',
                'Followed Scrum methodology and Git Flow',
                'Developed complete site templates for new customers using Twig',
                'Basic knowledge in PHP and PostgreSQL'
            ],
        },
    ]

    return (
        <section id="experience" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-3xl font-bold">
          Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
                </h2>
        
                <div className="relative ml-6 space-y-10 border-l-2 border-indigo-200 pl-6 dark:border-indigo-800">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="relative rounded-xl bg-white p-6 shadow-md dark:bg-slate-800"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[30px] top-6 size-4 rounded-full border-4 border-white bg-indigo-600 dark:border-slate-900 dark:bg-indigo-400"></div>
              
                            <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                                    <p className="flex gap-2 font-medium text-indigo-600 dark:text-indigo-400">{exp.company}{exp.companyIcon}</p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <div className="mb-1 flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <Calendar size={16} className="mr-1" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <MapPin size={16} className="mr-1" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">{exp.resume}</p>
                            <ul className="mt-4 space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-2 mt-1.5 inline-block size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience