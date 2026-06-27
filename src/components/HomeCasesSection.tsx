import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import irisKrd from "@/assets/case-iris-1.webp";
import irisMhk from "@/assets/case-iris-mhk-1.webp";
import mavie from "@/assets/case-mavie-1.jpg";
import dentalSpb from "@/assets/case-dental-spb.jpg";
import multiKrd from "@/assets/case-multi-krasnodar.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const cases = [
  {
    title: "Центр офтальмохирургии «Ирис»",
    location: "Краснодар",
    slug: "/cases/iris-krasnodar",
    image: irisKrd,
  },
  {
    title: "Диагностический центр «Ирис»",
    location: "Махачкала",
    slug: "/cases/iris-makhachkala",
    image: irisMhk,
  },
  {
    title: "Клиника эстетической медицины Mavie",
    location: "Москва",
    image: mavie,
  },
  {
    title: "Стоматологическая клиника",
    location: "Санкт-Петербург",
    image: dentalSpb,
  },
  {
    title: "Многопрофильный медицинский центр",
    location: "Краснодарский край",
    image: multiKrd,
  },
];

const HomeCasesSection = () => {
  return (
    <section id="cases" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-10"
        >
          Несколько примеров наших работ
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cases.map((c, i) => {
            const content = (
              <div className="group">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-display font-medium text-foreground leading-snug">
                  {c.title}
                </h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mt-1 block">
                  {c.location}
                </span>
              </div>
            );

            return c.slug ? (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
              >
                <Link to={c.slug} className="block">
                  {content}
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeCasesSection;
