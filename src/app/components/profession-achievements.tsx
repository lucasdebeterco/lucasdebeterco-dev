import { ProjectItem } from '@/app/components/projects/project-item'

export function ProfessionAchievements() {
    return (<section id="professional-achievements" className="flex flex-col justify-center gap-6">
        <h2 id="professional-achievements-section-title" className="text-xl">
            <span className="mr-1 text-indigo-500">3.</span>
                Professional Achievements
        </h2>

        <div className="grid grid-cols-3 gap-4">
            <ProjectItem
                id={1}
                title="Design system"
                description="I actively participated in the development of a design system from scratch, creating several reusable components and tokens. The main tools used were react, tailwind, shadcn and storybook to manage the components. FalconDS components and tokens are applied to all the applications developed in React by the company. Currently the components are completely stable and are being used daily by thousands of users."
            />

            <ProjectItem
                id={2}
                title="Gift List"
                description="Interface for creating and managing a gift list within ours customers websites. Allows creation of the list, addition and removal of desired items. Developed using template management with Twig in conjunction with PHP. A challenge of this project was my first contact with the back-end, where I had to make changes to the APIs and create Endpoints to manage the gift list."
            />

            <ProjectItem
                id={3}
                title="Reviews Area"
                description="Complete redesign of the review listing and inclusion area on the e-commerce platform's websites, refactoring the inclusion and presentation of reviews. I was responsible for implementing the registration and presentation of media in reviews, something that our platform did not have before. In addition to image registration, each image goes through a hosted AWS Lambda service to validate the presence of adult content."
            />

            <ProjectItem
                id={4}
                title="Design Central"
                description="Application developed to centralize legacy interfaces present on our e-commerce platform. This application was responsible for grouping plugin listing functionalities, page manipulation, additional code manipulation and general configurations. This functionality is currently used by approximately 2500 customers and the main tools used during development were ReactJS, React Query and TailwindCSS and Cypress for testing"
            />

            <ProjectItem
                id={5}
                title="Order View Interface"
                description="In this application, I created a complete interface for viewing orders received by our customers. This new interface replaced a legacy version and grouped information in one place. We currently have approximately 2100 of our customers using the new order view, this application has been in production for about a year and has received several positive feedbacks. The application was developed using ReactJS and TailwindCSS. One challenge I had in this project was managing the development of an API from scratch to provide data related to the order together with the back-end team."
            />
        </div>
    </section>
    )
}