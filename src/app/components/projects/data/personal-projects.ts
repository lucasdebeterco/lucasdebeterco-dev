import { CardItemProps } from '@/app/types/card-item'

export const personalProjects: CardItemProps[] = [
    {
        title: 'Pizza Shop',
        description: 'aaaaa',
        imageSrc: [
            '/personal-projects/pizza-shop/pizza-shop.png',
            '/personal-projects/pizza-shop/ordes.png'
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
            'Typescript',
            'Styled-Components',
            'Context-API',
            'React-router-dom',
            'React-hook-form'
        ]
    },
    {
        title: 'Letmeask (NLW Together)',
        description: 'Application made with React.js and Typescript, with the objective of developing a question room center, where users can create rooms, share them with other people and register their doubts. Admin users can highlight a question or close it when it has been answered. All data persistence and deployment was done using Firebase tools (Realtime Database and Firebase Hosting).',
        imageSrc: [
            '/personal-projects/nlw-together-letmeask/login.png',
            '/personal-projects/nlw-together-letmeask/sala.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/letmeask-nlw-together',
        productionLink: 'https://letmeask-120db.web.app/',
        tools: [
            'React.js',
            'Firebase',
            'Typescript',
            'Styled-Components'
        ]
    },
    {
        title: 'Blog Router (Alura)',
        description: 'Basic project to practice the concepts of the React Router DOM library, the application is a personal blog for listing articles in React.js and Typescript.',
        imageSrc: [
            '/personal-projects/blog-router/home.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/blog-router-alura',
        tools: [
            'React.js',
            'Typescript',
            'CSS-Modules',
            'React-router-dom'
        ]
    },
    {
        title: 'Ignite Timer',
        description: 'Application for time management, allows you to create a task and count the time spent developing each task. The application was developed using React.js and Styled Components. In this project, I used libraries such as Zod to validate typing based on schemas and Immer to work with immutable states in an easier way.',
        imageSrc: [
            '/personal-projects/ignite-timer/task.png',
            '/personal-projects/ignite-timer/task-list.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/ignite-timer',
        tools: [
            'React.js',
            'Typescript',
            'Styled-Components',
            'Zod',
            'Immer',
            'React-Router-Dom'
        ]
    },
    {
        title: 'Github Blog',
        description: 'Development of an application that consumes the GitHub API to fetch issues from a repository, data from your profile and display them as a blog. The application presents the profile with image, number of followers, name and other information available through the GitHub API, listing and filtering repository issues and a page to display the details of each post (issue).',
        imageSrc: [
            '/personal-projects/github-blog/home.png',
            '/personal-projects/github-blog/post.png',
        ],
        githubLink: 'https://github.com/lucasdebeterco/github-blog',
        productionLink: 'https://github-blog.lucasdebeterco.dev/',
        tools: [
            'React.js',
            'Typescript',
            'Axios',
            'React-Router-Dom',
            'Tailwind-CSS',
            'Date-fns'
        ]
    },
    {
        title: 'ToDo List',
        description: 'Simple web page to manage creation and removal of tasks using localStorage.',
        imageSrc: [
            '/personal-projects/todo-list/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/todo-list',
        productionLink: 'https://main.dzgmv8kqwlxwq.amplifyapp.com/',
        tools: [
            'React.js',
            'Typescript',
            'Tailwind-CSS',
            'Local-storage'
        ]
    },
    {
        title: 'ES Converter',
        description: 'ECMAScript5 to ECMAScript6 converter, created to alleviate some situations I went through at work, where I needed to convert code generated by an old bundler to a newer version of ECMAScript.',
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
        description: 'Find your DUO project, development environment with Node, React and mobile (React Native). It is a register of advertisements that allow the user to find a DUO based on the information in the advertisement, such as game, time and discord.',
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
        description: 'Restaurant application, React, Typescript and CSS Modules. Application with meals search input, filters by category (pasta, meat..), sorting by price, portion, etc.',
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
        description: 'This is the standard package that I have made and use in my personal projects for ESLint configurations in React.js and Next.js, it contains formatting rules, spacing, imports and various settings for code formatting. The main challenge of this project was my first contact with creating and making a package available on NPM. After carrying out this personal project, I replicated the concept in the company, and now we have a configuration package also within the Frontend team, that is used in all React projects.',
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
    },
    {
        title: 'DT Money',
        description: 'This project was made to create a financial control for the user. The user can add their day-to-day financial inflows and outflows. You can also use the search field to filter by specific items or categories. This application was created using React.js and Typescript and Tailwind, the forms were made with react-hook-form and zod for validations.',
        imageSrc: [
            '/personal-projects/dt-money/home.png'
        ],
        githubLink: 'https://github.com/lucasdebeterco/dt-money',
        productionLink: 'https://dt-money.lucasdebeterco.dev',
        tools: [
            'React.js',
            'Typescript',
            'Tailwind',
            'React-hook-form',
            'Zod'
        ]
    }
]