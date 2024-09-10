import { CardItemProps } from '@/app/types/card-item'

export const personalProjects: CardItemProps[] = [
    {
        title: 'Pizza Shop',
        description: 'aaaaa',
        imageSrc: [
            '/personal-projects/pizza-shop/pizza-shop.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/pizza-shop',
        tools: [
            'Next.js',
            'React.js',
            'Typescript',
            'Tailwind-CSS'
        ]
    },
    {
        title: 'Coffee Delivery',
        description: 'Application to manage a fictional coffee shop, where I was able to apply the concepts of Context-API to store items in the cart, routing with React router dom and searching for the user location through a third-party API. Developed using React.js, Typescript and Styled Components.',
        imageSrc: [
            '/personal-projects/coffee-delivery/home.png',
            '/personal-projects/coffee-delivery/cart.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/coffee-delivery',
        productionLink: 'https://coffee-delivery.lucasdebeterco.dev',
        tools: [
            'React.js',
            'TypeScript',
            'Styled-Components',
            'Context-API',
            'React-router-dom',
            'React-hook-form'
        ]
    },
    {
        title: 'Letmeask (NLW Together)',
        description: 'Projeto de uma aplicação em React/TypeScript, com objetivo do desenvolvimento de uma central de salas de perguntas, onde usuários podem criar salas, compartilhar para outras pessoas e cadastrar suas dúvidas. Usuários admins podem dar "Highlight" em uma pergunta ou fechá-la quando estiver respondida. Toda a parte de persistência de dados e deploy foi feita utilizando as ferramentas do Firebase (Realtime Database e Firebase Hosting).',
        imageSrc: [
            '/personal-projects/nlw-together-letmeask/login.png',
            '/personal-projects/nlw-together-letmeask/sala.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/letmeask-nlw-together',
        productionLink: 'https://letmeask-120db.web.app/',
        tools: [
            'React.js',
            'Firebase',
            'TypeScript',
            'Styled-Components'
        ]
    },
    {
        title: 'Blog Router (Alura)',
        description: 'Projeto básico para praticar os conceitos da bliblioteca de roteamento React Router DOM, a aplicação se trata de um blog pessoal para listagem de artigos em ReactJS e TypeScript.',
        imageSrc: [
            '/personal-projects/blog-router/home.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/blog-router-alura',
        tools: [
            'React.js',
            'TypeScript',
            'CSS-Modules',
            'React-Router-Dom'
        ]
    },
    {
        title: 'Ignite Timer',
        description: 'Aplicação para gestão de tempo, permite criação de uma tarefa e contagem de tempo gasto no desenvolvimento de cada tarefa. A aplicação foi desenvolvida utilizando ReactJS e Styled Components. Neste projeto, utilizei biblotecas como Zod para validação de tipagens com base em schemas e o Immer para trabalhar com estados imutáveis de forma facilitada',
        imageSrc: [
            '/personal-projects/ignite-timer/task.png',
            '/personal-projects/ignite-timer/task-list.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/ignite-timer',
        tools: [
            'React.js',
            'TypeScript',
            'Styled-Components',
            'Zod',
            'Immer',
            'React-Router-Dom'
        ]
    },
    {
        title: 'Github Blog',
        description: 'Desenvolvimento de uma aplicação que consome a API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog. A aplicação realiza apresentação do perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub, listagem e filtragem das issues do repositório e uma página para exibir os detalhes de cada post (issue).',
        imageSrc: [
            '/personal-projects/github-blog/home.png',
            '/personal-projects/github-blog/post.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/github-blog',
        productionLink: 'https://github-blog.lucasdebeterco.dev/',
        tools: [
            'React.js',
            'TypeScript',
            'Axios',
            'React-Router-Dom',
            'Tailwind-CSS',
            'Date-fns'
        ]
    },
    {
        title: 'ToDo List',
        description: 'Página web simples para administrar a criação e remoção de tarefas utilizando localStorage.',
        imageSrc: [
            '/personal-projects/todo-list/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/todo-list',
        productionLink: 'https://main.dzgmv8kqwlxwq.amplifyapp.com/',
        tools: [
            'React.js',
            'TypeScript',
            'Tailwind-CSS',
            'Local-Storage'
        ]
    },
    {
        title: 'ES Converter',
        description: 'Conversor ECMAScript5 para ECMAScript6, realizado para falicitar algumas situações que passei no trabalho, onde precisei converter um código gerado por um bundler antigo para uma versão mais nova do ECMAScript.',
        imageSrc: [
            '/personal-projects/es-converter/files.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/es-converter',
        tools: [
            'Babel',
            'Node'
        ]
    },
    {
        title: 'NLW E-Sports',
        description: 'Projeto Find your DUO, ambiente de desenvolvimento com Node, React e mobile (React Native). Trata-se de um cadastro de anúncios que permitem o usuário encontrar um DUO baseado nas informações do anúncio, como jogo, horário e discord.',
        imageSrc: [
            '/personal-projects/nlw-esports/home.png',
            '/personal-projects/nlw-esports/add.png',
            '/personal-projects/nlw-esports/prisma.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/nlw-esports',
        tools: [
            'Node',
            'React.js',
            'Typescript',
            'Tailwind-CSS',
            'Prisma-ORM'
        ]
    },
    {
        title: 'Aluroni',
        description: 'Restaurant application, React, TypeScript and CSS Modules. Application with meals search input, filters by category (pasta, meat..), sorting by price, portion, etc.',
        imageSrc: [
            '/personal-projects/aluroni/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/aluroni',
        tools: [
            'React.js',
            'Typescript',
            'CSS-Modules'
        ]
    },
    {
        title: 'Ignite Feed',
        description: 'Ignite feed is a simple project that simulates the social media feed, with comments, likes and delete comments functionalities. Made with React, Typescript and CSS Modules.',
        imageSrc: [
            '/personal-projects/ignite-feed/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/ignite-feed',
        productionLink: 'https://ignite-feed.lucasdebeterco.dev',
        tools: [
            'React',
            'Typescript',
            'CSS-Modules',
            'Date-FNS'
        ]
    },
    {
        title: 'ESLint Config',
        description: 'This is the standard package that I have made and use in my personal projects for ESLint configurations in React/NextJS, it contains formatting rules, spacing, imports and various settings for code formatting. The main challenge of this project was my first contact with creating and making a package available on NPM. After carrying out this personal project, I replicated the concept in the company, and now we have a configuration package also within the Frontend team, that is used in all React projects.',
        imageSrc: [
            '/personal-projects/eslint-config/npm-image.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/eslint-config-lucasdebeterco',
        productionLink: 'https://www.npmjs.com/package/@lucas.debeterco/eslint-config',
        tools: [
            'ESLint',
            'Node',
            'NPM'
        ]
    },
    {
        title: 'Alura Space',
        description: 'Project developed during an Alura platform course, with the main objective of creating filters with Javascript. Developed with React.js and SASS',
        imageSrc: [
            '/personal-projects/alura-space/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/alura-space',
        productionLink: 'https://alura-space.lucasdebeterco.dev',
        tools: [
            'React.js',
            'SASS',
            'Javascript'
        ]
    }
]