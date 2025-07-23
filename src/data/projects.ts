export const projects = [
    {
        title: 'Design system',
        description: 'I actively participated in the development of a design system from scratch, creating several reusable components and tokens. The main tools used were react, tailwind, shadcn and storybook to manage the components. FalconDS components and tokens are now  applied to all the 18 applications developed in React by the company. Currently the components are completely stable and are being used daily by thousands of users. After the launch of the new design system, we carried out an internal research, which demonstrated that the majority of developers realized that their projects gained more than 50% agility on the process of creating a new interface.',
        images: [
            '/professional-achievements/design-system/home.png'
        ],
        tags: ['React.js', 'Typescript', 'Storybook', 'Tailwind', 'Shadcn'],
        category: 'professional',
        links: {
            demo: 'https://falcon-ds.magazord.com.br/',
            github: null,
        }, 
    },
    {
        title: 'Design Central',
        description: 'Application developed to centralize legacy interfaces present on our e-commerce platform. This application was responsible for grouping plugin listing functionalities, page manipulation, additional code manipulation and general configurations. This application is currently being used by approximately 2500 customers and the main tools used during development were React.js, React Query and TailwindCSS and Cypress for testing. As this application runs separately within our old system, I was able to practice and apply some techniques and concepts of micro-frontend architecture.',
        images: [
            '/professional-achievements/design-central/home.png',
            '/professional-achievements/design-central/new-page.png',
            '/professional-achievements/design-central/page-list.png',
        ],
        tags: [
            'React.js',
            'Typescript',
            'Tailwind',
            'React-query',
            'React-table'
        ],
        category: 'professional',
        links: {
            demo: null,
            github: null,
        },
    },
    {
        title: 'Order View Interface',
        description: 'In this application, I created a complete interface for viewing orders received by our customers. This new interface replaced a legacy version and grouped information in one place. We currently have approximately 2100 of our customers using the new order view, this application has been in production for about a year and has received several positive feedbacks. The application was developed using React.js and TailwindCSS. One challenge I had in this project was managing the development of an API from scratch to provide data related to the order together with the back-end team. In this project, it is important to highlight that it was the first time that I applied micro-frontend architecture techniques, since this application runs within the system\'s old platform interface. After the screen was released, some research was carried out, which resulted in some positive indicators, such as 90% of users found it easier to find information in the new interface compared to the old one.',
        images: [
            '/professional-achievements/order-view-interface/general-info.png',
            '/professional-achievements/order-view-interface/other-info.png'
        ],
        tags: [
            'React.js',
            'Typescript',
            'Tailwind',
            'Ext.js integration',
            'React-table'
        ],
        category: 'professional',
        links: {
            demo: null,
            github: null,
        },
    },
    {
        title: 'New Product Layouts',
        description: 'In this project, I actively participated in the technology update of our product page templates, once again applying the micro-frontend architecture concept, as product packages are generated in a completely separate application and environment, only loaded on the product page. 4 new product templates were created using React.js and Typescript, different from the previous models created with Twig Template Engine and HTML. This project was particularly challenging, as a product page is one of the most important pages in an e-commerce, a lot of care was needed with SEO metrics, loading time, IIFE package size and many issues related to performance. Currently, XXX customers are using one of the new product page templates in React.js on the Magazord platform.',
        images: [
            '/professional-achievements/product-layouts/modelo-12.png',
            '/professional-achievements/product-layouts/modelo-11.png',
            '/professional-achievements/product-layouts/modelo-10.png'
        ],
        tags: [
            'React.js',
            'Typescript',
            'Tailwind',
            'Vite',
            'SEO'
        ],
        category: 'professional',
        links: {
            demo: null,
            github: null,
        },
    },
    {
        title: 'Gift List',
        description: 'Interface for creating and managing a gift list in ours customers websites. Including creation of the list, addition and removal of desired items. Developed using template management with Twig in conjunction with PHP. A challenge of this project was my first contact with the back-end, where I had to make changes to the APIs and create Endpoints to manage the gift list.',
        images: [
            '/professional-achievements/gift-list/home.png',
            '/professional-achievements/gift-list/list-link.png',
            '/professional-achievements/gift-list/new-list.png',
            '/professional-achievements/gift-list/products-list.png'
        ],
        tags: [
            'HTML',
            'CSS/SASS',
            'jQuery',
            'PHP',
        ],
        category: 'professional',
        links: {
            demo: null,
            github: null,
        },
    },
    {
        title: 'Reviews Area',
        description: 'Complete redesign of the area responsible for inclusion and presentation of reviews on the e-commerce platform\'s websites. I was responsible for implementing registration and presentation of media in reviews, something that our platform did not have before. In addition to image registration, each image goes through a hosted AWS Lambda service to validate the presence of adult content. The final customer evaluation rate was monitored after the changes, we had a very good result, going from 6.7% to 9.2%. The customer base during this period contained more than 2000 customers with an average monthly access of 500 million.',
        images: [
            '/professional-achievements/reviews-area/reviews.png',
            '/professional-achievements/reviews-area/new-review.png',
        ],
        tags: [
            'HTML',
            'CSS/SASS',
            'jQuery',
            'PHP',
        ],
        category: 'professional',
        links: {
            demo: 'https://www.manalinda.com/conjunto-vies-marinho#avaliacao-produto-react-app',
            github: null,
        },
    },
    {
        title: 'Vite Multi Bundle APP',
        description: 'Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index. This application was developed by me to solve a problem we faced when we decided to componentize parts of our website to run on React.js. We needed a project structure in which all product page templates were in the same repository (only with different entrypoints), but the bundles needed to be generated separately. When I created this structure and applied it to our product models, it was possible to proceed with all componentization projects for areas of the website (product, footer, headers, etc..), this structure is now used within the company in all site projects and the 2400+ customer websites.',
        images: [
            '/professional-achievements/vite-multi-bundle-test/code.png'
        ],
        tags: [
            'Node',
            'Vite',
            'Bundle',
            'Micro frontend'
        ],
        category: 'professional',
        links: {
            demo: 'https://vite-multi-bundle-test.lucasdebeterco.dev',
            github: 'https://github.com/lucasdebeterco/vite-multi-bundle-test',
        },
    },
    {
        title: 'Multi Package Deploy',
        description: 'This project is a monorepo for managing multiple npm packages using a workspace structure. It includes a custom release script for publishing packages to npm and a GitHub Actions workflow for automated CI/CD and publish.',
        images: [
            '/professional-achievements/multi-package-deploy/code.png',
            '/professional-achievements/multi-package-deploy/npm.png'
        ],
        tags: [
            'Node',
            'Monorepo',
            'Bundle',
            'NPM',
            'Github Actions'
        ],
        category: 'professional',
        links: {
            demo: 'https://multi-package-deploy.lucasdebeterco.dev/',
            github: 'https://github.com/lucasdebeterco/multi-package-deploy',
        },
    },
    {
        title: 'Devstore',
        description: 'In this application, the objective was to use the concepts introduced from Next 13 by developing an e-commerce application. The main concepts applied were Server Components, SSR, Suspense API, caching (with revalidation) and a internal API. In this application I also used Cypress to perform E2E tests of the interface.',
        images: [
            '/personal-projects/devstore/home.png',
            '/personal-projects/devstore/product.png',
            '/personal-projects/devstore/search.png'
        ],
        tags: [
            'Next.js',
            'Typescript',
            'Streaming-SSR',
            'Caching',
            'Cypress',
            'Tailwind'
        ],
        category: 'personal',
        links: {
            demo: 'https://devstore-lucasdebeterco.vercel.app',
            github: 'https://github.com/lucasdebeterco/devstore',
        },
    },
    {
        title: 'Pizza Shop',
        description: 'Dashboard made with React.js and Tailwind for managing a restaurant and handling order management, similar to the iFood app. In this project, I learned a lot about integrating a frontend app with an external API. All API communication were made using React Query for the requests, caching, and implementing optimistic UI. The optimistic UI concept was a fantastic approach that I had not worked with before, and it was exciting to build an application using it. Additionally, I applied multiple testing methods, using testing-library/vitest for unit testing and Playwright for E2E testing. Another interesting library I used was Recharts, which I applied to create graphs.',
        images: [
            '/personal-projects/pizza-shop/pizza-shop.png',
            '/personal-projects/pizza-shop/orders.png'
        ],
        tags: ['React.js', 'Typescript', 'Tailwind', 'Playwright', 'Recharts'],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/pizza-shop'
        }
    },
    {
        title: 'Buscapeca (Final Paper)',
        description: '',
        images: [
            '/personal-projects/buscapeca/home.png',
            '/personal-projects/buscapeca/products.png'
        ],
        tags: ['Next.js', 'Web-scrapping', 'Tailwind', 'Selenium', 'EC2'],
        category: 'personal',
        links: {
            demo: 'https://buscapecas.vercel.app',
            github: 'https://github.com/lucasdebeterco/buscapeca'
        }
    },
    {
        title: 'Coffee Delivery',
        description: 'Application to manage a fictional coffee shop, where I was able to apply the concepts of Context-API to store items in the cart, routing with React router dom and searching for the user location through a third-party API. Developed using React.js, Typescript and Styled Components.',
        images: [
            '/personal-projects/coffee-delivery/home.png',
            '/personal-projects/coffee-delivery/cart.png'
        ],
        tags: ['React.js', 'Typescript', 'Styled-components', 'Context-API', 'React-router-dom', 'React-hook-form'],
        category: 'personal',
        links: {
            demo: 'https://coffee-delivery.lucasdebeterco.dev',
            github: 'https://github.com/lucasdebeterco/coffee-delivery'
        }
    },
    {
        title: 'Letmeask (NLW Together)',
        description: 'Application made with React.js and Typescript, with the objective of developing a question room center, where users can create rooms, share them with other people and register their doubts. Admin users can highlight a question or close it when it has been answered. All data persistence and deployment was done using Firebase tools (Realtime Database and Firebase Hosting).',
        images: [
            '/personal-projects/nlw-together-letmeask/login.png',
            '/personal-projects/nlw-together-letmeask/sala.png'
        ],
        tags: ['React.js', 'Firebase', 'Typescript', 'Styled-components'],
        category: 'personal',
        links: {
            demo: 'https://letmeask-120db.web.app/',
            github: 'https://github.com/lucasdebeterco/letmeask-nlw-together',
        },
    },
    {
        title: 'Blog Router (Alura)',
        description: 'Basic project to practice the concepts of the React Router DOM library, the application is a personal blog for listing articles in React.js and Typescript.',
        images: ['/personal-projects/blog-router/home.png'],
        tags: ['React.js', 'Typescript', 'Css modules', 'React Router Dom'],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/blog-router-alura',
        },
    },
    {
        title: 'Ignite Timer',
        description: 'Application for time management, allows you to create a task and count the time spent developing each task. The application was developed using React.js and Styled Components. In this project, I used libraries such as Zod to validate typing based on schemas and Immer to work with immutable states in an easier way.',
        images: [
            '/personal-projects/ignite-timer/task.png',
            '/personal-projects/ignite-timer/task-list.png'
        ],
        tags: ['React.js', 'Typescript', 'Styled Components', 'Zod', 'Immer', 'React Router Dom'],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/ignite-timer',
        },
    },
    {
        title: 'Github Blog',
        description: 'Development of an application that consumes the GitHub API to fetch issues from a repository, data from your profile and display them as a blog. The application presents the profile with image, number of followers, name and other information available through the GitHub API, listing and filtering repository issues and a page to display the details of each post (issue).',
        images: [
            '/personal-projects/github-blog/home.png',
            '/personal-projects/github-blog/post.png'
        ],
        tags: ['React.js', 'Typescript', 'Axios', 'React Router Dom', 'Tailwind CSS', 'Date-fns'],
        category: 'personal',
        links: {
            demo: 'https://github-blog.lucasdebeterco.dev/',
            github: 'https://github.com/lucasdebeterco/github-blog',
        },
    },
    {
        title: 'ToDo List',
        description: 'Simple web page to manage creation and removal of tasks using localStorage.',
        images: ['/personal-projects/todo-list/home.png'],
        tags: ['React.js', 'Typescript', 'Tailwind-CSS', 'Local Storage'],
        category: 'personal',
        links: {
            demo: 'https://main.dzgmv8kqwlxwq.amplifyapp.com/',
            github: 'https://github.com/lucasdebeterco/todo-list',
        },
    },
    {
        title: 'ES Converter',
        description: 'ECMAScript5 to ECMAScript6 converter, created to alleviate some situations I went through at work, where I needed to convert code generated by an old bundler to a newer version of ECMAScript.',
        images: ['/personal-projects/es-converter/files.png'],
        tags: ['Babel', 'Node'],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/es-converter',
        },
    },
    {
        title: 'NLW E-Sports',
        description: 'Find your DUO project, development environment with Node, React and mobile (React Native). It is a register of advertisements that allow the user to find a DUO based on the information in the advertisement, such as game, time and discord.',
        images: [
            '/personal-projects/nlw-esports/home.png',
            '/personal-projects/nlw-esports/add.png',
            '/personal-projects/nlw-esports/prisma.png'
        ],
        tags: [
            'Node',
            'React.js',
            'Typescript',
            'Tailwind CSS',
            'Prisma ORM'
        ],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/nlw-esports'
        }
    },
    {
        title: 'Aluroni',
        description: 'Restaurant application, React, Typescript and CSS Modules. Application with meals search input, filters by category (pasta, meat..), sorting by price, portion, etc.',
        images: [
            '/personal-projects/aluroni/home.png'
        ],
        tags: [
            'React.js',
            'Typescript',
            'CSS Modules'
        ],
        category: 'personal',
        links: {
            github: 'https://github.com/lucasdebeterco/aluroni'
        }
    },
    {
        title: 'Ignite Feed',
        description: 'Ignite feed is a simple project that simulates the social media feed, with comments, likes and delete comments functionalities. Made with React, Typescript and CSS Modules.',
        images: [
            '/personal-projects/ignite-feed/home.png'
        ],
        tags: [
            'React',
            'Typescript',
            'CSS Modules',
            'Date FNS'
        ],
        category: 'personal',
        links: {
            demo: 'https://ignite-feed.lucasdebeterco.dev',
            github: 'https://github.com/lucasdebeterco/ignite-feed'
        }
    },
    {
        title: 'ESLint Config',
        description: 'This is the standard package that I have made and use in my personal projects for ESLint configurations in React.js and Next.js, it contains formatting rules, spacing, imports and various settings for code formatting.',
        images: [
            '/personal-projects/eslint-config/npm-image.png'
        ],
        tags: [
            'ESLint',
            'Node',
            'NPM'
        ],
        category: 'personal',
        links: {
            demo: 'https://www.npmjs.com/package/@lucas.debeterco/eslint-config',
            github: 'https://github.com/lucasdebeterco/eslint-config-lucasdebeterco'
        }
    },
    {
        title: 'Alura Space',
        description: 'Project developed during an Alura platform course, with the main objective of creating filters with Javascript. Developed with React.js and SASS',
        images: [
            '/personal-projects/alura-space/home.png'
        ],
        tags: [
            'React.js',
            'SASS',
            'Javascript'
        ],
        category: 'personal',
        links: {
            demo: 'https://alura-space.lucasdebeterco.dev',
            github: 'https://github.com/lucasdebeterco/alura-space'
        }
    },
    {
        title: 'DT Money',
        description: 'This project was made to create a financial control for the user. The user can add their day-to-day financial inflows and outflows. You can also use the search field to filter by specific items or categories.',
        images: [
            '/personal-projects/dt-money/home.png'
        ],
        tags: [
            'React.js',
            'Typescript',
            'Tailwind',
            'React-hook-form',
            'Zod'
        ],
        category: 'personal',
        links: {
            demo: 'https://dt-money.lucasdebeterco.dev',
            github: 'https://github.com/lucasdebeterco/dt-money'
        }
    }
]
