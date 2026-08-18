const experiences = [
    {
        role: 'Senior Software Engineer',
        company: 'CI&T',
        period: '2025 - Presente',
        location: '📍 Remoto • Brasil',
        bullets: [
            'Atuação como Desenvolvedor Sênior e liderança da arquitetura de projetos utilizando Next.js e React.js.',
            'Utilização prática diária de Claude AI, agentes e ferramentas de GenAI para aceleração de código, arquitetura e produtividade.',
            'Aplicação rigorosa de melhores práticas de arquitetura front-end para estabilidade e escalabilidade.',
            'Implementação do zero de autenticação SSO (Single Sign-On) com suporte a múltiplos provedores de identidade.',
            'Desenvolvimento e manutenção de automação de testes completos com Playwright e Jest.',
            'Colaboração direta com equipes multidisciplinares para definição e integração contínua de novas funcionalidades.',
            'Condução diária de code reviews, pair programming e orientação técnica constante para os desenvolvedores do time.',
        ],
        tags: [
            'Next.js',
            'React.js',
            'TypeScript',
            'SSO Auth',
            'Playwright',
            'Jest',
            'Front-end Architecture',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'Magazord Commerce',
        period: '2018 - 2025',
        location: '📍 Rio do Sul, SC, Brasil • Híbrido',
        bullets: [
            'Contribuição em sistemas de e-commerce atendendo milhões de usuários (consumidores e lojistas).',
            'Construção de APIs e aplicações utilizando NestJS, Node.js, TypeScript e bancos de dados PostgreSQL.',
            'Construção e arquitetura de projetos do zero utilizando Next.js, React.js e TypeScript.',
            'Decomposição de arquitetura monolítica para micro-frontends ágeis e modulares.',
            'Esteiras de CI/CD utilizando AWS Amplify.',
            'Apoio contínuo com pair programming, code reviews e mentoria a novos desenvolvedores do time.',
            'Colaboração ativa com equipes de QA e Back-end para criação de APIs do zero.',
            'Domínio de conceitos de renderização web moderna (SSR, SPA e SSG) e otimização SEO.',
            'Desenvolvimento de Design System corporativo utilizando Storybook.',
            'Automação de testes com Cypress e Vitest, metodologia Scrum e Git Flow.',
        ],
        tags: [
            'React.js',
            'Next.js',
            'Nest.js',
            'Node',
            'TypeScript',
            'Micro-frontends',
            'Storybook',
            'AWS Amplify',
            'Cypress',
            'Vitest',
        ],
    },
]

const Experience = () => {
    return (
        <section className="scroll-mt-16 py-16 md:py-20" id="experiencia">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mb-10">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E20D34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E20D34]">
                        Trajetória
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                        Experiências Profissionais
                    </h2>
                    <p className="mt-2 text-base text-[#64748B]">
                        Detalhes das empresas, clientes e contribuições técnicas em cada projeto.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-subtle transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-card md:p-8"
                        >
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                                        {exp.role}
                                    </h3>
                                    <div className="mt-1 font-heading text-base font-bold text-[#E20D34]">
                                        {exp.company}
                                    </div>
                                </div>
                                <span className="rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3.5 py-1 text-xs font-bold text-[#0F172A]">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-5 text-xs text-[#64748B]">
                                {exp.location}
                            </div>

                            <ul className="mb-6 space-y-2.5">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm leading-relaxed text-[#334155]">
                                        <span className="mr-2.5 font-bold text-[#E20D34]">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 border-t border-[#E2E8F0] pt-4">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-[#F1F5F9] px-2.5 py-1 font-code text-xs font-semibold text-[#334155]"
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

export default Experience