import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'background': '#0a192f',
                'text-base': '#d0cdd6'
            },
            boxShadow: {
                overlay: '0 10px 30px -10px rgb(2 12 27 / 70%)'
            }
        },
    },
    plugins: [],
}
export default config
