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

            <ul className="[&>li]: grid grid-cols-4 gap-3 text-sm [&>li>span]:text-indigo-200 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:whitespace-nowrap [&>li]:rounded-md [&>li]:bg-[#141f35] [&>li]:p-3">
                <li>
                    <div className="rounded-md bg-[#00b5d6] p-2">
                        <FaReact size={26}/>
                    </div>
                    React.js
                </li>
                <li>
                    <div className="rounded-md bg-[#007acc] p-2">
                        <TbBrandTypescript size={26}/>
                    </div>
                    <span>Typescript</span>
                </li>
                <li>
                    <div className="rounded-md bg-[#313131] p-2">
                        <TbBrandNextjs size={26}/>
                    </div>
                    Next.js
                </li>
                <li>
                    <div className="rounded-md bg-[#539e43] p-2">
                        <FaNodeJs size={26}/>
                    </div>
                    Node.js
                </li>
                <li>
                    <div className="rounded-md bg-[#FCBD16] p-2">
                        <TbApi size={26}/>
                    </div>
                    API REST
                </li>
                <li>
                    <div className="rounded-md bg-[#ff4586] p-2">
                        <TbBrandStorybook size={26}/>
                    </div>
                    Storybook
                </li>
                <li>
                    <div className="rounded-md bg-[#433E38] p-2">
                        <TbApi size={26}/>
                    </div>
                    Zustand | ContextAPI
                </li>
                <li>
                    <div className="rounded-md bg-[#336791] p-2">
                        <SiCypress size={26}/>
                    </div>
                    Cypress
                </li>
                <li>
                    <div className="rounded-md bg-[#FE9404] p-2">
                        <IoLogoAmplify size={26}/>
                    </div>
                    CI/CD
                </li>
                <li>
                    <div className="rounded-md bg-[#CE679B] p-2">
                        <FaSass size={26}/>
                    </div>
                    SCSS
                </li>
                <li>
                    <div className="rounded-md bg-[#0370B9] p-2">
                        <FaCss3Alt size={26}/>
                    </div>
                    CSS
                </li>
                <li>
                    <div className="rounded-md bg-[#38bdf8] p-2">
                        <RiTailwindCssFill size={26}/>
                    </div>
                    Tailwind
                </li>
                <li>
                    <div className="rounded-md bg-[#D770B0] p-2">
                        <SiStyledcomponents size={26}/>
                    </div>
                    Styled-components
                </li>
                <li>
                    <div className="rounded-md bg-[#84A61E] p-2">
                        <LiaSymfony size={26}/>
                    </div>
                    Twig Template Engine
                </li>
                <li>
                    <div className="rounded-md bg-[#9D72FF] p-2">
                        <TbBrandVite size={26}/>
                    </div>
                    Vite
                </li>
                <li>
                    <div className="rounded-md bg-[#F26622] p-2">
                        <SiEslint size={26}/>
                    </div>
                    ESLint
                </li>
                <li>
                    <div className="rounded-md bg-[#2E4A8B] p-2">
                        <DiScrum size={26}/>
                    </div>
                    Agile | Scrum
                </li>
                <li>
                    <div className="rounded-md bg-[#336791] p-2">
                        <SiPostgresql size={26}/>
                    </div>
                    Basic SQL | Postgres
                </li>
                <li>
                    <div className="rounded-md bg-[#4f5b93] p-2">
                        <BiLogoPhp size={26}/>
                    </div>
                    Basic PHP
                </li>
                <li>
                    <div className="rounded-md bg-[#0673B4] p-2">
                        <DiJqueryLogo size={26}/>
                    </div>
                    JQuery
                </li>
            </ul>
        </section>)
}