import { BiLogoPhp } from 'react-icons/bi'
import { DiJqueryLogo,DiScrum } from 'react-icons/di'
import { FaAws, FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { LiaSymfony } from 'react-icons/lia'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
    SiCypress, SiEslint, SiExpress, SiGithub, SiJira, SiPostgresql, SiPrisma, SiRedux, SiStyledcomponents, SiVitest
} from 'react-icons/si'
import { TbApi, TbBrandNextjs,TbBrandTypescript, TbBrandVite } from 'react-icons/tb'

enum category {
    FRONTEND,
    BACKEND,
    DEVOPS,
    TESTING,
    WORKFLOW,
}

export const skills = [
    { skill: 'React.js', icon: <FaReact size={26} />, category: category.FRONTEND },
    { skill: 'Next.js', icon: <TbBrandNextjs size={26} />, category: category.FRONTEND },
    { skill: 'Typescript', icon: <TbBrandTypescript size={26} />, category: category.FRONTEND },
    { skill: 'JQuery', icon: <DiJqueryLogo size={26} />, category: category.FRONTEND },
    { skill: 'Zustand', icon: <TbApi size={26} />, category: category.FRONTEND },
    { skill: 'Context API', icon: <FaReact size={26} />, category: category.FRONTEND },
    { skill: 'Redux', icon: <SiRedux size={26} />, category: category.FRONTEND },
    { skill: 'Tailwind', icon: <RiTailwindCssFill size={26} />, category: category.FRONTEND },
    { skill: 'Styled-components', icon:<SiStyledcomponents size={26} />, category: category.FRONTEND },
    { skill: 'SASS', icon: <FaSass size={26} />, category: category.FRONTEND },
    { skill: 'CSS', icon: <FaCss3Alt size={26} />, category: category.FRONTEND },
    { skill: 'ESLint', icon: <SiEslint size={26} />, category: category.FRONTEND },
    { skill: 'Vite', icon: <TbBrandVite size={26} />, category: category.FRONTEND },
    { skill: 'Node.js', icon:  <FaNodeJs size={26} />, category: category.BACKEND },
    { skill: 'Express.js', icon:  <SiExpress size={26} />, category: category.BACKEND },
    { skill: 'Prisma', icon:  <SiPrisma size={26} />, category: category.BACKEND },
    { skill: 'API REST', icon: <TbApi size={26} />, category: category.BACKEND },
    { skill: 'Basic PHP', icon: <BiLogoPhp size={26} />, category: category.BACKEND },
    { skill: 'Basic SQL | Postgres', icon: <SiPostgresql size={26} />, category: category.BACKEND },
    { skill: 'Twig Template Engine', icon: <LiaSymfony size={26} />, category: category.BACKEND },
    { skill: 'GitHub Actions', icon: <SiGithub size={26} />, category: category.DEVOPS },
    { skill: 'AWS Services (Amplify, S3, EC2)', icon: <FaAws size={26} />, category: category.DEVOPS },
    { skill: 'Cypress', icon: <SiCypress size={26} />, category: category.TESTING },
    { skill: 'Vitest', icon: <SiVitest size={26} />, category: category.TESTING },
    { skill: 'Git Flow', icon: <SiGithub size={26} />, category: category.WORKFLOW },
    { skill: 'Jira', icon: <SiJira size={26} />, category: category.WORKFLOW },
    { skill: 'Agile | Scrum', icon: <DiScrum size={26} />, category: category.WORKFLOW },
]