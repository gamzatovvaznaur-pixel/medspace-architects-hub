import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

import img1 from "@/assets/case-iris-1.webp";
import img2 from "@/assets/case-iris-2.webp";
import img3 from "@/assets/case-iris-3.webp";
import img4 from "@/assets/case-iris-4.webp";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const CaseIrisKrasnodar = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/#cases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Назад к кейсам
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition}>
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Офтальмохирургия • Краснодар
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Проектирование центра «Ирис»
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-card rounded-2xl p-6 border border-border mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Локация</span>
                <p className="text-lg font-medium text-foreground mt-1">г. Краснодар</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Задача</span>
                <p className="text-lg font-medium text-foreground mt-1">Диагностика + хирургия</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Тип</span>
                <p className="text-lg font-medium text-foreground mt-1">Офтальмологический центр</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={img} alt={`Ирис Краснодар — фото ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition}>
            <div className="bg-card border border-border rounded-2xl p-8 mb-10">
              <p className="text-xl text-foreground leading-relaxed">
                Разместить полноценный офтальмологический центр с операционным блоком на базе существующего здания. Сложнейшие операции — катаракта, глаукома, лазерная коррекция, витреоретинальная хирургия. Проект должен принять оборудование мирового класса и обеспечить полную стерильность при интенсивном потоке.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="dark-section py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
            Технологические особенности
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "⚙️", title: "Интеграция тяжёлого оборудования", text: "Лазерные установки требуют жёстких допусков по антивибрации пола и специфической разводки сетей. Индивидуальные проекты полов и инженерных коробов для бесперебойной работы высокоточных систем." },
              { icon: "💧", title: "Чистые помещения", text: "В операционном блоке — приточно-вытяжная вентиляция с многоступенчатой очисткой воздуха, критическое требование для офтальмохирургии." },
              { icon: "🔄", title: "Диагностический маршрут", text: "Зона диагностики спроектирована для максимальной эффективности. Эргономичное размещение диагностических комбайнов для работы офтальмологов." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...transition, delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-around bg-white/5 border border-white/10 rounded-full py-4 px-6">
            {["📋 Вход", "🔬 Диагностика", "💎 Хирургия", "🌿 Стационар"].map((step, i) => (
              <span key={i} className="flex items-center gap-2 text-white/80 text-sm">
                {i > 0 && <span className="text-accent">→</span>}
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Больше, чем больница
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Снижаем стресс пациента — тёплое отношение, комфортные зоны ожидания и интуитивная навигация.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { badge: "Навигация", text: "Интуитивное зонирование помогает пациентам с ослабленным зрением легко ориентироваться в коридорах." },
              { badge: "Приватность", text: "Планировка обеспечивает акустический комфорт при консультациях." },
              { badge: "Свет", text: "Максимум естественного света в зонах отдыха, мягкое нераздражающее освещение в диагностических зонах." },
              { badge: "Детали", text: "Отделка без резких углов, спокойные тона — пространство лечит уже своим видом." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...transition, delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-6">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mb-3">{item.badge}</span>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <p className="text-xl text-foreground leading-relaxed italic mb-4">
              «Команда "Медпроекта" проявила глубокое понимание нашей специфики. Они спроектировали клинику, в которой одинаково комфортно работать хирургу мирового уровня и пациенту, пришедшему на диагностику».
            </p>
            <p className="text-muted-foreground font-medium">— Дирекция клиники «Ирис»</p>
          </div>
        </div>
      </section>

      <section className="dark-section py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-3xl md:text-4xl font-display font-bold text-white mb-10">
            Результат
          </motion.h2>

          <div className="bg-accent text-accent-foreground rounded-full px-8 py-4 text-xl font-semibold mb-10 inline-block">
            ✓ Полное соответствие высоким стандартам
          </div>

          <ul className="space-y-3 mb-10">
            {[
              "Современный операционный блок",
              "Зона дневного стационара с повышенным комфортом",
              "Оптимизированная логистика потоков «пациент — врач — диагностика»",
              "Чистота и порядок, о которых говорят пациенты",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                <span className="text-accent">✓</span> {item}
              </li>
            ))}
          </ul>

          <button
            onClick={openCallback}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> Обсудить похожий проект
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseIrisKrasnodar;
