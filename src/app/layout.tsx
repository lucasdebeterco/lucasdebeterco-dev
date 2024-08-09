import './globals.css'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

const fira_code = Fira_Code({
    subsets: ['latin']
})
export const metadata: Metadata = { 
    title: 'Lucas Debeterco',
    description: 'My personal website portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fira_code.className}>{children}</body>
        </html>
    )
}
