import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, BookOpen } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

type Side = "left" | "right";
type Scatter =
  | {
      kind: "article";
      side: Side;
      slug: string;
      title: string;
      tag: string;
    }
  | {
      kind: "norm";
      side: Side;
      code: string;
      title: string;
    };

const screens: {
  kicker: string;
  title: string;
  sub: string;
  scatter?: Scatter[];
}[] = [
  {
    kicker: "Пролог",
    title: "Как спроектировать медицинскую клинику?",
    sub: "Пошаговый разбор: от бизнес-идеи и подбора помещения до готового инженерного проекта.",
  },
  {
    kicker: "Шаг 1",
    title: "Формируем медицинскую концепцию",
    sub: "Чётко определяем специализацию клиники и составляем точный перечень необходимых кабинетов.",
    scatter: [
      {
        kind: "article",
        side: "right",
        slug: "mnogoprofilnyy-centr",
        title: "Проектирование многопрофильного медцентра: логистика потоков",
        tag: "Статья",
      },
    ],
  },
  {
    kicker: "Шаг 2",
    title: "Расчёт площади и технологические нюансы",
    sub: "Высчитываем необходимый метраж и сразу закладываем спецтребования — например, для МРТ или рентген-кабинетов.",
    scatter: [
      {
        kind: "article",
        side: "left",
        slug: "normy-ploshadi-medicinskih-kabinetov",
        title: "Нормы площади медкабинетов: как не потерять метры",
        tag: "Статья",
      },
      {
        kind: "norm",
        side: "right",
        code: "СП 158.13330.2014",
        title: "Здания и помещения медицинских организаций",
      },
    ],
  },
  {
    kicker: "Шаг 3",
    title: "Поиск и аудит помещения",
    sub: "Подбираем оптимальную локацию, проверяем её на соответствие нормативам и финализируем договор аренды.",
    scatter: [
      {
        kind: "article",
        side: "right",
        slug: "vybor-pomeshcheniya-pod-kliniku",
        title: "Как выбрать помещение под клинику: чек-лист",
        tag: "Чек-лист",
      },
      {
        kind: "norm",
        side: "left",
        code: "СанПиН 2.1.3678-20",
        title: "Санитарно-эпидемиологические требования к эксплуатации помещений",
      },
    ],
  },
  {
    kicker: "Шаг 4",
    title: "Планировочные решения и дизайн",
    sub: "Создаём эргономичное пространство строго по СанПиН, где эстетика сочетается с технологией.",
    scatter: [
      {
        kind: "article",
        side: "left",
        slug: "dostupnaya-sreda-mgn",
        title: "Доступная среда: проектирование с учётом требований МГН",
        tag: "Статья",
      },
      {
        kind: "article",
        side: "right",
        slug: "medicinskie-othody",
        title: "Сбор и хранение медотходов классов А, Б, В",
        tag: "Статья",
      },
    ],
  },
  {
    kicker: "Шаг 5",
    title: "Проектирование инженерных систем",
    sub: "Разрабатываем разделы вентиляции, электрики, водоснабжения и слаботочных сетей. При необходимости — готовим смету.",
    scatter: [
      {
        kind: "article",
        side: "right",
        slug: "ventilyaciya-operacionnyh",
        title: "Вентиляция в операционных и чистых помещениях",
        tag: "Инженерия",
      },
      {
        kind: "article",
        side: "left",
        slug: "elektrosnabzhenie-klinik",
        title: "Электроснабжение и ИБП первой категории надёжности",
        tag: "Инженерия",
      },
      {
        kind: "norm",
        side: "right",
        code: "СП 60.13330.2020",
        title: "Отопление, вентиляция и кондиционирование воздуха",
      },
    ],
  },
  {
    kicker: "Шаг 6",
    title: "Детальный план строительных работ",
    sub: "Формируем пошаговый график и регламент работ, чтобы строители реализовали проект без ошибок и задержек.",
    scatter: [
      {
        kind: "article",
        side: "left",
        slug: "proektirovanie-rentgen-kabineta",
        title: "Проектирование рентген-кабинета и получение СЭЗ",
        tag: "Лицензирование",
      },
      {
        kind: "norm",
        side: "right",
        code: "СанПиН 2.6.1.1192-03",
        title: "Гигиенические требования к устройству и эксплуатации рентген-кабинетов",
      },
    ],
  },
];

