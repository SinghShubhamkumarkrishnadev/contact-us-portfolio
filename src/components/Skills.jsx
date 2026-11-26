import Section from "./Section";
import { skills } from "../data";

function Skills() {
  return (
    <Section id="skills" index="03" title="Tech Stack">
      <div className="border-t border-line">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="grid sm:grid-cols-4 gap-2 sm:gap-6 py-4 border-b border-line">
            <h3 className="text-sm text-muted font-sans">{group}</h3>
            <p className="sm:col-span-3 leading-relaxed">
              {items.map((s, i) => (
                <span key={s}>
                  <span className="hover:text-accent transition-colors cursor-default">{s}</span>
                  {i < items.length - 1 && <span className="text-line mx-2">/</span>}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
