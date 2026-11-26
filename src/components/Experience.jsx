import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "../data";

function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="experience" index="02" title="Experience">
      <div className="border-t border-line">
        {experience.map((e, i) => {
          const isOpen = open === i;
          return (
            <div key={e.period} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                aria-expanded={isOpen}
              >
                <span>
                  <span className={`block text-xl sm:text-2xl font-serif ${isOpen ? "text-accent" : ""}`}>{e.title}</span>
                  <span className="block text-sm text-muted mt-0.5">{e.org}</span>
                </span>
                <span className="text-sm text-muted whitespace-nowrap">
                  {e.period} <span className="ml-2">{isOpen ? "−" : "+"}</span>
                </span>
              </button>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pb-6 space-y-3 max-w-2xl"
                >
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted leading-relaxed">
                      <span className="mt-2.5 w-3 h-px bg-accent shrink-0" />
                      {p}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Experience;
