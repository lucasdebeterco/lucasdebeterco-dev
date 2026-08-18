import { useLanguage } from '../contexts/LanguageContext'

const Technologies = () => {
    const { t } = useLanguage()

    return (
        <section className="scroll-mt-16 border-y border-[#E2E8F0] bg-white py-16 md:py-20" id="tecnologias">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mb-10">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E20D34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E20D34]">
                        {t.technologies.badge}
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                        {t.technologies.title}
                    </h2>
                    <p className="mt-2 text-base text-[#64748B]">
                        {t.technologies.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {t.technologies.categories.map((cat, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm"
                        >
                            <h3 className="mb-4 border-b border-[#E2E8F0] pb-3 font-heading text-base font-bold text-[#0F172A]">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs"
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

export default Technologies