const ScatterCard = ({ item }: { item: Scatter }) => {
  const sideClass =
    item.side === "left"
      ? "left-4 md:left-[6%] lg:left-[10%]"
      : "right-4 md:right-[6%] lg:right-[10%]";
  const rotate = item.side === "left" ? "-rotate-[2deg]" : "rotate-[2deg]";

  if (item.kind === "article") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${sideClass} z-10 max-w-[260px] ${rotate} hover:rotate-0 transition-transform duration-500`}
      >
        <Link
          to={`/blog/${item.slug}`}
          className="block bg-background border border-border rounded-2xl p-5 shadow-[0_20px_60px_-30px_hsl(var(--foreground)/0.25)] hover:shadow-[0_30px_80px_-30px_hsl(var(--foreground)/0.35)] hover:-translate-y-1 transition-all group"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent">
              {item.tag}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <p className="text-sm font-display font-medium text-foreground leading-snug">
            {item.title}
          </p>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${sideClass} z-10 max-w-[240px] ${rotate} hover:rotate-0 transition-transform duration-500`}
    >
      <div className="bg-secondary/60 border border-dashed border-border rounded-2xl p-5 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
            Норматив
          </span>
        </div>
        <p className="font-mono text-[11px] text-accent mb-1.5">{item.code}</p>
        <p className="text-xs text-foreground leading-snug">{item.title}</p>
      </div>
    </motion.div>
  );
};

const Screen = ({
  kicker,
  title,
  sub,
  index,
  total,
  scatter,
}: {
  kicker: string;
  title: string;
  sub: string;
  index: number;
  total: number;
  scatter?: Scatter[];
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
      {scatter?.map((s, i) => <ScatterCard key={i} item={s} />)}

      <motion.div
        style={{ opacity, y }}
        className="max-w-3xl mx-auto text-center relative z-20"
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

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground/50 z-20">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  );
};

const WindingRibbon = ({ progress }: { progress: MotionValue<number> }) => {
  // viewBox stretches with container (preserveAspectRatio=none).
  // Path: sine-like winding from top (x=50) to bottom, amplitude 40 in a 100-wide box.
  const totalLen = 2400;
  const dashOffset = useTransform(progress, [0, 1], [totalLen, 0]);

  const d = `
    M 50 0
    C 90 80, 10 160, 50 240
    S 90 400, 50 480
    S 10 640, 50 720
    S 90 880, 50 960
    S 10 1120, 50 1200
    S 90 1360, 50 1440
    S 10 1600, 50 1680
    S 90 1840, 50 1920
    S 10 2080, 50 2160
    S 90 2320, 50 2400
  `;

  return (
    <svg
      className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 100 2400"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* faint base ribbon */}
      <path
        d={d}
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="0.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.5"
      />
      {/* progressing accent ribbon */}
      <motion.path
        d={d}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray={totalLen}
        style={{ strokeDashoffset: dashOffset }}
        vectorEffect="non-scaling-stroke"
        opacity="0.7"
      />
    </svg>
  );
};

const Story = () => {
  const { openCallback } = useCallbackDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Как проектируется медицинская клиника — пошаговая презентация"
        description="Воздушная пошаговая презентация: от медицинской концепции и подбора помещения до инженерных систем и плана строительных работ."
        path="/story"
      />
      <HeaderNav />

      <div ref={containerRef} className="relative pt-16">
        <WindingRibbon progress={scrollYProgress} />

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
            className="max-w-3xl mx-auto text-center relative z-20"
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

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground/50 z-20">
            {String(screens.length + 1).padStart(2, "0")} / {String(screens.length + 1).padStart(2, "0")}
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Story;
