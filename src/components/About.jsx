import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-10 md:grid-cols-2 items-center">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="sk.png"
            alt="Profile"
            className="rounded-2xl shadow-lg w-48 sm:w-64 md:w-72 lg:w-80"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
            About Me
          </h2>
          <div className="mb-8 px-4 sm:px-0">
            <p className="text-center text-base sm:text-lg mb-4">
              🚀 <strong>Backend Developer | Java Enthusiast | Spring Boot | Microservices | DevOps Learner</strong>
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-6 text-center md:text-left max-w-xl mx-auto md:mx-0">
              Hi, I'm <span className="font-semibold">Singh ShubhamKumar Krishnadev</span>, a passionate software developer who loves creating modern and user-friendly websites and mobile applications. I enjoy solving problems, building cool projects, and learning new technologies every day.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center md:text-left">Tech Stack</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            {/* Frontend */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-50 rounded-lg shadow">⚛️ React</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-yellow-50 rounded-lg shadow">🎨 Tailwind CSS</span>

            {/* Backend */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-stone-50 rounded-lg shadow">☕ Java</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-zinc-50 rounded-lg shadow">🌱 Spring Boot</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-neutral-50 rounded-lg shadow">🔐 Spring Security</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-100 rounded-lg shadow">☁️ Spring Cloud</span>

            {/* Microservices */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-stone-100 rounded-lg shadow">🛰️ REST APIs</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-yellow-100 rounded-lg shadow">🔄 Microservices</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-50 rounded-lg shadow">📡 Eureka / API Gateway</span>

            {/* Databases */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-stone-50 rounded-lg shadow">🗄️ MySQL</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-100 rounded-lg shadow">🐘 PostgreSQL</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-yellow-50 rounded-lg shadow">🍃 MongoDB</span>

            {/* DevOps */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-zinc-50 rounded-lg shadow">🐳 Docker</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-stone-100 rounded-lg shadow">☸️ Kubernetes (Learning)</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-50 rounded-lg shadow">⚙️ Jenkins (Learning)</span>

            {/* Tools */}
            <span className="px-3 py-2 text-xs sm:text-sm bg-yellow-100 rounded-lg shadow">🔧 Maven / Gradle</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-stone-50 rounded-lg shadow">🧪 JUnit / Mockito</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-amber-100 rounded-lg shadow">📝 Swagger / Postman</span>
            <span className="px-3 py-2 text-xs sm:text-sm bg-neutral-50 rounded-lg shadow">🐙 Git & GitHub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
