import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function About() {
    return (
        <section id="about-section" className="flex flex-col justify-center gap-6">
            <h2 id="about-section-title" className="text-xl">
                <span className="mr-1 text-indigo-500">1.</span>
                About
            </h2>

            <div className="flex items-center justify-between gap-24 px-8">
                <div id="about-section-content" className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Who am I?</h3>
                        <p className=" text-sm text-zinc-400 [&>b]:text-zinc-100">
                            I am a developer graduated in Information Systems (Bachelor´s degree) and professional
                            experience
                            in the Front-end development area. I participated in projects with thousands of daily access
                            and also <b>developing
                            applications from scratch to publication</b>, with the objective of achieve the demands of
                            various consumers and retailers in the E-commerce market. I have <b>4 years of professional
                            experience
                            with ReactJS, TypeScript and Twig</b> and great teamwork skills, being responsible for <b>mentoring
                            new people
                            in my Squad</b> multiple times.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Get In Touch!</h3>
                        <div className="grid grid-cols-4 gap-10">
                            <Link href="mailto:lucasdebeterco@gmail.com"
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-600">
                                <div
                                    className="image flex items-center justify-center rounded-md bg-[#141f35] p-3 transition">
                                    <Envelope size={24}/>
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
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-600"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-[#141f35] p-3 transition">
                                    <GithubLogo size={24}/>
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
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-600"
                                rel="noreferrer"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-[#141f35] p-3 transition">
                                    <LinkedinLogo size={24}/>
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
                                className="flex items-center gap-3 [&:hover>.image]:bg-indigo-600 [&:hover_.text]:text-indigo-600"
                                rel="noreferrer"
                            >
                                <div className="image flex items-center justify-center rounded-md bg-[#141f35] p-3 transition">
                                    <InstagramLogo size={24}/>
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
        </section>)
}