import { useLanguage } from '../contexts/LanguageContext'

const Experience = () => {
    const { t } = useLanguage()

    return (
        <section className="scroll-mt-16 py-16 md:py-20" id="experiencia">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mb-10">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E20D34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E20D34]">
                        {t.experience.badge}
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                        {t.experience.title}
                    </h2>
                    <p className="mt-2 text-base text-[#64748B]">
                        {t.experience.subtitle}
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {t.experience.experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-subtle transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-card md:p-8"
                        >
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                                        {exp.role}
                                    </h3>
                                    <div className="mt-1 font-heading text-base font-bold text-[#E20D34]">
                                        {exp.company}
                                    </div>
                                </div>
                                <span className="rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3.5 py-1 text-xs font-bold text-[#0F172A]">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-5 text-xs text-[#64748B]">
                                {exp.location}
                            </div>

                            <ul className="mb-6 space-y-2.5">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm leading-relaxed text-[#334155]">
                                        <span className="mr-2.5 font-bold text-[#E20D34]">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 border-t border-[#E2E8F0] pt-4">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-[#F1F5F9] px-2.5 py-1 font-code text-xs font-semibold text-[#334155]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience