export function Presentation() {
    return (
        <section className="flex h-[80vh] flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 font-bold">
                <span className="text-xl font-bold text-indigo-500">Hi, my name is</span>
                <h1 className="relative mb-3 w-max text-6xl before:absolute before:bottom-1 before:left-[-4px] before:z-[-1] before:h-3 before:w-full before:-skew-x-[34deg] before:bg-gradient-to-r before:from-indigo-600 before:to-purple-800">
                    Lucas Debeterco.
                </h1>
                <h2 className="max-w-[65%] text-3xl">
                    A <strong
                        className="bg-gradient-to-r from-indigo-500 to-purple-700 bg-clip-text text-4xl font-extrabold text-transparent">Front-end
                    developer</strong> creating web solutions for modern challanges.
                </h2>
            </div>
            <span className="max-w-[60%] text-zinc-400">
                I’m a front-end software engineer specialized in building quality digital experiences.
                Currently, I’m focused on building accessible products using the <span className="font-bold">Javascript ecosystem</span>
            </span>
        </section>
    )
}