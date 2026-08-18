import React, { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'pt' | 'en'

export interface TranslationStructure {
    header: {
        about: string
        experience: string
        technologies: string
        projects: string
        downloadCV: string
        contactMe: string
        emailCopied: string
    }
    hero: {
        title: string
        subtitle: string
        role: string
        btnProjects: string
        btnExperience: string
        yearsExperience: string
        yearsExperienceLabel: string
        fullstack: string
        fullstackLabel: string
        currentCompany: string
        currentCompanyLabel: string
        fullName: string
        companyLabel: string
        specialtyLabel: string
        specialtyValue: string
    }
    experience: {
        badge: string
        title: string
        subtitle: string
        present: string
        locationRemote: string
        locationHybrid: string
        experiences: {
            role: string
            company: string
            period: string
            location: string
            bullets: string[]
            tags: string[]
        }[]
    }
    technologies: {
        badge: string
        title: string
        subtitle: string
        categories: {
            title: string
            tags: string[]
        }[]
    }
    projects: {
        badge: string
        title: string
        titleHighlight: string
        subtitle: string
        tabProfessional: string
        tabGithub: string
        tabCourses: string
        liveDemo: string
        code: string
        loadingRepos: string
        showingRepos: (shown: number, total: number) => string
        viewGithubProfile: string
        updatedAt: string
        noDescription: string
        showMore: string
        credentialLabel: string
        viewCredential: string
        professionalProjects: {
            title: string
            description: string
            images: string[]
            tags: string[]
            links: {
                demo?: string | null
                github?: string | null
            }
        }[]
    }
    footer: {
        description: string
        contactBtn: string
        copyright: string
    }
}

export const translations: Record<Language, TranslationStructure> = {
    pt: {
        header: {
            about: 'Sobre',
            experience: 'Experiência',
            technologies: 'Tecnologias',
            projects: 'Projetos & Certificações',
            downloadCV: 'Download CV',
            contactMe: 'Fale Comigo',
            emailCopied: 'E-mail ({email}) copiado para a área de transferência!',
        },
        hero: {
            title: 'Lucas Debeterco',
            subtitle:
                'Engenheiro de Software Sênior Javascript na CI&T. Experiência consolidada no desenvolvimento de aplicações escaláveis.',
            role: 'Senior Software Engineer',
            btnProjects: 'Ver Projetos & Certificações',
            btnExperience: 'Ver Trajetória Profissional',
            yearsExperience: '+8 Anos',
            yearsExperienceLabel: 'Experiência em Dev',
            fullstack: 'Fullstack JS',
            fullstackLabel: 'React, Next & Node',
            currentCompany: 'CI&T',
            currentCompanyLabel: 'Empresa Atual',
            fullName: 'Lucas Wamser Rosa Debeterco',
            companyLabel: 'Empresa:',
            specialtyLabel: 'Especialidade:',
            specialtyValue: 'Ecossistema JavaScript',
        },
        experience: {
            badge: 'Trajetória',
            title: 'Experiências Profissionais',
            subtitle: 'Detalhes das empresas e contribuições técnicas em cada projeto.',
            present: 'Presente',
            locationRemote: '📍 Remoto • Brasil',
            locationHybrid: '📍 Rio do Sul, SC, Brasil • Híbrido',
            experiences: [
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
            ],
        },
        technologies: {
            badge: 'Conhecimentos',
            title: 'Tecnologias Dominadas',
            subtitle: 'Divisão das principais tecnologias e ferramentas utilizadas em projetos.',
            categories: [
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
            ],
        },
        projects: {
            badge: 'Portfólio & Capacitação',
            title: 'Featured Projects & ',
            titleHighlight: 'Certificações',
            subtitle:
                'Projetos profissionais em produção, repositórios no GitHub e histórico de cursos e certificações concluídos.',
            tabProfessional: '💼 Professional Projects',
            tabGithub: '🐙 GitHub Repositories',
            tabCourses: '🎓 Cursos & Certificações',
            liveDemo: 'Live Demo',
            code: 'Code',
            loadingRepos: 'Carregando repositórios…',
            showingRepos: (shown, total) => `Exibindo ${shown} de ${total} repositórios`,
            viewGithubProfile: 'Ver perfil no GitHub',
            updatedAt: 'Atualizado em',
            noDescription: 'Sem descrição informada.',
            showMore: 'Carregar mais',
            credentialLabel: 'Credencial:',
            viewCredential: 'Exibir Credencial →',
            professionalProjects: [
                {
                    title: 'Design system',
                    description:
                        'Participei ativamente do desenvolvimento de um design system do zero, criando componentes e tokens reutilizáveis com React, Tailwind, Shadcn e Storybook. Os componentes e tokens do FalconDS foram aplicados em todas as 18 aplicações React da empresa, proporcionando mais de 50% de agilidade no desenvolvimento de novas interfaces.',
                    images: ['/professional-achievements/design-system/home.png'],
                    tags: ['React.js', 'Typescript', 'Storybook', 'Tailwind', 'Shadcn'],
                    links: {
                        demo: 'https://falcon-ds.magazord.com.br/',
                        github: null,
                    },
                },
                {
                    title: 'Design Central',
                    description:
                        'Aplicação desenvolvida para centralizar interfaces legadas na plataforma de e-commerce, agrupando listagem de plugins, manipulação de páginas e configurações gerais. Utilizada por aproximadamente 2.500 lojistas, aplicando arquitetura de micro-frontends com React.js, React Query, TailwindCSS e Cypress para testes.',
                    images: [
                        '/professional-achievements/design-central/home.png',
                        '/professional-achievements/design-central/new-page.png',
                        '/professional-achievements/design-central/page-list.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'React-query', 'React-table'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Order View Interface',
                    description:
                        'Interface completa para visualização e gestão de pedidos no e-commerce, unificando informações e substituindo a versão legada. Utilizada por ~2.100 clientes em produção, construída com React.js, TailwindCSS e arquitetura de micro-frontends integrada com API desenvolvida em parceria com o time de back-end. 90% dos usuários destacaram maior agilidade para encontrar dados.',
                    images: [
                        '/professional-achievements/order-view-interface/general-info.png',
                        '/professional-achievements/order-view-interface/other-info.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'Ext.js integration', 'React-table'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'New Product Layouts',
                    description:
                        'Modernização tecnológica dos modelos de páginas de produtos no e-commerce com arquitetura de micro-frontend, empacotando componentes em módulos isolados carregados sob demanda. 4 novos modelos desenvolvidos em React.js e TypeScript com foco em SEO, tempos de carregamento reduzidos e máxima performance.',
                    images: [
                        '/professional-achievements/product-layouts/modelo-12.png',
                        '/professional-achievements/product-layouts/modelo-11.png',
                        '/professional-achievements/product-layouts/modelo-10.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'Vite', 'SEO'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Gift List',
                    description:
                        'Interface completa para criação e gerenciamento de lista de presentes nos sites de e-commerce dos clientes, abrangendo criação, adição e remoção de itens. Desenvolvido com gerenciamento de templates Twig e PHP, com integração e criação de novos endpoints na API.',
                    images: [
                        '/professional-achievements/gift-list/home.png',
                        '/professional-achievements/gift-list/list-link.png',
                        '/professional-achievements/gift-list/new-list.png',
                        '/professional-achievements/gift-list/products-list.png',
                    ],
                    tags: ['HTML', 'CSS/SASS', 'jQuery', 'PHP'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Reviews Area',
                    description:
                        'Redesenho completo da área de avaliações de produtos nos e-commerces, adicionando envio e exibição de fotos/vídeos com moderação automatizada via AWS Lambda. O índice de engajamento e avaliações dos clientes subiu de 6,7% para 9,2% em uma base de 2.000+ lojas e centenas de milhões de acessos mensais.',
                    images: [
                        '/professional-achievements/reviews-area/reviews.png',
                        '/professional-achievements/reviews-area/new-review.png',
                    ],
                    tags: ['HTML', 'CSS/SASS', 'jQuery', 'PHP'],
                    links: {
                        demo: 'https://www.manalinda.com/conjunto-vies-marinho#avaliacao-produto-react-app',
                        github: null,
                    },
                },
                {
                    title: 'Vite Multi Bundle APP',
                    description:
                        'Aplicação e arquitetura de testes para geração de múltiplos bundles dinâmicos com Vite. Desenvolvida para viabilizar a modularização dos templates de e-commerce em React.js dentro do mesmo monorepo gerando builds independentes, padrão adotado em todos os projetos da empresa e 2.400+ lojas.',
                    images: ['/professional-achievements/vite-multi-bundle-test/code.png'],
                    tags: ['Node', 'Vite', 'Bundle', 'Micro frontend'],
                    links: {
                        demo: 'https://vite-multi-bundle-test.lucasdebeterco.dev',
                        github: 'https://github.com/lucasdebeterco/vite-multi-bundle-test',
                    },
                },
                {
                    title: 'Multi Package Deploy',
                    description:
                        'Monorepo para gerenciamento e publicação automatizada de múltiplos pacotes npm via workspaces, scripts de release personalizados e workflows de CI/CD automatizados com GitHub Actions.',
                    images: [
                        '/professional-achievements/multi-package-deploy/code.png',
                        '/professional-achievements/multi-package-deploy/npm.png',
                    ],
                    tags: ['Node', 'Monorepo', 'Bundle', 'NPM', 'Github Actions'],
                    links: {
                        demo: 'https://multi-package-deploy.lucasdebeterco.dev/',
                        github: 'https://github.com/lucasdebeterco/multi-package-deploy',
                    },
                },
            ],
        },
        footer: {
            description: 'Senior Software Engineer • Disponível para projetos e conexões.',
            contactBtn: 'Contatar via E-mail',
            copyright: '© {year} Lucas Debeterco. Desenvolvido para apresentação profissional.',
        },
    },
    en: {
        header: {
            about: 'About',
            experience: 'Experience',
            technologies: 'Technologies',
            projects: 'Projects & Certifications',
            downloadCV: 'Download CV',
            contactMe: 'Contact Me',
            emailCopied: 'Email ({email}) copied to clipboard!',
        },
        hero: {
            title: 'Lucas Debeterco',
            subtitle:
                'Senior JavaScript Software Engineer at CI&T. Solid background in architecting and delivering scalable applications.',
            role: 'Senior Software Engineer',
            btnProjects: 'View Projects & Certifications',
            btnExperience: 'View Professional Career',
            yearsExperience: '+8 Years',
            yearsExperienceLabel: 'Dev Experience',
            fullstack: 'Fullstack JS',
            fullstackLabel: 'React, Next & Node',
            currentCompany: 'CI&T',
            currentCompanyLabel: 'Current Company',
            fullName: 'Lucas Wamser Rosa Debeterco',
            companyLabel: 'Company:',
            specialtyLabel: 'Specialty:',
            specialtyValue: 'JavaScript Ecosystem',
        },
        experience: {
            badge: 'Career Path',
            title: 'Work Experience',
            subtitle: 'Companies, responsibilities, and technical contributions for each role.',
            present: 'Present',
            locationRemote: '📍 Remote • Brazil',
            locationHybrid: '📍 Rio do Sul, SC, Brazil • Hybrid',
            experiences: [
                {
                    role: 'Senior Software Engineer',
                    company: 'CI&T',
                    period: '2025 - Present',
                    location: '📍 Remote • Brazil',
                    bullets: [
                        'Acting as a Senior Developer and leading front-end architecture for applications using Next.js and React.js.',
                        'Daily hands-on use of Claude AI, autonomous agents, and GenAI tooling to accelerate code quality, architecture, and developer productivity.',
                        'Rigorous application of modern front-end architecture best practices to ensure high stability and scalability.',
                        'Implementation from scratch of Single Sign-On (SSO) authentication supporting multiple identity providers.',
                        'End-to-end and unit test automation maintenance using Playwright and Jest.',
                        'Close collaboration with multidisciplinary teams for rapid iteration and continuous feature deployment.',
                        'Leading daily code reviews, pair programming, and continuous technical mentorship for engineering teammates.',
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
                    location: '📍 Rio do Sul, SC, Brazil • Hybrid',
                    bullets: [
                        'Contributed to large-scale e-commerce systems serving millions of end-users and merchant retailers.',
                        'Built robust RESTful APIs and backend services using NestJS, Node.js, TypeScript, and PostgreSQL databases.',
                        'Architected and implemented greenfield front-end projects using Next.js, React.js, and TypeScript.',
                        'Decomposed legacy monolithic codebases into agile, modular micro-frontends.',
                        'Maintained automated CI/CD deployment pipelines utilizing AWS Amplify.',
                        'Provided continuous mentorship, pair programming, and code reviews for junior and mid-level developers.',
                        'Collaborated actively with QA and Back-end engineering teams to deliver mission-critical APIs.',
                        'Expertise in modern web rendering models (SSR, SPA, and SSG) as well as search engine optimization (SEO).',
                        'Engineered and documented a company-wide corporate Design System using Storybook.',
                        'Automated comprehensive test suites with Cypress and Vitest, working under Agile/Scrum methodologies with Git Flow.',
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
            ],
        },
        technologies: {
            badge: 'Skills & Stack',
            title: 'Mastered Technologies',
            subtitle: 'Overview of core technologies, frameworks, and engineering tools.',
            categories: [
                {
                    title: '🤖 AI & GenAI',
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
                    title: '⚙️ Back-end & Database',
                    tags: [
                        'Node.js',
                        'Nest.js',
                        'Express.js',
                        'Prisma ORM',
                        'RESTful API',
                        'SQL',
                        'PostgreSQL',
                    ],
                },
                {
                    title: '🛠️ Testing, Cloud & Tooling',
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
            ],
        },
        projects: {
            badge: 'Portfolio & Credentials',
            title: 'Featured Projects & ',
            titleHighlight: 'Certifications',
            subtitle:
                'Production applications, GitHub open source repositories, and verified professional certificates.',
            tabProfessional: '💼 Professional Projects',
            tabGithub: '🐙 GitHub Repositories',
            tabCourses: '🎓 Courses & Certifications',
            liveDemo: 'Live Demo',
            code: 'Code',
            loadingRepos: 'Loading repositories…',
            showingRepos: (shown, total) => `Showing ${shown} of ${total} repositories`,
            viewGithubProfile: 'View GitHub profile',
            updatedAt: 'Updated on',
            noDescription: 'No description provided.',
            showMore: 'Show more',
            credentialLabel: 'Credential:',
            viewCredential: 'View Credential →',
            professionalProjects: [
                {
                    title: 'Design system',
                    description:
                        'I actively participated in the development of a design system from scratch, creating several reusable components and tokens. The main tools used were react, tailwind, shadcn and storybook to manage the components. FalconDS components and tokens are now applied to all the 18 applications developed in React by the company. Currently the components are completely stable and are being used daily by thousands of users. After the launch of the new design system, we carried out an internal research, which demonstrated that the majority of developers realized that their projects gained more than 50% agility on the process of creating a new interface.',
                    images: ['/professional-achievements/design-system/home.png'],
                    tags: ['React.js', 'Typescript', 'Storybook', 'Tailwind', 'Shadcn'],
                    links: {
                        demo: 'https://falcon-ds.magazord.com.br/',
                        github: null,
                    },
                },
                {
                    title: 'Design Central',
                    description:
                        'Application developed to centralize legacy interfaces present on our e-commerce platform. This application was responsible for grouping plugin listing functionalities, page manipulation, additional code manipulation and general configurations. This application is currently being used by approximately 2500 customers and the main tools used during development were React.js, React Query and TailwindCSS and Cypress for testing. As this application runs separately within our old system, I was able to practice and apply some techniques and concepts of micro-frontend architecture.',
                    images: [
                        '/professional-achievements/design-central/home.png',
                        '/professional-achievements/design-central/new-page.png',
                        '/professional-achievements/design-central/page-list.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'React-query', 'React-table'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Order View Interface',
                    description:
                        "In this application, I created a complete interface for viewing orders received by our customers. This new interface replaced a legacy version and grouped information in one place. We currently have approximately 2100 of our customers using the new order view, this application has been in production for about a year and has received several positive feedbacks. The application was developed using React.js and TailwindCSS. One challenge I had in this project was managing the development of an API from scratch to provide data related to the order together with the back-end team. In this project, it is important to highlight that it was the first time that I applied micro-frontend architecture techniques, since this application runs within the system's old platform interface. After the screen was released, some research was carried out, which resulted in some positive indicators, such as 90% of users found it easier to find information in the new interface compared to the old one.",
                    images: [
                        '/professional-achievements/order-view-interface/general-info.png',
                        '/professional-achievements/order-view-interface/other-info.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'Ext.js integration', 'React-table'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'New Product Layouts',
                    description:
                        'In this project, I actively participated in the technology update of our product page templates, once again applying the micro-frontend architecture concept, as product packages are generated in a completely separate application and environment, only loaded on the product page. 4 new product templates were created using React.js and Typescript, different from the previous models created with Twig Template Engine and HTML. This project was particularly challenging, as a product page is one of the most important pages in an e-commerce, a lot of care was needed with SEO metrics, loading time, IIFE package size and many issues related to performance. Currently, XXX customers are using one of the new product page templates in React.js on the Magazord platform.',
                    images: [
                        '/professional-achievements/product-layouts/modelo-12.png',
                        '/professional-achievements/product-layouts/modelo-11.png',
                        '/professional-achievements/product-layouts/modelo-10.png',
                    ],
                    tags: ['React.js', 'Typescript', 'Tailwind', 'Vite', 'SEO'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Gift List',
                    description:
                        'Interface for creating and managing a gift list in ours customers websites. Including creation of the list, addition and removal of desired items. Developed using template management with Twig in conjunction with PHP. A challenge of this project was my first contact with the back-end, where I had to make changes to the APIs and create Endpoints to manage the gift list.',
                    images: [
                        '/professional-achievements/gift-list/home.png',
                        '/professional-achievements/gift-list/list-link.png',
                        '/professional-achievements/gift-list/new-list.png',
                        '/professional-achievements/gift-list/products-list.png',
                    ],
                    tags: ['HTML', 'CSS/SASS', 'jQuery', 'PHP'],
                    links: {
                        demo: null,
                        github: null,
                    },
                },
                {
                    title: 'Reviews Area',
                    description:
                        "Complete redesign of the area responsible for inclusion and presentation of reviews on the e-commerce platform's websites. I was responsible for implementing registration and presentation of media in reviews, something that our platform did not have before. In addition to image registration, each image goes through a hosted AWS Lambda service to validate the presence of adult content. The final customer evaluation rate was monitored after the changes, we had a very good result, going from 6.7% to 9.2%. The customer base during this period contained more than 2000 customers with an average monthly access of 500 million.",
                    images: [
                        '/professional-achievements/reviews-area/reviews.png',
                        '/professional-achievements/reviews-area/new-review.png',
                    ],
                    tags: ['HTML', 'CSS/SASS', 'jQuery', 'PHP'],
                    links: {
                        demo: 'https://www.manalinda.com/conjunto-vies-marinho#avaliacao-produto-react-app',
                        github: null,
                    },
                },
                {
                    title: 'Vite Multi Bundle APP',
                    description:
                        'Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index. This application was developed by me to solve a problem we faced when we decided to componentize parts of our website to run on React.js. We needed a project structure in which all product page templates were in the same repository (only with different entrypoints), but the bundles needed to be generated separately. When I created this structure and applied it to our product models, it was possible to proceed with all componentization projects for areas of the website (product, footer, headers, etc..), this structure is now used within the company in all site projects and the 2400+ customer websites.',
                    images: ['/professional-achievements/vite-multi-bundle-test/code.png'],
                    tags: ['Node', 'Vite', 'Bundle', 'Micro frontend'],
                    links: {
                        demo: 'https://vite-multi-bundle-test.lucasdebeterco.dev',
                        github: 'https://github.com/lucasdebeterco/vite-multi-bundle-test',
                    },
                },
                {
                    title: 'Multi Package Deploy',
                    description:
                        'This project is a monorepo for managing multiple npm packages using a workspace structure. It includes a custom release script for publishing packages to npm and a GitHub Actions workflow for automated CI/CD and publish.',
                    images: [
                        '/professional-achievements/multi-package-deploy/code.png',
                        '/professional-achievements/multi-package-deploy/npm.png',
                    ],
                    tags: ['Node', 'Monorepo', 'Bundle', 'NPM', 'Github Actions'],
                    links: {
                        demo: 'https://multi-package-deploy.lucasdebeterco.dev/',
                        github: 'https://github.com/lucasdebeterco/multi-package-deploy',
                    },
                },
            ],
        },
        footer: {
            description: 'Senior Software Engineer • Open to projects and professional connections.',
            contactBtn: 'Contact via Email',
            copyright: '© {year} Lucas Debeterco. Developed for professional presentation.',
        },
    },
}

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
    t: TranslationStructure
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('preferred_language')
        if (saved === 'pt' || saved === 'en') return saved
        return 'en'
    })

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('preferred_language', lang)
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    }

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt')
    }

    useEffect(() => {
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    }, [language])

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
