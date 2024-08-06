import { ArrowSquareOut, FolderSimple, GithubLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectItem() {
    return (
        <div className="relative flex flex-col rounded-sm bg-[#141f35] drop-shadow-sm transition-transform hover:-translate-y-1.5 [&:hover_h3]:text-indigo-600">
            <Image src="/projects/pizza-shop.png" alt="Pizza Shop Project" width={500} height={0} quality={100}/>
            <div className="flex flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                    <div className="text-indigo-600">
                        <FolderSimple weight="light" size={40}/>
                    </div>

                    <div className="flex gap-3">
                        <Link href="https://github.com/lucasdebeterco/pizza-shop" className="text-slate-400 transition hover:text-indigo-500">
                            <GithubLogo size={28}/>
                        </Link>
                        <Link href="https://github.com/lucasdebeterco/pizza-shop" className="text-slate-400 transition hover:text-indigo-500">
                            <ArrowSquareOut size={28}/>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold transition">Pizza Shop</h3>
                    <p className="text-sm">
                        A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top
                        languages,
                        starred repositories, and sort through your top repos by number of stars, forks, and size.
                    </p>
                    <div className="flex gap-3 text-xs text-slate-400">
                        <span>Next.js</span>
                        <span>Tailwind CSS</span>
                        <span>ReactJS</span>
                    </div>
                </div>
            </div>
        </div>)
}