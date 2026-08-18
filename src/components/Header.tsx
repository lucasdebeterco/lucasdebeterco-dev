import { Check, Download, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
    onShowToast?: (message: string) => void
}

const Header = ({ onShowToast }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const navLinks = [
        { name: 'Sobre', href: '#home' },
        { name: 'Experiência', href: '#experiencia' },
        { name: 'Tecnologias', href: '#tecnologias' },
        { name: 'Projetos & Certificações', href: '#projects' },
    ]

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
        <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md transition-all">
            <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-3.5">
                <a href="#home" className="flex items-center font-heading text-xl font-extrabold text-[#0F172A]">
                    <span>Lucas</span>
                    <span className="text-[#E20D34]">_Debeterco</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-6 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-[#64748B] transition-colors hover:text-[#E20D34]"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="https://drive.google.com/file/d/1zETF-wtU8gd8-6q8k8mGa4N2CYJcFlJD/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 font-heading text-xs font-bold text-[#0F172A] shadow-xs transition hover:border-[#CBD5E1] hover:bg-[#F1F5F9] sm:inline-flex"
                    >
                        <Download size={14} className="text-[#E20D34]" />
                        <span>Download CV</span>
                    </a>

                    <button
                        onClick={handleContactClick}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#E20D34] px-4 py-2 font-heading text-xs font-bold text-white shadow-sm transition hover:bg-[#C1082A] hover:shadow-md active:scale-95"
                    >
                        {copied ? <Check size={14} /> : <Mail size={14} />}
                        <span>Fale Comigo</span>
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg p-2 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] lg:hidden"
                        aria-label="Abrir Menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="border-b border-[#E2E8F0] bg-white px-6 pb-4 pt-2 shadow-lg lg:hidden">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-semibold text-[#334155] hover:bg-[#F1F5F9] hover:text-[#E20D34]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1zETF-wtU8gd8-6q8k8mGa4N2CYJcFlJD/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5 text-center text-sm font-bold text-[#0F172A] hover:bg-[#F1F5F9]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Download size={15} className="text-[#E20D34]" />
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header