import { BiLogoPhp } from 'react-icons/bi'
import { DiJqueryLogo,DiScrum } from 'react-icons/di'
import { FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { IoLogoAmplify } from 'react-icons/io5'
import { LiaSymfony } from 'react-icons/lia'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiCypress, SiEslint, SiPostgresql,SiStyledcomponents } from 'react-icons/si'
import { TbApi, TbBrandNextjs, TbBrandStorybook,TbBrandTypescript, TbBrandVite } from 'react-icons/tb'

export function Tools() {
    return (
        <section id="tools-section" className="flex flex-col gap-6">
            <h2 id="tools-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">2.</span>
                Tools
            </h2>

            <ul className="[&>li]: grid gap-3 text-sm md:grid-cols-4 md:px-8 [&>li>span]:text-indigo-200 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:whitespace-nowrap [&>li]:rounded-md [&>li]:bg-background-light [&>li]:p-3">
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <FaReact size={26}/>
                    </div>
                    React.js
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbBrandTypescript size={26}/>
                    </div>
                    <span>Typescript</span>
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbBrandNextjs size={26}/>
                    </div>
                    Next.js
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <FaNodeJs size={26}/>
                    </div>
                    Node.js
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbApi size={26}/>
                    </div>
                    API REST
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbBrandStorybook size={26}/>
                    </div>
                    Storybook
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbApi size={26}/>
                    </div>
                    Zustand | ContextAPI
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <SiCypress size={26}/>
                    </div>
                    Cypress
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <IoLogoAmplify size={26}/>
                    </div>
                    CI/CD
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <FaSass size={26}/>
                    </div>
                    SASS
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <FaCss3Alt size={26}/>
                    </div>
                    CSS
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <RiTailwindCssFill size={26}/>
                    </div>
                    Tailwind
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <SiStyledcomponents size={26}/>
                    </div>
                    Styled-components
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <LiaSymfony size={26}/>
                    </div>
                    Twig Template Engine
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <TbBrandVite size={26}/>
                    </div>
                    Vite
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <SiEslint size={26}/>
                    </div>
                    ESLint
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <DiScrum size={26}/>
                    </div>
                    Agile | Scrum
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <SiPostgresql size={26}/>
                    </div>
                    Basic SQL | Postgres
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <BiLogoPhp size={26}/>
                    </div>
                    Basic PHP
                </li>
                <li>
                    <div className="rounded-md bg-indigo-600 p-2">
                        <DiJqueryLogo size={26}/>
                    </div>
                    JQuery
                </li>
            </ul>
        </section>)
}