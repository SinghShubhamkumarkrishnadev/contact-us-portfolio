import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["about", "experience", "skills", "projects", "contact"];

function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="" className="w-7 h-7" />
          <span className="font-semibold text-[15px]">Shubham Singh</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className={`text-sm capitalize link ${active === l ? "text-accent" : "text-muted hover:text-ink"}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden p-2 text-xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-line bg-bg px-5 py-2">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)} className="block py-3 capitalize">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}

      <motion.div style={{ scaleX: progress }} className="h-px bg-accent origin-left" />
    </header>
  );
}

export default Navbar;
