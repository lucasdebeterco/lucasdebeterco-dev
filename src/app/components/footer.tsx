import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
    return (
        <footer className="mt-20 flex justify-between bg-slate-900 text-sm shadow-overlay">
            <div className="max-w-[300px]">
                Developed by Lucas Debeterco 2024
                Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            </div>
            <div className="flex">
                <GithubLogo size={24} />
                <LinkedinLogo size={24} />
                <Envelope size={24} />
                <InstagramLogo size={24} />
            </div>
        </footer>
    )
}