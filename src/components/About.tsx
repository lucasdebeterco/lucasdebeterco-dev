import { Code, Globe, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </h2>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            I am a developer with a Bachelor's degree in Information Systems and professional experience in front-end development. I have contributed to <strong>projects with milions of daily users</strong> and have <strong>developed applications from scratch</strong> to meet the needs of various consumers and retailers in the e-commerce market.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            With over <strong>7 years of professional experience in React.js, TypeScript and Next.js</strong>, I have also demonstrated strong teamwork skills, mentoring new members in my squad multiple times.
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-4">
                <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Development Philosophy</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              I believe in writing clean, maintainable code that solves real problems for users and continuously learning through online courses and technical books.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-4">
                <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Based in Rio do Sul, Santa Catarina, Brazil. Available for remote work worldwide.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-4">
                <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Current Role</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Frontend Developer at Magazord, focusing on building high quality web applications and mentoring junior developers.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-4">
                <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Computer Science from Instituto Federal Catarinense.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Bachelor's degree in Information Systems from UNIDAVI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;