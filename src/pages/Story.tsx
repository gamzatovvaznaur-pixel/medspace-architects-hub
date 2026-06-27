import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, BookOpen } from "lucide-react";
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

type Scatter =
  | { kind: "article"; slug: string; title: string; tag: string; top: string; left: string; rotate: number; depth: number }
  | { kind: "norm"; code: string; title: string; top: string; left: string; rotate: number; depth: number };

// Chaotically scattered cards (top is % of full container; left is % of viewport width).
// depth = parallax factor: 0 = static, 1 = strong parallax.
const scatters: Scatter[] = [
  { kind: "article", slug: "mnogoprofilnyy-centr", title: "Логистика потоков в многопрофильном медцентре", tag: "Статья", top: "11%", left: "72%", rotate: -4, depth: 0.6 },
  { kind: "norm", code: "СП 158.13330.2014", title: "Здания медицинских организаций", top: "18%", left: "8%", rotate: 5, depth: 0.4 },
  { kind: "article", slug: "normy-ploshadi-medicinskih-kabinetov", title: "Нормы площади: как не потерять метры", tag: "Чек-лист", top: "26%", left: "78%", rotate: 3, depth: 0.8 },
  { kind: "article", slug: "vybor-pomeshcheniya-pod-kliniku", title: "Как выбрать помещение под клинику", tag: "Статья", top: "34%", left: "5%", rotate: -6, depth: 0.5 },
  { kind: "norm", code: "СанПиН 2.1.3678-20", title: "Санитарные требования к эксплуатации помещений", top: "42%", left: "74%", rotate: -3, depth: 0.3 },
  { kind: "article", slug: "dostupnaya-sreda-mgn", title: "Доступная среда для МГН", tag: "Статья", top: "49%", left: "10%", rotate: 4, depth: 0.7 },
  { kind: "article", slug: "medicinskie-othody", title: "Медотходы классов А, Б, В", tag: "Статья", top: "57%", left: "80%", rotate: -5, depth: 0.5 },
  { kind: "article", slug: "ventilyaciya-operacionnyh", title: "Вентиляция в операционных и чистых помещениях", tag: "Инженерия", top: "65%", left: "6%", rotate: 6, depth: 0.9 },
  { kind: "norm", code: "СП 60.13330.2020", title: "Отопление, вентиляция и кондиционирование", top: "72%", left: "76%", rotate: 2, depth: 0.4 },
  { kind: "article", slug: "elektrosnabzhenie-klinik", title: "ИБП и первая категория надёжности", tag: "Инженерия", top: "80%", left: "9%", rotate: -4, depth: 0.6 },
  { kind: "article", slug: "proektirovanie-rentgen-kabineta", title: "Проектирование рентген-кабинета и СЭЗ", tag: "Лицензирование", top: "87%", left: "73%", rotate: 5, depth: 0.7 },
  { kind: "norm", code: "СанПиН 2.6.1.1192-03", title: "Устройство и эксплуатация рентген-кабинетов", top: "92%", left: "12%", rotate: -3, depth: 0.4 },
];

const ScatterCard = ({ item, progress }: { item: Scatter; progress: MotionValue<number> }) => {
  // Parallax: card drifts upward as user scrolls past it.
  const y = useTransform(progress, [0, 1], [80 * item.depth, -80 * item.depth]);
  const smoothY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  const baseClass =
    "absolute z-10 max-w-[240px] hidden md:block transition-transform duration-500 hover:!rotate-0 hover:-translate-y-1";

  if (item.kind === "article") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ top: item.top, left: item.left, rotate: item.rotate, y: smoothY }}
        className={baseClass}
      >
        <Link
          to={`/blog/${item.slug}`}
          className="block bg-background border border-border rounded-2xl p-5 shadow-[0_25px_70px_-30px_hsl(var(--foreground)/0.3)] hover:shadow-[0_35px_90px_-30px_hsl(var(--foreground)/0.45)] transition-shadow group"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent">{item.tag}</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <p className="text-sm font-display font-medium text-foreground leading-snug">{item.title}</p>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ top: item.top, left: item.left, rotate: item.rotate, y: smoothY }}
      className={baseClass}
    >
      <div className="bg-secondary/70 border border-dashed border-border rounded-2xl p-5 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">Норматив</span>
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
}: {
  kicker: string;
  title: string;
  sub: string;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      <motion.div style={{ opacity, y: smoothY, scale }} className="max-w-3xl mx-auto text-center relative z-20">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-8">{kicker}</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.05] tracking-tight mb-8">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{sub}</p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground/50 z-20">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  );
};

const WindingRibbon = ({ progress }: { progress: MotionValue<number> }) => {
  // Wide-amplitude winding path; spans full container vertically.
  const d = `
    M 50 0
    C 95 100, 5 220, 50 320
    S 95 540, 50 640
    S 5 860, 50 960
    S 95 1180, 50 1280
    S 5 1500, 50 1600
    S 95 1820, 50 1920
    S 5 2140, 50 2240
    S 95 2360, 50 2400
  `;
  const totalLen = 3000;

  // Smooth spring on scroll progress to make the draw feel buttery.
  const smooth = useSpring(progress, { stiffness: 90, damping: 30, mass: 0.4 });
  const dashOffset = useTransform(smooth, [0, 1], [totalLen, 0]);
  const glowOffset = useTransform(smooth, [0, 1], [totalLen, -100]);

  return (
    <svg
      className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 100 2400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
        </linearGradient>
        <filter id="ribbonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faint base ribbon — always visible */}
      <path
        d={d}
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.6"
      />

      {/* glow halo following the draw */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#ribbonGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${totalLen} ${totalLen}`}
        style={{ strokeDashoffset: glowOffset }}
        vectorEffect="non-scaling-stroke"
        opacity="0.35"
        filter="url(#ribbonGlow)"
      />

      {/* main accent ribbon — drawn as user scrolls */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#ribbonGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={totalLen}
        style={{ strokeDashoffset: dashOffset }}
        vectorEffect="non-scaling-stroke"
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

        {/* Chaotic scatter layer covering entire container */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            {scatters.map((s, i) => (
              <ScatterCard key={i} item={s} progress={scrollYProgress} />
            ))}
          </div>
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
            className="max-w-3xl mx-auto text-center relative z-20"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-8">Эпилог</span>
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
