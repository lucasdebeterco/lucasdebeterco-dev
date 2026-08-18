import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className="border-b border-[#E2E8F0] bg-white py-12 md:py-20" id="home">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_340px]">
                    {/* Main Content */}
                    <div>
                        <h1 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl">
                            Lucas Debeterco
                        </h1>

                        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#334155]">
                            Engenheiro de Software Sênior Javascript na CI&amp;T. Experiência consolidada no desenvolvimento de
                            aplicações escaláveis.
                        </p>

                        <div className="mb-10 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-lg bg-[#E20D34] px-6 py-3 font-heading text-sm font-semibold text-white shadow-sm transition hover:bg-[#C1082A] hover:shadow-md active:scale-95"
                            >
                                Ver Projetos &amp; Certificações
                            </a>
                            <a
                                href="#experiencia"
                                className="inline-flex items-center justify-center rounded-lg border border-[#E2E8F0] bg-white px-6 py-3 font-heading text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F1F5F9]"
                            >
                                Ver Trajetória Profissional
                            </a>
                        </div>

                        {/* Stats Summary */}
                        <div className="grid grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-3">
                            <div>
                                <div className="font-heading text-2xl font-extrabold text-[#E20D34]">
                                    +8 Anos
                                </div>
                                <div className="mt-1 text-xs font-semibold text-[#64748B]">
                                    Experiência em Dev
                                </div>
                            </div>
                            <div>
                                <div className="font-heading text-2xl font-extrabold text-[#E20D34]">
                                    Fullstack JS
                                </div>
                                <div className="mt-1 text-xs font-semibold text-[#64748B]">
                                    React, Next &amp; Node
                                </div>
                            </div>
                            <div>
                                <div className="font-heading text-2xl font-extrabold text-[#E20D34]">
                                    CI&amp;T
                                </div>
                                <div className="mt-1 text-xs font-semibold text-[#64748B]">
                                    Empresa Atual
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Side Card */}
                    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-sm">
                        <img
                            src="/about/profile-photo.png"
                            alt="Lucas Debeterco"
                            className="mb-4 size-24 rounded-full border-4 border-[#E20D34] object-cover shadow-md"
                        />
                        <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                            Lucas Wamser Rosa Debeterco
                        </h3>
                        <p className="mb-4 text-sm font-semibold text-[#0093A2]">
                            Senior Software Engineer
                        </p>

                        <div className="space-y-2.5 border-t border-[#E2E8F0] py-4 text-xs">
                            <div className="flex justify-between">
                                <span className="text-[#64748B]">Empresa:</span>
                                <span className="font-semibold text-[#0F172A]">CI&amp;T</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#64748B]">Especialidade:</span>
                                <span className="font-semibold text-[#0F172A]">Ecossistema JavaScript</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 border-t border-[#E2E8F0] pt-4">
                            <a
                                href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                            >
                                <FaLinkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/lucasdebeterco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition hover:border-[#24292F] hover:bg-[#24292F] hover:text-white"
                            >
                                <FaGithub size={16} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://instagram.com/lucasdebeterco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white"
                            >
                                <FaInstagram size={16} />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
