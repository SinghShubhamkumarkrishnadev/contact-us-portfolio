import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Dekho with Shubham",
    description: "A full-stack movie app with backend powered by Spring Boot microservices, featuring search, pagination, filtering, and secure API documentation through Swagger.",
    img: "movieDekho.png", 
    demo: "https://movie-dekho-with-shubham.vercel.app/",
    github: "https://github.com/SinghShubhamkumarkrishnadev/MovieDekho-With-Shubham", 
  },
  {
    title: "Student Attendance System",
    description: "Mobile apps for professors and students to manage and query attendance with AI support, along with a website for HODs to oversee classes and track attendance.",
    img: "sattapp.png", 
    demo: "https://sattapp.netlify.app",
    github: "https://github.com/SinghShubhamkumarkrishnadev/Student-attendance-client", 
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, Tailwind CSS, and Vite to showcase projects and skills with smooth animations and responsive design. It highlights professional experience, achievements, and provides easy ways to connect.",
    img: "portfolio.png",
    demo: "#", 
    github: "#", 
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      <div className="max-w-3xl sm:max-w-4xl lg:max-w-6xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Here are some of the projects I have worked on recently.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 sm:p-5 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm sm:text-base transition w-full sm:w-auto text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-400 hover:border-blue-400 rounded-lg text-sm sm:text-base transition w-full sm:w-auto text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
