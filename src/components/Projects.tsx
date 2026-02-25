import { ExternalLink, Github, RefreshCcw, Search, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { professionalProjects } from '../data/professionalProjects'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { getGithubRepoOgImage } from '../services/github'

type Tab = 'professional' | 'github'
type Sort = 'updated' | 'stars'

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
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState<Sort>('updated')
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    const { repos, error, isLoading, refetch } = useGithubRepos({
        username: GITHUB_USERNAME,
        token: GITHUB_TOKEN,
    })

    const filteredRepos = useMemo(() => {
        const list = repos ?? []
        const q = query.trim().toLowerCase()

        const byQuery = !q
            ? list
            : list.filter((r) => {
                const hay = `${r.name} ${r.description ?? ''} ${r.language ?? ''}`.toLowerCase()
                return hay.includes(q)
            })

        return [...byQuery].sort((a, b) => {
            if (sort === 'stars') return b.stargazers_count - a.stargazers_count
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        })
    }, [query, repos, sort])

    const displayedRepos = useMemo(
        () => filteredRepos.slice(0, visibleCount),
        [filteredRepos, visibleCount]
    )

    const hasMore = visibleCount < filteredRepos.length

    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE)
    }, [query, sort])

    return (
        <section id="projects" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                        Curated professional work + GitHub repositories with automatic summaries.
                    </p>
                </div>

                <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="inline-flex rounded-xl bg-slate-200/70 p-1 backdrop-blur dark:bg-slate-800/60">
                        <button
                            onClick={() => setTab('professional')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                tab === 'professional'
                                    ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-900 dark:text-indigo-300'
                                    : 'text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-300'
                            }`}
                        >
                            Professional Projects
                        </button>
                        <button
                            onClick={() => setTab('github')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                tab === 'github'
                                    ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-900 dark:text-indigo-300'
                                    : 'text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-300'
                            }`}
                        >
                            GitHub
                        </button>
                    </div>

                    {tab === 'github' ? (
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                            <div className="relative w-full sm:w-80">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search repositories…"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-700 dark:focus:ring-indigo-400/10"
                                />
                            </div>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as Sort)}
                                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-700 dark:focus:ring-indigo-400/10"
                            >
                                <option value="updated">Most recently updated</option>
                                <option value="stars">Most stars</option>
                            </select>

                            <button
                                onClick={() => void refetch()}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                            >
                                <RefreshCcw size={16} />
                                Refresh
                            </button>
                        </div>
                    ) : null}
                </div>

                {tab === 'professional' ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {professionalProjects.map((project) => (
                            <div
                                key={project.title}
                                className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900"
                            >
                                <div className="h-48 overflow-hidden bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-fuchsia-600/10">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        loading="lazy"
                                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                                    <p className="mb-4 line-clamp-4 text-slate-600 dark:text-slate-400">{project.description}</p>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        {project.links.demo ? (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center font-medium text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200"
                                            >
                                                Live Demo
                                                <ExternalLink size={16} className="ml-1" />
                                            </a>
                                        ) : <span />}

                                        {project.links.github ? (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center font-medium text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-300"
                                            >
                                                Code
                                                <Github size={16} className="ml-1" />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {isLoading
                                    ? 'Loading repositories…'
                                    : `Showing ${displayedRepos.length} of ${filteredRepos.length} repositories`}
                            </p>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200"
                            >
                                View GitHub profile
                                <ExternalLink size={16} />
                            </a>
                        </div>

                        {error ? (
                            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
                                {error}
                            </div>
                        ) : null}

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {isLoading
                                ? Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={`skeleton-${index}`}
                                        className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm dark:border-slate-700/60 dark:bg-slate-900"
                                    >
                                        <div className="h-48 animate-pulse bg-slate-200 dark:bg-slate-800" />
                                        <div className="space-y-3 p-6">
                                            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                            <div className="h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                            <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                        </div>
                                    </div>
                                ))
                                : displayedRepos.map((repo) => (
                                    <div
                                        key={repo.full_name}
                                        className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900"
                                    >
                                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-fuchsia-600/10">
                                            <img
                                                src={getGithubRepoOgImage(repo.full_name)}
                                                alt={repo.name}
                                                loading="lazy"
                                                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-2 flex items-center justify-between gap-3">
                                                <h3 className="truncate text-xl font-bold text-slate-900 dark:text-white">{repo.name}</h3>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                                    <Star size={14} />
                                                    {repo.stargazers_count}
                                                </span>
                                            </div>

                                            <p className="mb-4 line-clamp-3 text-slate-600 dark:text-slate-400">
                                                {repo.description || 'No description yet.'}
                                            </p>

                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {repo.language ? (
                                                    <span className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                                                        {repo.language}
                                                    </span>
                                                ) : null}
                                                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                                    Updated {formatUpdatedAt(repo.updated_at)}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {repo.homepage ? (
                                                    <a
                                                        href={repo.homepage}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center font-medium text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200"
                                                    >
                                                        Live
                                                        <ExternalLink size={16} className="ml-1" />
                                                    </a>
                                                ) : <span />}

                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center font-medium text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-300"
                                                >
                                                    Code
                                                    <Github size={16} className="ml-1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {!isLoading && !error && hasMore ? (
                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={() => setVisibleCount((n) => n + ITEMS_PER_PAGE)}
                                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
                                >
                                    Show more
                                </button>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects