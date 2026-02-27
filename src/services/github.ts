export type GithubRepo = {
    id: number
    name: string
    full_name: string
    description: string | null
    html_url: string
    homepage: string | null
    language: string | null
    stargazers_count: number
    forks_count: number
    archived: boolean
    fork: boolean
    updated_at: string
}

type FetchReposParams = {
    username: string
    token?: string
    signal?: AbortSignal
}

export async function fetchGithubRepos({ username, token, signal }: FetchReposParams): Promise<GithubRepo[]> {
    const url = new URL(`https://api.github.com/users/${username}/repos`)
    url.searchParams.set('per_page', '100')
    url.searchParams.set('sort', 'updated')

    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(url.toString(), { headers, signal })
    if (!response.ok) {
        throw new Error(`GitHub API error (${response.status})`)
    }

    const data = (await response.json()) as GithubRepo[]
    return data
}

export function getGithubRepoOgImage(fullName: string) {
    // Free and reliable OpenGraph image endpoint from GitHub
    return `https://opengraph.githubassets.com/1/${fullName}`
}

