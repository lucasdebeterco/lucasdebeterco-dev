'use client'

import Link from 'next/link'

import { scrollSmoothTo } from '@/app/utils/scrollSmoothTo'

interface HeaderLinkProps {
    sectionId: string
    children: React.ReactNode
}

export function HeaderLink({ sectionId, children }: HeaderLinkProps) {
    return (
        <Link
            href="#"
            className="transition hover:text-purple-600"
            onClick={(e) => scrollSmoothTo(e, sectionId)}
        >
            {children}
        </Link>
    )
}