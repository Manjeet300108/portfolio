import React from 'react'

const achive = () => {
    const projectData = [
        {
          title: "Rock-Paper-Scissors",
          description: "A Rock-paper-scissors Game",
          image: "projects_img/Rock-Paper-Scissors.png",
          link: "https://github.com/Manjeet300108/Rock-Paper-Scissors",
          technologies : "Html,Css,javascript"
        },
        {
          title: "Tic-Toc-Toe",
          description: "Tic-Toc-Toe fully functional",
          image: "projects_img/Tic-Toc-Toe.png",
          link: "https://github.com/Manjeet300108/Tic-Toc-Toe",
          technologies : "Html,Css,javascript"
        },
        {
          title: "Weather App",
          description: "weather app using weather api",
          image: "projects_img/weather.png",
          link: "https://github.com/Manjeet300108/Weather-App",
          technologies : "Html,Css,javascript"
        },
        {
          title: "Pinterest clone Using Node,Express and Mongo",
          description: "Pinterest clone",
          image: "projects_img/pinterest.png",
          link: "https://github.com/Manjeet300108/pinterest_clone",
          technologies : "javascript,Node,Express and Mongo"
        },
        {
          title: "RealTime Tracking App",
          description: "I made a real time tracking app",
          image: "projects_img/live tracker.png",
          link: "https://github.com/Manjeet300108/track-app",
          technologies : "Node,Express,socket.io"
        },
        {
          title: "Random Password Generator",
          description: "It make random passwords",
          image: "projects_img/password.png",
          link: "https://github.com/Manjeet300108/Random-Password-Generator",
          technologies : "Html,Css,javascript"
        }
      ];
      
  return (
    <div>
        <section id="projects" className="px-8 py-20">
  <h2 className="text-3xl font-bold text-center mb-12">
    My <span className="text-cyan-400">Projects</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {projectData.map((project, idx) => (
      <div key={idx} className="bg-[#0f172a] border border-cyan-400/20 rounded-xl shadow-md overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-fit" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300 mt-2 tracking-tight">{project.description}</p>
          <p className="text-gray-300 mt-2 capitalize">{project.technologies}</p>
          <a href={project.link} className="text-cyan-400 mt-4 inline-block hover:underline">View Project</a>
        </div>
      </div>
    ))}
  </div>
  <hr className='mt-[90px] opacity-40'/>
</section>
    </div>
  )
}

export default achive