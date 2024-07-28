export function Presentation() {
    return (
        <section className="flex h-[80vh] flex-col justify-center gap-6">
            <span className="text-indigo-600">Hi, my name is</span>
            <div className="flex flex-col gap-2 font-bold">
                <h1 className="bg-gradient-to-r  from-indigo-500 to-pink-600 bg-clip-text text-6xl">
                    Lucas Debeterco.
                </h1>
                <h2 className="max-w-[60%] text-3xl">
                    A
                    <strong  className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent">Front-end
                        developer
                    </strong>
                    passionate about creating web solutions for modern challanges.
                </h2>
            </div>
            <span className="max-w-[60%] text-zinc-400">
                I’m a front-end software engineer specialized in building quality digital experiences.
                Currently, I’m focused on building accessible products using the <span className="font-bold">Javascript ecosystem</span>
            </span>
        </section>
    )
}