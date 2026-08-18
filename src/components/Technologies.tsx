const techCategories = [
    {
        title: '🤖 AI',
        tags: [
            'Claude',
            'Agentic Engineering',
            'BMAD',
            'GenAI Tools',
            'LLM Integration',
            'CI&T /FLOW',
        ],
    },
    {
        title: '💻 Front-end',
        tags: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Zustand',
            'Context API',
            'Redux',
            'Tailwind CSS',
            'Styled-components',
            'SASS / CSS3',
            'Vite',
            'JQuery',
            'Twig Template',
        ],
    },
    {
        title: '⚙️ Back-end & Banco de Dados',
        tags: [
            'Node.js',
            'Nest.js',
            'Express.js',
            'Prisma ORM',
            'API RESTful',
            'SQL',
            'PostgreSQL',
        ],
    },
    {
        title: '🛠️ Testes, Cloud & Ferramentas',
        tags: [
            'Playwright',
            'Cypress',
            'Vitest',
            'Jest',
            'ESLint',
            'AWS',
            'GitHub Actions',
            'Git Flow',
            'Jira / Agile',
        ],
    },
]

const Technologies = () => {
    return (
        <section className="scroll-mt-16 border-y border-[#E2E8F0] bg-white py-16 md:py-20" id="tecnologias">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mb-10">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E20D34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E20D34]">
                        Conhecimentos
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                        Tecnologias Dominadas
                    </h2>
                    <p className="mt-2 text-base text-[#64748B]">
                        Divisão das principais tecnologias e ferramentas utilizadas em projetos.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {techCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm"
                        >
                            <h3 className="mb-4 border-b border-[#E2E8F0] pb-3 font-heading text-base font-bold text-[#0F172A]">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies
