import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbBrandLinkedin } from 'react-icons/tb'

export function Footer() {
    return (
        <footer className="md:px:20 mx-auto mt-20 flex flex-col items-center justify-between gap-6 bg-background-light px-8 py-14 text-center text-sm shadow-overlay md:flex-row md:text-left">
            <div className="flex flex-col">
                <span className="text-lg">Developed by <strong className="text-violet-500">Lucas Debeterco</strong> in 2024</span>
                <span>Built with Next.js and Tailwind CSS, deployed with Vercel.</span>
            </div>
            <div className="flex items-center gap-4">
                <Link
                    target="_blank"
                    href="https://github.com/lucasdebeterco"
                    className="transition hover:text-indigo-600"
                    rel="noreferrer"
                >
                    <FiGithub size={28} />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                    className="transition hover:text-indigo-600"
                    rel="noreferrer"
                >
                    <TbBrandLinkedin size={32} />
                </Link>
                <Link
                    href="mailto:lucasdebeterco@gmail.com"
                    className="transition hover:text-indigo-600"
                >
                    <MdOutlineAlternateEmail size={28} />
                </Link>
                <Link
                    target="_blank"
                    href="https://instagram.com/lucasdebeterco/"
                    className="transition hover:text-indigo-600"
                    rel="noreferrer"
                >
                    <FaInstagram size={28} />
                </Link>
            </div>
        </footer>
    )
}