import Link from 'next/link'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export function About() {
    return (
        <section id="about-section" className="flex flex-col justify-center gap-6">
            <h2 id="about-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">1.</span>
                About
            </h2>

            <div className="flex items-center justify-between gap-24 md:px-8">
                <div id="about-section-content" className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Who am I?</h3>
                        <p className="text-justify text-sm text-zinc-400 [&>b]:text-zinc-100">
                            I am a developer graduated in Information Systems (Bachelor´s degree) and professional experience in the Front-end development area. I participated in projects with thousands of daily access and also <b>developing applications from scratch to publication</b>, with the objective of achieve the demands of various consumers and retailers in the E-commerce market. I have <b>4 years of professional experience with React.js, Typescript and Twig</b> and great teamwork skills, being responsible for <b>mentoring new people in my Squad</b> multiple times.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Get In Touch!</h3>
                        <div className="flex flex-col justify-between gap-4 md:flex-row">
                            <Link href="mailto:lucasdebeterco@gmail.com"
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-500">
                                <div
                                    className="image flex items-center justify-center rounded-md bg-background-light p-3 transition">
                                    <MdOutlineAlternateEmail size={24}/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400">Email</span>
                                    <span className="text transition">
                                        lucasdebeterco@gmail.com
                                    </span>
                                </div>
                            </Link>

                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                                rel="noreferrer"
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-500"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-background-light p-3 transition">
                                    <FiGithub size={24}/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400">Github</span>
                                    <span className="text transition">
                                        lucasdebeterco
                                    </span>
                                </div>
                            </Link>

                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-500"
                                rel="noreferrer"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-background-light p-3 transition">
                                    <CiLinkedin size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400">LinkedIn</span>
                                    <span className="text transition">
                                        Lucas Wamser Rosa Debeterco
                                    </span>
                                </div>
                            </Link>

                            <Link
                                target="_blank"
                                href="https://instagram.com/lucasdebeterco/"
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-500"
                                rel="noreferrer"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-background-light p-3 transition">
                                    <FaInstagram size={24}/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400">Instagram</span>
                                    <span className="text transition">
                                        Lucas Debeterco
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}