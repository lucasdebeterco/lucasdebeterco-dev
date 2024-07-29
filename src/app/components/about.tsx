export function About() {
    return (
        <section id="about-section" className="flex flex-col justify-center gap-6">
            <h2 className="text-xl">
                <span className="mr-1 text-indigo-500">1.</span>
                About
            </h2>

            <div className="flex items-center justify-between gap-24 px-10">
                <img src="/about/profile-photo.png" alt="Profile Photo"
                    className="h-[300px] max-w-[300px] rounded-2xl"/>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">Who am I?</h3>
                        <p className=" text-zinc-400 [&>b]:text-zinc-100">
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
    )
}