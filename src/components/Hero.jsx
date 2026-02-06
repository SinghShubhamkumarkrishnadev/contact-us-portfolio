import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Singh ShubhamKumar Krishandev</span> 👋
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 px-2 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Passionate <span className="text-blue-400">Software Developer</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold text-sm sm:text-base transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-400 hover:border-blue-400 rounded-full font-semibold text-sm sm:text-base transition"
        >
          Contact Me
        </a>
        <a
          href="https://drive.google.com/file/d/1lVibznwb3RFQZgKhSYjukugdJnGDCgUb/view?usp=sharing"
          download
          className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-sm sm:text-base transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
