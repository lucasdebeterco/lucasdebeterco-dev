import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { fetchGithubRepos, type GithubRepo } from '../services/github'

const CACHE_TTL_MS = 1000 * 60 * 60 * 6 // 6h

type CacheShape = {
    fetchedAt: number
    repos: GithubRepo[]
}

function getCacheKey(username: string) {
    return `github_repos_cache_v1:${username}`
}

function readCache(username: string): CacheShape | null {
    try {
        const raw = localStorage.getItem(getCacheKey(username))
        if (!raw) return null
        const parsed = JSON.parse(raw) as CacheShape
        if (!parsed?.fetchedAt || !Array.isArray(parsed?.repos)) return null
        return parsed
    } catch {
        return null
    }
}

function writeCache(username: string, payload: CacheShape) {
    try {
        localStorage.setItem(getCacheKey(username), JSON.stringify(payload))
    } catch {
        // ignore storage failures
    }
}

type UseGithubReposParams = {
    username: string
    token?: string
}

export function useGithubRepos({ username, token }: UseGithubReposParams) {
    const [repos, setRepos] = useState<GithubRepo[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const effectiveUsername = useMemo(() => username.trim(), [username])
    const controllerRef = useRef<AbortController | null>(null)

    const refetch = useCallback(async () => {
        if (!effectiveUsername) return

        controllerRef.current?.abort()
        const controller = new AbortController()
        controllerRef.current = controller

        setIsLoading(true)
        setError(null)

        try {
            const data = await fetchGithubRepos({
                username: effectiveUsername,
                token,
                signal: controller.signal,
            })
            const filtered = data.filter((r) => !r.fork && !r.archived)
            setRepos(filtered)
            writeCache(effectiveUsername, { fetchedAt: Date.now(), repos: filtered })
        } catch (e) {
            if (controller.signal.aborted) return
            setError(e instanceof Error ? e.message : 'Failed to load repositories')
        } finally {
            if (!controller.signal.aborted) setIsLoading(false)
        }
    }, [effectiveUsername, token])

    useEffect(() => {
        if (!effectiveUsername) return

        const cached = readCache(effectiveUsername)
        if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
            setRepos(cached.repos)
            return
        }

        void refetch()

        return () => {
            controllerRef.current?.abort()
        }
    }, [effectiveUsername, refetch])

    return { repos, error, isLoading, refetch }
}

