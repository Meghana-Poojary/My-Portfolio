import Navbar from './components/Navbar'
import { WordRotate } from './components/ui/word-rotate.jsx'
import { WarpBackground } from './components/ui/warp-background.jsx'
import AnimatedProfilePicture from './components/AnimatedProfilePicture';
import { IconCloud } from "@/components/ui/icon-cloud"
import Timeline from './components/Timeline';
import { DotPattern } from './components/ui/dot-pattern.jsx';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

const slugs = [
  "javascript",
  "react",
  "flutter",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "postgresql",
  "firebase",
  "mongodb",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
  "python",
  "numpy",
  "pandas",
  "tensorflow",
  "keras",
  "huggingface",
  "openai",
  "scikitlearn",
]
const skills = [
  {name: "JavaScript", icon: "javascript"},
  {name: "HTML", icon: "html5"},
  {name: "CSS", icon: "css"},  {name: "Tailwind CSS", icon: "tailwindcss"},
  {name: "Python", icon: "python"},
  {name: "TensorFlow", icon: "tensorflow"},
  {name: "Scikit-Learn", icon: "scikitlearn"},
  {name: "Keras", icon: "keras"},
  {name: "Pandas", icon: "pandas"},
  {name: "NumPy", icon: "numpy"},
  {name: "React.js", icon: "react"},
  {name: "Express.js", icon: "express"},
  {name: "Node.js", icon: "nodedotjs"},
  {name: "PostgreSQL", icon: "postgresql"},
  {name: "MongoDB", icon: "mongodb"},
  {name: "Flask", icon: "flask"},
  {name: "Git", icon: "git"},
  {name: "GitHub", icon: "github"},
  {name: "Vercel", icon: "vercel"},
  {name: "Figma", icon: "figma"},
]


const projects = [
  {
    id: 1,
    title: "SpeedMinds",
    description: "A full-stack web application designed to help users quickly and efficiently process large documents.",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "Express.js", "Gemini"],
    website: "https://speedminds-frontend.onrender.com",
    github: "https://github.com/Meghana-Poojary/SpeedMinds",
  },
  {
    id: 2,
    title: "Conversational BI",
    description: "Business Intelligence chatbot which answers questions based on the dataset and also generates charts",
    image: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Pythom", "Streamlit", "Gemini"],
    website: "https://conversational-bi-n8hnwpxciyxjsc5mpyvwbx.streamlit.app",
    github: "https://github.com/Meghana-Poojary/Conversational-BI",
  },
  {
    id: 3,
    title: "Feedback Catalyst",
    description: "A web application that helps you turn raw feedback data into meaningful insights through automated analysis and visualization.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Gemini", "Flask"],
    website: "https://feedback-catalyst.vercel.app",
    github: "https://github.com/Meghana-Poojary/Feedback-Catalyst",
  },
  {
    id: 4,
    title: "Shortly - URL Shortener",
    description: "A website that shortens URLs with built-in analytics to track visit counts, visitor IP addresses, and access timestamps for each link.",
    image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React,js", "Node.js", "Express.js", "PostgreSQL],
    website: "https://urlshortener-1-ne4n.onrender.com",
    github: "https://github.com/Meghana-Poojary/URLShortener",
  },
  {
    id: 5,
    title: "MediTrack",
    description: "A web-based application designed to enhance medical coherence by helping users manage and track medical records, prescriptions, and patient interactions in one unified platform.",
    image: "https://plus.unsplash.com/premium_vector-1714142562333-6f0b45c67248?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/Meghana-Poojary/MediTrack",
  },  
  {
    id: 6,
    title: "SchedEase",
    description: "A website for managing event registrations.",
    image: "https://plus.unsplash.com/premium_photo-1661394880478-532dfbeaa421?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Amazon AWS", "React.js"],
    github: "https://github.com/Meghana-Poojary/SchedEase",
  },
]



