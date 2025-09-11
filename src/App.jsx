import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-4 text-center">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
