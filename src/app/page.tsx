import { Header } from '@/app/components/header/header'

export default function Home() {
    return (
        <>
            <Header />

            <div className="pt-28">
                <section id="about-section" className="h-screen">
                    About
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
