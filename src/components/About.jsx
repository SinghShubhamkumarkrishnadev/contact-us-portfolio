import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Section from "./Section";
import { stats, facts } from "../data";

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.4, onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function About() {
  return (
    <Section id="about" index="01" title="About">
      <p className="font-serif text-2xl sm:text-3xl leading-snug">
        Software Development Engineer with 4+ years across freelancing, internship and full-time product work. I build
        FastAPI backends, React / Next.js frontends and LLM-driven document pipelines, and ship them on AWS.
      </p>

      <dl className="mt-10 border-t border-line">
        {facts.map(([k, v]) => (
          <div key={k} className="grid sm:grid-cols-4 gap-1 sm:gap-6 py-3.5 border-b border-line text-sm">
            <dt className="text-muted">{k}</dt>
            <dd className="sm:col-span-3">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl">
              <Counter {...s} />
            </div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;
