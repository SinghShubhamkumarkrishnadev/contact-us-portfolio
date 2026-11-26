import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { pipeline, projects } from "../data";

function Pipeline() {
  const [i, setI] = useState(0);
  const main = projects[0];

  return (
    <div className="mb-12 pb-12 border-b border-line">
      <p className="eyebrow text-accent mb-3">Featured · {main.period}</p>
      <h3 className="text-3xl sm:text-4xl">{main.title}</h3>
      <p className="mt-4 text-muted leading-relaxed max-w-2xl">
        Manual review of long documents was slow and inconsistent. I built a modular 7-step AI pipeline with role-based
        access through Microsoft Entra ID, cutting review turnaround by 75%. Switching to uv made dependency resolution
        3x faster.
      </p>

      <p className="mt-8 text-sm text-muted">Select a stage:</p>
      <ol className="mt-3 flex flex-wrap gap-2">
        {pipeline.map((s, k) => (
          <li key={s.name}>
            <button
              onClick={() => setI(k)}
              className={`px-3 py-1.5 text-sm border transition-colors ${
                i === k ? "bg-ink text-bg border-ink" : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {k + 1}. {s.name}
            </button>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="mt-4 text-ink bg-panel px-4 py-3 text-sm"
        >
          <b>{pipeline[i].name}.</b> {pipeline[i].desc}
        </motion.p>
      </AnimatePresence>

      <p className="mt-5 text-sm text-muted">{main.tags.join(" · ")}</p>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const list = projects.slice(1).filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" index="04" title="Projects">
      <Pipeline />

      <div className="flex gap-5 mb-2 text-sm">
        {["All", "AI", "Mobile"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`pb-1 border-b ${
              filter === f ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="border-t border-line">
        <AnimatePresence initial={false}>
          {list.map((p, k) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group grid sm:grid-cols-12 gap-3 sm:gap-6 py-6 border-b border-line"
            >
              <span className="sm:col-span-1 text-sm text-muted">{String(k + 1).padStart(2, "0")}</span>
              <div className="sm:col-span-7">
                <h3 className="text-2xl group-hover:text-accent transition-colors">{p.title}</h3>
                {p.period && <p className="text-xs text-muted mt-1">{p.period}</p>}
                <p className="mt-3 text-muted leading-relaxed text-[15px]">{p.desc}</p>
              </div>
              <div className="sm:col-span-4 flex flex-wrap content-start gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-panel text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

export default Projects;
