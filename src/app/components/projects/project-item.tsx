import { ArrowSquareOut, FolderSimple, GithubLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
    id: number
    imageSrc: string
    imageAlt: string
    githubLink: string
    productionLink: string
    title: string
    description: string
    tools: string[]
}

export function ProjectItem({id, imageSrc, imageAlt, githubLink, productionLink, title, description, tools}: ProjectItemProps) {
    return (
        <div
            id={`project-card-${id}`}
            className="relative flex flex-col rounded-sm bg-[#141f35] drop-shadow-sm transition-transform [&:hover_h3]:text-indigo-600 [&:hover_img]:scale-110"
        >
            <div className="overflow-hidden">
                <Image
                    src={imageSrc}
                    className="ease transition duration-300"
                    alt={imageAlt}
                    width={500}
                    height={0}
                    quality={100}
                />
            </div>
            <div className="flex flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                    <div className="text-indigo-600">
                        <FolderSimple weight="light" size={40}/>
                    </div>

                    <div className="flex gap-3">
                        <Link href={githubLink} className="text-slate-400 transition hover:text-indigo-500">
                            <GithubLogo size={28}/>
                        </Link>
                        <Link href={productionLink} className="text-slate-400 transition hover:text-indigo-500">
                            <ArrowSquareOut size={28}/>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold transition">{title}</h3>
                    <p className="text-sm">
                        {description}
                    </p>
                    <div className="flex gap-3 text-xs text-slate-400">
                        {tools.map(tool => <span>{tool}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}