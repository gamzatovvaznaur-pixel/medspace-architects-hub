import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

import irisKrd1 from "@/assets/case-iris-1.webp";
import irisMhk1 from "@/assets/case-iris-mhk-1.webp";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const cases = [
  {
    title: "Центр офтальмохирургии «Ирис»",
    location: "Краснодар",
    slug: "/cases/iris-krasnodar",
    description: "Полноценный офтальмологический центр с операционным блоком и чистыми помещениями.",
    tags: ["Офтальмохирургия", "Операционный блок"],
    image: irisKrd1,
  },
  {
    title: "Диагностический центр «Ирис»",
    location: "Махачкала",
    slug: "/cases/iris-makhachkala",
    description: "Экспертный диагностический центр с высокоточным оборудованием мирового уровня.",
    tags: ["Диагностика", "Федеральная сеть"],
    image: irisMhk1,
  },
];

const CasesSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-16 px-6 md:px-12 dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
            Кейсы
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-3xl">
            Реализованные проекты
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              className="group"
            >
              <Link to={caseItem.slug} className="block">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1.5 block">
                {caseItem.location}
              </span>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {caseItem.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {caseItem.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase border border-white/15 text-white/60 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить похожий проект
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;
