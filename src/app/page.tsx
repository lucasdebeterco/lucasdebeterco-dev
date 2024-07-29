import { About } from '@/app/components/about'
import { Experience } from '@/app/components/Experience'
import { Header } from '@/app/components/header/header'
import { Presentation } from '@/app/components/presentation'

export default function Home() {
    return (
        <>
            <Header />

            <div className="mx-auto flex max-w-[1360px] flex-col gap-28 px-10 pt-28">
                <Presentation />
                <About />
                <Experience/>

                <section id="projects-section" className="">
                    <span className="mr-1 text-indigo-500">3.</span>
                    Projects
                </section>
                <section id="contact-section" className="">
                    <span className="mr-1 text-indigo-500">4.</span>
                    Contact
                </section>
            </div>
        </>)
}
