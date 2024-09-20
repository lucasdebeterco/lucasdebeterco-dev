import { CardItemProps } from '@/app/types/card-item'export const professionalAchievements: CardItemProps[] = [    {        title: 'Design system',        description: 'I actively participated in the development of a design system from scratch, creating several reusable components and tokens. The main tools used were react, tailwind, shadcn and storybook to manage the components. FalconDS components and tokens are now  applied to all the 18 applications developed in React by the company. Currently the components are completely stable and are being used daily by thousands of users. After the launch of the new design system, we carried out an internal research, which demonstrated that the majority of developers realized that their projects gained more than 50% agility on the process of creating a new interface.',        imageSrc: [            '/professional-achievements/design-system/home.png'        ],        productionLink: 'https://falcon-ds.magazord.com.br/',        tools: [            'React.js',            'Typescript',            'Storybook',            'Tailwind-css',            'Shadcn',        ]    },    {        title: 'Design Central',        description: 'Application developed to centralize legacy interfaces present on our e-commerce platform. This application was responsible for grouping plugin listing functionalities, page manipulation, additional code manipulation and general configurations. This application is currently being used by approximately 2500 customers and the main tools used during development were React.js, React Query and TailwindCSS and Cypress for testing. As this application runs separately within our old system, I was able to practice and apply some techniques and concepts of micro-frontend architecture.',        imageSrc: [            '/professional-achievements/design-central/home.png',            '/professional-achievements/design-central/new-page.png',            '/professional-achievements/design-central/page-list.png',        ],        tools: [            'React.js',            'Typescript',            'Tailwind-css',            'React-query',            'React-table'        ]    },    {        title: 'Order View Interface',        description: 'In this application, I created a complete interface for viewing orders received by our customers. This new interface replaced a legacy version and grouped information in one place. We currently have approximately 2100 of our customers using the new order view, this application has been in production for about a year and has received several positive feedbacks. The application was developed using React.js and TailwindCSS. One challenge I had in this project was managing the development of an API from scratch to provide data related to the order together with the back-end team. In this project, it is important to highlight that it was the first time that I applied micro-frontend architecture techniques, since this application runs within the system\'s old platform interface. After the screen was released, some research was carried out, which resulted in some positive indicators, such as 90% of users found it easier to find information in the new interface compared to the old one.',        imageSrc: [            '/professional-achievements/order-view-interface/general-info.png',            '/professional-achievements/order-view-interface/other-info.png'        ],        tools: [            'React.js',            'Typescript',            'Tailwind-css',            'Ext.js integration',            'React-table'        ]    },    {        title: 'New Product Layouts',        description: 'In this project, I actively participated in the technology update of our product page templates, once again applying the micro-frontend architecture concept, as product packages are generated in a completely separate application and environment, only loaded on the product page. 4 new product templates were created using React.js and Typescript, different from the previous models created with Twig Template Engine and HTML. This project was particularly challenging, as a product page is one of the most important pages in an e-commerce, a lot of care was needed with SEO metrics, loading time, IIFE package size and many issues related to performance. Currently, XXX customers are using one of the new product page templates in React.js on the Magazord platform.',        imageSrc: [            '/professional-achievements/product-layouts/modelo-12.png',            '/professional-achievements/product-layouts/modelo-11.png',            '/professional-achievements/product-layouts/modelo-10.png'        ],        productionLink: 'aaaaa',        tools: [            'React.js',            'Typescript',            'Typescript',            'Tailwind-css',            'Vite',        ]    },    {        title: 'Gift List',        description: 'Interface for creating and managing a gift list in ours customers websites. Including creation of the list, addition and removal of desired items. Developed using template management with Twig in conjunction with PHP. A challenge of this project was my first contact with the back-end, where I had to make changes to the APIs and create Endpoints to manage the gift list.',        imageSrc: [            '/professional-achievements/gift-list/home.png',            '/professional-achievements/gift-list/list-link.png',            '/professional-achievements/gift-list/new-list.png',            '/professional-achievements/gift-list/products-list.png'        ],        tools: [            'HTML',            'CSS|SASS',            'jQuery',            'Basic-PHP',        ]    },    {        title: 'Reviews Area',        description: 'Complete redesign of the area responsible for inclusion and presentation of reviews on the e-commerce platform\'s websites. I was responsible for implementing registration and presentation of media in reviews, something that our platform did not have before. In addition to image registration, each image goes through a hosted AWS Lambda service to validate the presence of adult content. The final customer evaluation rate was monitored after the changes, we had a very good result, going from 6.7% to 9.2%. The customer base during this period contained more than 2000 customers with an average monthly access of 500 million.',        imageSrc: [            '/professional-achievements/reviews-area/reviews.png',            '/professional-achievements/reviews-area/new-review.png',        ],        productionLink: 'https://www.manalinda.com/conjunto-vies-marinho#avaliacao-produto-react-app',        tools: [            'HTML',            'CSS|SASS',            'jQuery',            'Basic-PHP',        ]    },    {        title: 'Vite Multi Bundle APP',        description: 'Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index. This application was developed by me to solve a problem we faced when we decided to componentize parts of our website to run on React.js. We needed a project structure in which all product page templates were in the same repository (only with different entrypoints), but the bundles needed to be generated separately. When I created this structure and applied it to our product models, it was possible to proceed with all componentization projects for areas of the website (product, footer, headers, etc..), this structure is now used within the company in all site projects and the 2400+ customer websites.',        imageSrc: [            '/professional-achievements/vite-multi-bundle-test/code.png'        ],        githubLink: 'https://github.com/lucasdebeterco/vite-multi-bundle-test',        productionLink: 'https://vite-multi-bundle-test.lucasdebeterco.dev',        tools: [            'Node',            'Vite',            'Bundle',            'Micro-frontend'        ]    },]