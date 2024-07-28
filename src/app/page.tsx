import { Experience } from '@/app/components/Experience'
import { Header } from '@/app/components/header/header'

export default function Home() {
    return (
        <>
            <Header />

            <div className="mx-auto flex max-w-[1360px] flex-col gap-28 px-10 pt-28">
                <section className="flex h-[80vh] flex-col justify-center gap-6">
                    <span className="text-indigo-600">Hi, my name is</span>
                    <div className="flex flex-col gap-2 font-bold">
                        <h1 className="text-6xl text-indigo-600">Lucas Debeterco.</h1>
                        <h2 className="max-w-[60%] text-3xl">Passionate about creating web solutions for modern
                            challanges.</h2>
                    </div>
                    <span className="max-w-[60%] text-zinc-400">
                        I’m a front-end software engineer specialized in building quality digital experiences.
                        Currently, I’m focused on building accessible products using the <span className="font-bold">Javascript ecosystem</span>
                    </span>
                </section>

                <section id="about-section" className="flex flex-col justify-center gap-6">
                    <h2 className="text-xl">
                        <span className="mr-1 text-indigo-600">1.</span>
                        About
                    </h2>


                    <div className="flex items-center justify-between gap-24 px-10">
                        <img src="/about/profile-photo.png" alt="Profile Photo" className="h-[300px] max-w-[300px] rounded-2xl" />

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold">Who am I?</h3>
                                <p className=" text-zinc-400 [&>b]:text-zinc-100">
                                    I am a developer graduated in Information Systems (Bachelor´s degree) and
                                    professional experience
                                    in the Front-end development area. I participated in projects with thousands of
                                    daily access and also <b>developing
                                    applications from scratch to publication</b>, with the objective of achieve the
                                    demands of
                                    various consumers and retailers in the E-commerce market. I have <b>4 years of
                                    professional experience
                                    with ReactJS, TypeScript and Twig</b> and great teamwork skills, beening responsible
                                    for <b>mentoring new people
                                    in my Squad</b> multiple times.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold">Personal Info</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        Email
                                    </div>
                                    <div>
                                        Github
                                    </div>
                                    <div>
                                        LinkedIn
                                    </div>
                                    <div>
                                        Work
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <Experience/>

                <section id="projects-section" className="">
                    <span className="mr-1 text-indigo-600">3.</span>
                    Projects
                </section>
                <section id="contact-section" className="">
                    <span className="mr-1 text-indigo-600">4.</span>
                    Contact
                </section>
            </div>
        </>)
}
