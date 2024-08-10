export function Presentation() {
    return (
        <section id="presentation-section" className="flex h-[50vh] items-center justify-between gap-6">
            <div className="flex flex-col">
                <div className="flex flex-col gap-2 font-bold">
                    <span id="presentation-span" className="text-xl font-bold text-indigo-500">Hi, my name is</span>
                    <h1 id="presentation-name"
                        className="relative mb-3 w-max text-6xl before:absolute before:bottom-1 before:left-[-4px] before:z-[-1] before:h-3 before:w-full before:-skew-x-[34deg] before:bg-gradient-to-r before:from-indigo-600 before:to-purple-800">
                        Lucas Debeterco.
                    </h1>
                    <h2 className="text-3xl" id="presentation-title">
                        A <strong
                            className="bg-gradient-to-r from-indigo-500 to-purple-700 bg-clip-text text-4xl font-extrabold text-transparent">Front-end
                        developer</strong> creating web solutions for modern challanges.
                    </h2>
                </div>
                <span id="presentation-subtitle" className="max-w-[60%] text-zinc-400">
                    I’m a front-end software engineer specialized in building accessible products using the <span
                        className="font-bold">Javascript ecosystem</span> with React, NextJS and Tailwind.
                </span>
            </div>
            <img
                id="about-section-img"
                src="/about/profile-photo.png"
                alt="Profile Photo"
                className="h-[350px] max-w-[350px] rounded-full"
            />
        </section>
    )
}