import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { IoMdCloseCircle } from 'react-icons/io'
import { PiArrowSquareOut, PiFolderSimple } from 'react-icons/pi'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ProjectItemProps {
    id: number
    item: {
        title: string
        description: string
        imageSrc?: string[]
        githubLink?: string
        productionLink?: string
        tools?: string[]
    }
}

export function ProjectItem({id, item}: ProjectItemProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <div
                    id={`project-card-${id + 1}`}
                    className="relative flex flex-col rounded-sm bg-background-light drop-shadow-sm transition-transform [&:hover_h3]:text-indigo-600 [&:hover_img]:scale-110"
                >
                    {item.imageSrc && (
                        <div className="h-[240px] overflow-hidden">
                            <Image
                                src={item.imageSrc[0]}
                                className="ease h-full object-cover transition duration-300"
                                alt={item.title}
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
                                {item.githubLink && (
                                    <Link
                                        href={item.githubLink}
                                        className="text-slate-400 transition hover:text-indigo-500"
                                        target="_blank"
                                    >
                                        <FiGithub size={24}/>
                                    </Link>
                                )}
                                {item.productionLink && (
                                    <Link
                                        href={item.productionLink}
                                        className="text-slate-400 transition hover:text-indigo-500"
                                        target="_blank"
                                    >
                                        <PiArrowSquareOut size={30}/>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <h3 className="text-xl font-bold transition">{item.title}</h3>
                            <p className="line-clamp-4 h-[104px] text-sm">
                                {item.description}
                            </p>
                            {item.tools && (
                                <div className="flex h-[44px] flex-wrap gap-3 text-xs text-slate-400">
                                    {item.tools.map(tool => <span>{tool}</span>)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-background/80"/>
                <Dialog.Content
                    className="data-[state=open]:animate-contentShow fixed left-[50%] top-[calc(50%+44px)]  max-h-[78vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-background-light shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[60vh]">
                    <div className="flex w-full justify-end">
                        <div className="flex w-full flex-col gap-4 md:flex-row">
                            <div className="w-full overflow-hidden md:w-[50vw]">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                >
                                    {item.imageSrc && item.imageSrc.map(src => (
                                        <SwiperSlide>
                                            <Image
                                                src={src}
                                                className="ease h-[200px] object-cover transition duration-300 md:h-[480px]"
                                                alt={item.title}
                                                width={675}
                                                height={480}
                                                quality={100}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="flex max-w-full flex-col justify-between gap-3 p-[25px] md:max-w-[40vw]">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-bold transition">{item.title}</h3>
                                    <p className="scroll max-h-[200px] overflow-y-auto pr-2 text-justify text-sm md:max-h-max md:pr-0">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                                    {item.tools && item.tools.map(tool => <span>{tool}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="absolute right-4 top-4 z-10 inline-flex appearance-none items-center justify-center rounded-full bg-background-light focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <IoMdCloseCircle size={30} />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}