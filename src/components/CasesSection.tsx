import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import irisKrd1 from "@/assets/case-iris-1.webp";
import irisKrd2 from "@/assets/case-iris-2.webp";
import irisKrd3 from "@/assets/case-iris-3.webp";
import irisKrd4 from "@/assets/case-iris-4.webp";

import irisMhk1 from "@/assets/case-iris-mhk-1.webp";
import irisMhk2 from "@/assets/case-iris-mhk-2.webp";
import irisMhk3 from "@/assets/case-iris-mhk-3.webp";
import irisMhk4 from "@/assets/case-iris-mhk-4.webp";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const cases = [
  {
    title: "Центр офтальмохирургии «Ирис»",
    location: "Краснодар",
    slug: "/cases/iris-krasnodar",
    description:
      "Проектирование полноценного офтальмологического центра с операционным блоком. Интеграция тяжёлого диагностического оборудования, чистые помещения с многоступенчатой очисткой воздуха, пациент-ориентированная навигация.",
    tags: ["Офтальмохирургия", "Операционный блок", "Чистые помещения"],
    images: [irisKrd1, irisKrd2, irisKrd3, irisKrd4],
  },
  {
    title: "Диагностический центр «Ирис»",
    location: "Махачкала",
    slug: "/cases/iris-makhachkala",
    description:
      "Создание экспертного диагностического центра с интеграцией в федеральную сеть. Размещение высокоточного оборудования мирового уровня, специализированная светотехника для офтальмоскопии, эргономичные кабинеты.",
    tags: ["Диагностика", "Федеральная сеть", "Инжиниринг"],
    images: [irisMhk1, irisMhk2, irisMhk3, irisMhk4],
  },
];

const CasesSection = () => {
  const [activeImages, setActiveImages] = useState<number[]>([0, 0]);

  return (
    <section className="py-24 px-6 md:px-12 dark-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Кейсы
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-4xl">
            Реализованные проекты
          </h2>
        </motion.div>

        <div className="space-y-24">
          {cases.map((caseItem, caseIdx) => (
            <motion.div
              key={caseIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              {/* Images */}
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={caseItem.images[activeImages[caseIdx]]}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {caseItem.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() =>
                        setActiveImages((prev) => {
                          const next = [...prev];
                          next[caseIdx] = imgIdx;
                          return next;
                        })
                      }
                      className={`rounded-lg overflow-hidden aspect-[4/3] border-2 transition-all ${
                        activeImages[caseIdx] === imgIdx
                          ? "border-accent opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${caseItem.title} — фото ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="lg:pt-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  {caseItem.location}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
                  {caseItem.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  {caseItem.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-widest uppercase border border-white/15 text-white/60 px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={caseItem.slug}
                    className="inline-block bg-white text-primary px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors"
                  >
                    Подробнее о проекте
                  </Link>
                  <a
                    href="tel:+79182633627"
                    className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    Обсудить похожий проект
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
