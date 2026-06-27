import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const screens = [
  {
    kicker: "Пролог",
    title: "Как спроектировать медицинскую клинику?",
    sub: "Пошаговый разбор: от бизнес-идеи и подбора помещения до готового инженерного проекта.",
  },
  {
    kicker: "Шаг 1",
    title: "Формируем медицинскую концепцию",
    sub: "Чётко определяем специализацию клиники и составляем точный перечень необходимых кабинетов.",
  },
  {
    kicker: "Шаг 2",
    title: "Расчёт площади и технологические нюансы",
    sub: "Высчитываем необходимый метраж и сразу закладываем спецтребования — например, для МРТ или рентген-кабинетов.",
  },
  {
    kicker: "Шаг 3",
    title: "Поиск и аудит помещения",
    sub: "Подбираем оптимальную локацию, проверяем её на соответствие нормативам и финализируем договор аренды.",
  },
  {
    kicker: "Шаг 4",
    title: "Планировочные решения и дизайн",
    sub: "Создаём эргономичное пространство строго по СанПиН, где эстетика сочетается с технологией.",
  },
  {
    kicker: "Шаг 5",
    title: "Проектирование инженерных систем",
    sub: "Разрабатываем разделы вентиляции, электрики, водоснабжения и слаботочных сетей. При необходимости — готовим смету.",
  },
  {
    kicker: "Шаг 6",
    title: "Детальный план строительных работ",
    sub: "Формируем пошаговый график и регламент работ, чтобы строители реализовали проект без ошибок и задержек.",
  },
];

const Screen = ({
  kicker,
  title,
  sub,
  index,
  total,
}: {
  kicker: string;
  title: string;
  sub: string;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-8">
          {kicker}
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.05] tracking-tight mb-8">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {sub}
        </p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground/50">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  );
};

const Story = () => {
  const { openCallback } = useCallbackDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Как проектируется медицинская клиника — пошаговая презентация"
        description="Воздушная пошаговая презентация: от медицинской концепции и подбора помещения до инженерных систем и плана строительных работ."
        path="/story"
      />
      <HeaderNav />

      <div ref={containerRef} className="relative pt-16">
        {/* Tall vertical line that grows with scroll */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none">
          <div className="absolute inset-0 bg-border/40" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 right-0 bg-accent/60"
          />
        </div>

        {screens.map((s, i) => (
          <Screen key={i} {...s} index={i} total={screens.length + 1} />
        ))}

        {/* Final CTA screen */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-8">
              Эпилог
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.05] tracking-tight mb-8">
              Время действовать
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Обсудите ваш проект с экспертами МедПроект. Начнём с первого шага.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCallback}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Оставить заявку
              </button>
              <a
                href="tel:+79182633627"
                className="border border-border text-foreground px-8 py-4 rounded-xl font-display text-xs font-medium uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                +7 (918) 263-36-27
              </a>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground/50">
            {String(screens.length + 1).padStart(2, "0")} / {String(screens.length + 1).padStart(2, "0")}
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Story;
