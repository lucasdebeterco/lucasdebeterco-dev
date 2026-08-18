import { ExternalLink, Github, Star } from 'lucide-react'
import { useMemo, useState } from 'react'

import { courses } from '../data/courses'
import { professionalProjects } from '../data/professionalProjects'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { getGithubRepoOgImage } from '../services/github'

type Tab = 'professional' | 'github' | 'courses'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME ?? 'lucasdebeterco'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function formatUpdatedAt(iso: string) {
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) return ''
    return new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'short' }).format(date)
}

const ITEMS_PER_PAGE = 12

const Projects = () => {
    const [tab, setTab] = useState<Tab>('professional')
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    const { repos, error, isLoading } = useGithubRepos({
        username: GITHUB_USERNAME,
        token: GITHUB_TOKEN,
    })

    const allRepos = useMemo(() => {
        const list = repos ?? []
        return [...list].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    }, [repos])

    const displayedRepos = useMemo(
        () => allRepos.slice(0, visibleCount),
        [allRepos, visibleCount]
    )

    const hasMore = visibleCount < allRepos.length

    return (
        <section id="projects" className="scroll-mt-16 border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 md:py-20">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mb-10">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E20D34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E20D34]">
                        Portfólio &amp; Capacitação
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                        Featured Projects &amp; <span className="text-[#E20D34]">Certificações</span>
                    </h2>
                    <p className="mt-2 text-base text-[#64748B]">
                        Projetos profissionais em produção, repositórios no GitHub e histórico de cursos e certificações concluídos.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="mb-8 flex flex-wrap gap-2 rounded-xl border border-[#E2E8F0] bg-white p-1.5 shadow-xs">
                    <button
                        onClick={() => setTab('professional')}
                        className={`rounded-lg px-4 py-2 font-heading text-xs font-bold transition-all ${
                            tab === 'professional'
                                ? 'bg-[#E20D34] text-white shadow-xs'
                                : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                        }`}
                    >
                        💼 Professional Projects ({professionalProjects.length})
                    </button>
                    <button
                        onClick={() => setTab('github')}
                        className={`rounded-lg px-4 py-2 font-heading text-xs font-bold transition-all ${
                            tab === 'github'
                                ? 'bg-[#E20D34] text-white shadow-xs'
                                : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                        }`}
                    >
                        🐙 GitHub Repositories
                    </button>
                    <button
                        onClick={() => setTab('courses')}
                        className={`rounded-lg px-4 py-2 font-heading text-xs font-bold transition-all ${
                            tab === 'courses'
                                ? 'bg-[#E20D34] text-white shadow-xs'
                                : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                        }`}
                    >
                        🎓 Cursos &amp; Certificações ({courses.length})
                    </button>
                </div>

                {/* 1. PROFESSIONAL PROJECTS TAB */}
                {tab === 'professional' && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {professionalProjects.map((project) => (
                            <div
                                key={project.title}
                                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-subtle transition-all duration-200 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-card"
                            >
                                <div>
                                    <div className="h-48 overflow-hidden bg-[#F1F5F9]">
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            loading="lazy"
                                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-5">
                                        <h3 className="mb-2 font-heading text-lg font-bold text-[#0F172A]">{project.title}</h3>
                                        <p className="mb-4 line-clamp-4 text-xs leading-relaxed text-[#64748B]">{project.description}</p>

                                        <div className="mb-4 flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded bg-[#F1F5F9] px-2 py-0.5 font-code text-[11px] font-semibold text-[#334155]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-[#E2E8F0] px-5 py-3 text-xs">
                                    {project.links.demo ? (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center font-bold text-[#E20D34] hover:underline"
                                        >
                                            Live Demo
                                            <ExternalLink size={14} className="ml-1" />
                                        </a>
                                    ) : <span />}

                                    {project.links.github ? (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center font-semibold text-[#64748B] hover:text-[#0F172A]"
                                        >
                                            Code
                                            <Github size={14} className="ml-1" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. GITHUB REPOSITORIES TAB */}
                {tab === 'github' && (
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-xs text-[#64748B]">
                                {isLoading
                                    ? 'Loading repositories…'
                                    : `Showing ${displayedRepos.length} of ${allRepos.length} repositories`}
                            </p>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-[#E20D34] hover:underline"
                            >
                                View GitHub profile
                                <ExternalLink size={14} />
                            </a>
                        </div>

                        {error ? (
                            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
                                {error}
                            </div>
                        ) : null}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {isLoading
                                ? Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={`skeleton-${index}`}
                                        className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-subtle"
                                    >
                                        <div className="h-44 animate-pulse bg-[#F1F5F9]" />
                                        <div className="space-y-3 p-5">
                                            <div className="h-4 w-2/3 animate-pulse rounded bg-[#F1F5F9]" />
                                            <div className="h-3 w-full animate-pulse rounded bg-[#F1F5F9]" />
                                            <div className="h-3 w-5/6 animate-pulse rounded bg-[#F1F5F9]" />
                                        </div>
                                    </div>
                                ))
                                : displayedRepos.map((repo) => (
                                    <div
                                        key={repo.full_name}
                                        className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-subtle transition-all duration-200 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-card"
                                    >
                                        <div>
                                            <div className="relative h-44 overflow-hidden bg-[#F1F5F9]">
                                                <img
                                                    src={getGithubRepoOgImage(repo.full_name)}
                                                    alt={repo.name}
                                                    loading="lazy"
                                                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="p-5">
                                                <div className="mb-2 flex items-center justify-between gap-3">
                                                    <h3 className="truncate font-heading text-base font-bold text-[#0F172A]">{repo.name}</h3>
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-xs font-semibold text-[#64748B]">
                                                        <Star size={12} className="text-amber-500" />
                                                        {repo.stargazers_count}
                                                    </span>
                                                </div>

                                                <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-[#64748B]">
                                                    {repo.description || 'No description yet.'}
                                                </p>

                                                <div className="mb-2 flex flex-wrap gap-1.5">
                                                    {repo.language ? (
                                                        <span className="rounded bg-[#00B4C5]/10 px-2 py-0.5 font-code text-[11px] font-semibold text-[#0093A2]">
                                                            {repo.language}
                                                        </span>
                                                    ) : null}
                                                    <span className="rounded bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-semibold text-[#64748B]">
                                                        Updated {formatUpdatedAt(repo.updated_at)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between border-t border-[#E2E8F0] px-5 py-3 text-xs">
                                            {repo.homepage ? (
                                                <a
                                                    href={repo.homepage}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center font-bold text-[#E20D34] hover:underline"
                                                >
                                                    Live
                                                    <ExternalLink size={14} className="ml-1" />
                                                </a>
                                            ) : <span />}

                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center font-semibold text-[#64748B] hover:text-[#0F172A]"
                                            >
                                                Code
                                                <Github size={14} className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {!isLoading && !error && hasMore ? (
                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={() => setVisibleCount((n) => n + ITEMS_PER_PAGE)}
                                    className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-6 py-2.5 font-heading text-xs font-bold text-[#0F172A] shadow-xs transition hover:bg-[#F1F5F9]"
                                >
                                    Show more
                                </button>
                            </div>
                        ) : null}
                    </div>
                )}

                {/* 3. COURSES & CERTIFICATIONS TAB */}
                {tab === 'courses' && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-subtle transition-all duration-200 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-card"
                            >
                                <div>
                                    <div className="mb-3">
                                        <span className="rounded bg-[#00B4C5]/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0093A2]">
                                            {course.category}
                                        </span>
                                    </div>
                                    <h4 className="mb-2 font-heading text-sm font-bold leading-snug text-[#0F172A]">
                                        {course.title}
                                    </h4>
                                    {course.credentialCode && (
                                        <div className="mb-4 text-xs text-[#64748B]">
                                            Credencial: <code className="rounded bg-[#F1F5F9] px-1 py-0.5 font-code text-[#0F172A]">{course.credentialCode}</code>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-3 text-xs">
                                    <span className="font-semibold text-[#64748B]">
                                        {course.platform}
                                    </span>
                                    <a
                                        href={course.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-[#E20D34] hover:underline"
                                    >
                                        Exibir Credencial →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects