import { motion } from "framer-motion";

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="py-16 sm:py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-12 gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <p className="eyebrow text-accent">{index}</p>
          <h2 className="text-3xl sm:text-4xl mt-2">{title}</h2>
        </motion.div>
        <div className="md:col-span-9 min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default Section;
