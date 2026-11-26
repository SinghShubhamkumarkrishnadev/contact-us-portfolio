import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "../data";

function useTyping(lines) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, j = 0, deleting = false, t;
    const tick = () => {
      const line = lines[i];
      setText(line.slice(0, j));
      if (!deleting && j === line.length) {
        deleting = true;
        t = setTimeout(tick, 1600);
        return;
      }
      if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % lines.length;
      }
      j += deleting ? -1 : 1;
      t = setTimeout(tick, deleting ? 25 : 55);
    };
    tick();
    return () => clearTimeout(t);
  }, [lines]);
  return text;
}

function Hero() {
  const typed = useTyping(profile.taglines);

  return (
    <section id="top" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="max-w-6xl w-full mx-auto px-5 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 order-2 md:order-1"
        >
          <p className="eyebrow text-muted mb-6">Software Development Engineer · Surat, India</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[0.98]">
            Shubham
            <br />
            Kumar <span className="italic text-accent">Singh</span>
          </h1>
          <p className="mt-7 text-lg text-ink h-7 cursor">{typed}</p>
          <p className="mt-5 text-muted max-w-lg leading-relaxed">
            I turn slow, manual workflows into fast, reliable software: FastAPI backends, React and Next.js frontends,
            and LLM-driven document pipelines on AWS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#projects" className="px-6 py-3 bg-ink text-bg text-sm font-medium hover:bg-accent transition-colors">
              See my work
            </a>
            <a href="#contact" className="text-sm font-medium link">
              Get in touch
            </a>
            <div className="flex gap-4 text-xl text-muted">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink"><FaGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink"><FaLinkedin /></a>
              <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="hover:text-ink"><FaMedium /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink"><FiMail /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-5 order-1 md:order-2 w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none"
        >
          <div className="bg-panel aspect-[4/5] overflow-hidden">
            <img
              src="/profile.png"
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.src = profile.avatar;
              }}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="mt-3 text-xs text-muted flex justify-between">
            <span>Shubham Kumar Singh</span>
            <span>4+ years building software</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
