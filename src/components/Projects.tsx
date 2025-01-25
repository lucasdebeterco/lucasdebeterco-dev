import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

import { projects } from '../data/projects.ts'

const Projects = () => {
    const [filter, setFilter] = useState('all')

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter)

    return (
        <section id="projects" className="scroll-mt-16 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-3xl font-bold">
          Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
                </h2>
        
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex rounded-lg bg-slate-200 p-1 dark:bg-slate-800">
                        <button
                            onClick={() => setFilter('all')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                filter === 'all'
                                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
                                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400'
                            }`}
                        >
              All
                        </button>
                        <button
                            onClick={() => setFilter('professional')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                filter === 'professional'
                                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
                                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400'
                            }`}
                        >
              Professional projects
                        </button>

                        <button
                            onClick={() => setFilter('personal')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                filter === 'personal'
                                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
                                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400'
                            }`}
                        >
              Personal projects
                        </button>
                    </div>
                </div>
        
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index}
                            className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.images[0]}
                                    alt={project.title} 
                                    className="size-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
              
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="mb-4 text-slate-600 dark:text-slate-400">{project.description}</p>
                
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                
                                <div className="flex justify-between">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                                        >
                      Live Demo
                                            <ExternalLink size={16} className="ml-1" />
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                                        >
                      Code
                                            <Github size={16} className="ml-1" />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects