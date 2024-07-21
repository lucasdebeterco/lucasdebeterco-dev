import { Header } from '@/app/components/header/header'

export default function Home() {
    return (
        <>
            <Header />

            <div className="mx-auto max-w-[1360px] px-10 pt-28">
                <section id="about-section" className="flex h-[80vh] flex-col justify-center gap-6">
                    <span className="text-purple-600">Hi, my name is</span>
                    <div className="flex flex-col gap-2 font-bold">
                        <h1 className="text-6xl text-purple-600">Lucas Debeterco.</h1>
                        <h2 className="max-w-[60%] text-3xl">Passionate about creating web solutions for modern challanges.</h2>
                    </div>
                    <span className="max-w-[60%] text-zinc-400">
                        I’m a front-end software engineer specialized in building quality digital experiences.
                        Currently, I’m focused on building accessible products using the <span className="font-bold">Javascript ecosystem</span>
                    </span>
                </section>
                <section id="experience-section" className="h-screen">
                    Experience
                </section>
                <section id="projects-section" className="h-screen">
                    Projects
                </section>
                <section id="contact-section" className="h-screen">
                    Contact
                </section>
            </div>
        </>
    )
}