export default function App() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  const myPhotoUrl = 'https://avatars.githubusercontent.com/u/105907336?v=4'; // Replace with your actual photo URL
  
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-indigo-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <DotPattern />
      <WarpBackground>
        <main className="flex-1 max-w-4xl mx-auto px-4 text-center flex flex-col justify-center pt-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <AnimatedProfilePicture imageUrl={myPhotoUrl} />
          <div className='my-4'><p className="text-lg"><strong className='text-5xl font-extrabold'>Meghana Poojary</strong></p></div>
          <div className="mb-6"><WordRotate words={["Full Stack Web Developer", "AI/ML Engineer", "Software Engineer"]} /></div>
          {/* <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">This is a sample page with a dark/light toggle in the navbar. Click the button in the top-right to switch themes.</p> */}
        </main>
      </WarpBackground>
      <section id="summary" className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-gradient-to-tr from-white/80 via-indigo-50/60 to-indigo-100/40 dark:from-indigo-900/60 dark:via-indigo-950/60 dark:to-blue-950/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl transform transition-all hover:scale-[1.01]">
          {/* Text column */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Hi, I'm Meghana Poojary.</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about crafting impactful web experiences and exploring the possibilities of machine learning and AI. Excited to collaborate, learn from real-world challenges, and grow alongside inspiring people in the tech space.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-200 text-sm">Currently pursuing B.E. in Computer</span>
            </div>
          </div>

          {/* Icon cloud column */}
          <div className="w-full md:w-56 lg:w-64 flex justify-center">
            <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <IconCloud images={images} size={320} />
            </div>
          </div>
        </div>
      </section>

      <div>
        <section id="projects" className="max-w-7xl mx-auto mt-20 px-4 mb-12 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group"
              >
                <div className="h-full bg-white dark:bg-indigo-900/40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-white from-blue-200 to-indigo-100 dark:from-indigo-800 dark:to-white-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800/50 dark:text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-3 mt-auto">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800/50 dark:hover:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 rounded-lg transition-all duration-200"
                        title="View Website"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-sm font-medium">View</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 text-gray-800 dark:text-gray-200 rounded-lg transition-all duration-200"
                        title="GitHub Repository"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.903-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" />
                        </svg>
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div>
        <section id="skills" className="max-w-6xl mx-auto my-16 px-4 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

          <style>{`
            @keyframes skill-float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              25% { transform: translateY(-12px) rotate(2deg); }
              50% { transform: translateY(-8px) rotate(-2deg); }
              75% { transform: translateY(-14px) rotate(1deg); }
            }
            @keyframes skill-glow {
              0%, 100% { box-shadow: 0 0 15px rgba(99,102,241,0.2); }
              50% { box-shadow: 0 0 30px rgba(99,102,241,0.4), 0 0 60px rgba(99,102,241,0.1); }
            }
            .skill-icon {
              animation: skill-float 5s ease-in-out infinite;
              will-change: transform;
            }
            .skill-icon:hover {
              animation: skill-glow 1.5s ease-in-out infinite;
            }
            .skill-tooltip {
              opacity: 0;
              visibility: hidden;
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%) translateY(-8px);
              background: rgba(99,102,241, 0.9);
              color: white;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: 500;
              white-space: nowrap;
              transition: all 0.2s ease;
              z-index: 10;
              pointer-events: none;
            }
            .skill-wrapper:hover .skill-tooltip {
              opacity: 1;
              visibility: visible;
              transform: translateX(-50%) translateY(-12px);
            }
            .dark .skill-tooltip {
              background: rgba(79,70,229, 0.95);
            }
          `}</style>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            {skills.map((skill, idx) => {
              const src = `https://cdn.simpleicons.org/${skill.icon}/${skill.icon}`
              const delay = (idx % 6) * 100
              return (
                <div key={skill.name} className="skill-wrapper flex flex-col items-center relative group">
                  <div
                    className="skill-icon w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-100 to-sky-50 dark:from-blue-800/40 dark:to-blue-900/40 flex items-center justify-center p-3 border-2 border-blue-100 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg group-hover:shadow-xl"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <img
                      src={src}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.style.opacity = 0.5 }}
                    />
                  </div>
                  <div className="skill-tooltip">
                    {skill.name}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <div>
        <section id='experience' className='scroll-mt-24'>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Experiences</h2>
          <Timeline />
        </section>
      </div>
          <Contact />
      <div>
        <SocialLinks />        
        <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Meghana Poojary. All rights reserved.
        </footer> 
      </div>
    </div>
  )
}
