import { motion } from 'framer-motion';
import React from 'react'

const Skills = () => {
    const skillData = [
        { name: "MongoDB", logo: "/logos/mongo.png" },
        { name: "express", logo: "/logos/express.png" },
        { name: "ReactJS", logo: "/logos/react.png" },
        { name: "Node.js", logo: "/logos/nodejs.png" },
        { name: "HTML5", logo: "/logos/html-5.png" },
        { name: "CSS3", logo: "/logos/css3.png" },
        { name: "JavaScript", logo: "/logos/js.png" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
        { name: "Bootstraps", logo: "/logos/bootstrap.png" },
        { name: "Php", logo: "/logos/php.png" },
        { name: "Git & GitHub", logo: "/logos/git.png" },
    ];
    return (
        <section id="skills" className="px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-[5rem]">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 mx-auto mb-3"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <p className='mt-3 text-center text-lg font-semibold'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
        <hr className='mt-[90px] opacity-40'/>
      </section>
      
    )
}

export default Skills