import { Check, Mail } from 'lucide-react'
import { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

interface FooterProps {
    onShowToast?: (message: string) => void
}

const Footer = ({ onShowToast }: FooterProps) => {
    const currentYear = new Date().getFullYear()
    const [copied, setCopied] = useState(false)

    const handleContactClick = () => {
        const email = 'lucasdebeterco@gmail.com'
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                setCopied(true)
                if (onShowToast) {
                    onShowToast(`E-mail (${email}) copiado para a área de transferência!`)
                }
                setTimeout(() => setCopied(false), 3000)
            }).catch(() => {
                // Ignore error and proceed to mailto
            })
        }
        window.location.href = `mailto:${email}`
    }

    return (
        <footer className="border-t border-[#E2E8F0] bg-white py-12" id="contato">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="flex flex-wrap items-center justify-between gap-8 pb-10">
                    <div>
                        <div className="flex items-center font-heading text-xl font-extrabold text-[#0F172A]">
                            <span>Lucas</span>
                            <span className="text-[#E20D34]">_Debeterco</span>
                        </div>
                        <p className="mt-1.5 text-xs text-[#64748B]">
                            Senior Software Engineer • Disponível para projetos e conexões.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://www.linkedin.com/in/lucas-wamser-rosa-debeterco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-[#E2E8F0] p-2 text-[#64748B] transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://github.com/lucasdebeterco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-[#E2E8F0] p-2 text-[#64748B] transition hover:border-[#24292F] hover:bg-[#24292F] hover:text-white"
                                aria-label="GitHub"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://instagram.com/lucasdebeterco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-[#E2E8F0] p-2 text-[#64748B] transition hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={18} />
                            </a>
                        </div>

                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#E20D34] px-4 py-2 font-heading text-xs font-bold text-white shadow-sm transition hover:bg-[#C1082A] hover:shadow-md active:scale-95"
                        >
                            {copied ? <Check size={14} /> : <Mail size={14} />}
                            <span>Contatar via E-mail</span>
                        </button>
                    </div>
                </div>

                <div className="border-t border-[#E2E8F0] pt-6 text-center text-xs text-[#64748B]">
                    © {currentYear} Lucas Debeterco. Desenvolvido para apresentação interna e externa CI&amp;T.
                </div>
            </div>
        </footer>
    )
}

export default Footer