import React from 'react'

const Detail = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
        <section
          id="home"
          className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full max-w-7xl"
        >
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-white">Hello, It's Me</h2>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 uppercase text-white">Manjeet Singh</h1>
            <h3 className="text-2xl md:text-3xl mt-1 font-medium text-white">
              And I'm a <span className="text-cyan-400">MERN Stack Developer</span>
            </h3>
            <p className="max-w-md mt-4 text-gray-300 capitalize mx-auto lg:mx-0">
              Building Full-Stack Solutions with MERN Precision
            </p>
      
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <a
                href="https://github.com/Manjeet300108"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-cyan-400 hover:bg-gray-700 transition"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/itsmanu3001/"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-cyan-400 hover:bg-gray-700 transition"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
      
            {/* Resume Button */}
            <a
              href="/Manjeet singh.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:shadow-cyan-500/50 transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
      
          {/* Image Section */}
          <div className="w-full max-w-sm">
            <div className="bg-cyan-400 rounded-3xl p-2 shadow-lg">
              <img
                src="/img/Manu.jpeg"
                alt="Manjeet Singh"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      
    )
}

export default Detail