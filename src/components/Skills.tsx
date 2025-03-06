import { skills } from "../data/skills.tsx"

const Skills = () => {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>

        <ul className="[&>li]: grid gap-3 text-sm md:grid-cols-4 [&>li>span]:text-indigo-200 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:whitespace-nowrap [&>li]:rounded-md [&>li]:bg-white [&>li]:dark:bg-slate-800 [&>li]:p-3">
          {skills.map(item => (
            <li>
              <div className="rounded-md bg-indigo-600 p-2">
                {item.icon}
              </div>
              {item.skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;