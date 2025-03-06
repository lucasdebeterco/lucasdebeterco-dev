import { BiLogoPhp } from 'react-icons/bi'
import { DiJqueryLogo,DiScrum } from 'react-icons/di'
import { FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { IoLogoAmplify } from 'react-icons/io5'
import { LiaSymfony } from 'react-icons/lia'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiCypress, SiEslint, SiPostgresql,SiStyledcomponents } from 'react-icons/si'
import { TbApi, TbBrandNextjs, TbBrandStorybook,TbBrandTypescript, TbBrandVite } from 'react-icons/tb'

export const skills = [
  { skill: 'React.js', icon: <FaReact size={26} /> },
  { skill: 'Typescript', icon: <TbBrandTypescript size={26} /> },
  { skill: 'Next.js', icon: <TbBrandNextjs size={26}/> },
  { skill: 'Node.js', icon:  <FaNodeJs size={26}/> },
  { skill: 'API REST', icon: <TbApi size={26}/> },
  { skill: 'Storybook', icon: <TbBrandStorybook size={26}/> },
  { skill: 'Zustand | ContextAPI', icon:     <TbApi size={26}/>},
  { skill: 'Cypress', icon: <SiCypress size={26}/> },
  { skill: 'CI/CD', icon: <IoLogoAmplify size={26}/> },
  { skill: 'SASS', icon: <FaSass size={26}/> },
  { skill: 'CSS', icon: <FaCss3Alt size={26}/> },
  { skill: 'Tailwind', icon: <RiTailwindCssFill size={26}/> },
  { skill: 'Styled-components', icon:<SiStyledcomponents size={26}/>  },
  { skill: 'Twig Template Engine', icon: <LiaSymfony size={26}/> },
  { skill: 'Vite', icon: <TbBrandVite size={26}/> },
  { skill: 'ESLint', icon: <SiEslint size={26}/> },
  { skill: 'Agile | Scrum', icon: <DiScrum size={26}/> },
  { skill: 'Basic SQL | Postgres', icon: <SiPostgresql size={26}/> },
  { skill: 'Basic PHP', icon: <BiLogoPhp size={26}/> },
  { skill: 'JQuery', icon: <DiJqueryLogo size={26}/> }
]