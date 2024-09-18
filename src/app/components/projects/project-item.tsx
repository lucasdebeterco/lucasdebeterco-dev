import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { PiArrowSquareOut, PiFolderSimple } from 'react-icons/pi'

interface ProjectItemProps {
    id: number
    title: string
    description: string
    imageSrc?: string
    imageAlt?: string
    githubLink?: string
    productionLink?: string
    tools?: string[]
}

export function ProjectItem({id, title, description, imageSrc, imageAlt, githubLink, productionLink, tools}: ProjectItemProps) {
    return (
        <div
            id={`project-card-${id + 1}`}
            className="relative flex flex-col rounded-sm bg-[#141f35] drop-shadow-sm transition-transform [&:hover_h3]:text-indigo-600 [&:hover_img]:scale-110"
        >
            {imageSrc && imageAlt && (
                <div className="h-[240px] overflow-hidden">
                    <Image
                        src={imageSrc}
                        className="ease h-full object-cover transition duration-300"
                        alt={imageAlt}
                        width={500}
                        height={0}
                        quality={100}
                    />
                </div>
            )}
            <div className="flex flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                    <div className="text-indigo-600">
                        <PiFolderSimple size={40}/>
                    </div>

                    <div className="flex items-center gap-3">
                        {githubLink && (
                            <Link
                                href={githubLink}
                                className="text-slate-400 transition hover:text-indigo-500"
                                target="_blank"
                            >
                                <FiGithub size={24}/>
                            </Link>
                        )}
                        {productionLink && (
                            <Link
                                href={productionLink}
                                className="text-slate-400 transition hover:text-indigo-500"
                                target="_blank"
                            >
                                <PiArrowSquareOut size={30}/>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold transition">{title}</h3>
                    <p className="text-sm">
                        {description}
                    </p>
                    {tools && (
                        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                            {tools.map(tool => <span>{tool}</span>)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}