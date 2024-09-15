import Image from 'next/image'

export function Presentation() {
    return (
        <section id="presentation-section" className="flex h-[85vh] items-center justify-between gap-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 font-bold">
                    <span id="presentation-span" className="text-xl font-bold text-indigo-500">Hi, my name is</span>
                    <h1 id="presentation-name"
                        className="relative mb-3 w-max text-6xl before:absolute before:bottom-1 before:left-[-4px] before:z-[-1] before:h-3 before:w-full before:-skew-x-[34deg] before:bg-gradient-to-r before:from-indigo-600 before:to-purple-800">
                        Lucas Debeterco.
                    </h1>
                    <h2 className="text-3xl" id="presentation-title">
                        A <strong
                            className="bg-gradient-to-r from-indigo-500 to-purple-700 bg-clip-text text-4xl font-extrabold text-transparent">
                            Front-end developer
                        </strong> creating web solutions for modern challanges.
                    </h2>
                </div>
                
                <span id="presentation-subtitle" className="max-w-[60%] text-zinc-400">
                    I’m a front-end software engineer specialized in building accessible products using the <span className="font-bold">Javascript ecosystem</span> with React, Next.js and Tailwind.
                </span>

                <div className="flex gap-4">
                    <Image
                        id="about-section-img"
                        src="/about/tools/typescript.svg"
                        alt="Typescript"
                        title="Typescript"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/javascript.svg"
                        alt="Javascript"
                        title="Javascript"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/next.svg"
                        alt="Next"
                        title="Next"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/react.svg"
                        alt="React"
                        title="React"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/react-query.svg"
                        alt="React Query"
                        title="React Query"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/tailwind.svg"
                        alt="Tailwind"
                        title="Tailwind"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                    <Image
                        id="about-section-img"
                        src="/about/tools/storybook.svg"
                        alt="Storybook"
                        title="Storybook"
                        width={30}
                        height={30}
                        quality={100}
                        className="max-h-[30px]"
                        draggable={false}
                    />
                </div>
            </div>
            <div id="about-section-img" className="rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 p-1">
                <Image
                    src="/about/profile-photo.png"
                    alt="Profile Photo"
                    title="Profile Photo"
                    width={490}
                    height={490}
                    quality={100}
                    className="max-w-[490px] rounded-full"
                    draggable={false}
                />
            </div>
        </section>
    )
}