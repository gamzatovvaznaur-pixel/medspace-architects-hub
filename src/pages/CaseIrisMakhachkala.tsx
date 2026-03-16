import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";

import img1 from "@/assets/case-iris-mhk-1.webp";
import img2 from "@/assets/case-iris-mhk-2.webp";
import img3 from "@/assets/case-iris-mhk-3.webp";
import img4 from "@/assets/case-iris-mhk-4.webp";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const CaseIrisMakhachkala = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/#cases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Назад к кейсам
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Сеть офтальмологических клиник • Махачкала
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              Точность в деталях: клиника «Ирис» в Махачкале
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              Создание экспертного диагностического центра с интеграцией в федеральную сеть офтальмохирургии.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-card rounded-2xl p-6 border border-border">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Клиент</span>
                <p className="text-lg font-medium text-foreground mt-1">Сеть «Ирис»</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Локация</span>
                <p className="text-lg font-medium text-foreground mt-1">Махачкала</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Задача</span>
                <p className="text-lg font-medium text-foreground mt-1">Диагностический центр</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Images */}
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
              <img src={img} alt={`Ирис Махачкала — фото ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* О проекте */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <span className="text-3xl mb-4 block">🔄</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">Бесшовный путь пациента</h3>
              <p className="text-muted-foreground leading-relaxed">
                От первичного осмотра до подготовки к высокотехнологичной операции в Краснодаре.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <span className="text-3xl mb-4 block">⚙️</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">Оборудование мирового уровня</h3>
              <p className="text-muted-foreground leading-relaxed">
                Проектирование кабинетов под высокоточную технику (Япония, Германия), организация трансфера и медсопровождения.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Челлендж */}
      <section className="dark-section py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Челлендж
          </motion.h2>
          <p className="text-white/60 text-xl mb-12">Каждый метр работает на точность диагностики и комфорт пациента.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { badge: "Технический регламент", text: "Размещение тяжёлого диагностического оборудования (Япония, Германия, Австралия) с учётом требований к электроснабжению и освещённости." },
              { badge: "Маршрутизация", text: "Логистика внутри клиники, исключающая очереди при высокой проходимости пациентов." },
              { badge: "Единый стандарт", text: "Интерьерные решения, соответствующие визуальному коду сети «Ирис» — доверие и экспертность." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {item.badge}
                </span>
                <p className="text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow */}
          <div className="flex items-center justify-around bg-white/5 border border-white/10 rounded-full py-4 px-6 flex-wrap gap-2">
            {["🚶 Вход", "🔍 Диагностика", "📋 Консультация", "✈️ Трансфер в Краснодар"].map((step, i) => (
              <span key={i} className="flex items-center gap-2 text-white/80 text-sm">
                {i > 0 && <span className="text-accent">→</span>}
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Инженерная точность */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
          >
            Инженерная точность
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Инжиниринг", text: "Индивидуальные решения для электропитания диагностических систем (стабильность, защита от помех)." },
              { icon: "💡", title: "Светотехника", text: "Специализированное освещение в кабинетах офтальмоскопии — критически важно для выявления патологий сетчатки." },
              { icon: "🪑", title: "Эргономика", text: "Планировки кабинетов: офтальмолог работает с пациентом без лишних движений." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Пространство заботы */}
      <section className="dark-section py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Пространство заботы и спокойствия
          </motion.h2>
          <p className="text-white/60 text-lg mb-12">Дизайн интерьера призван снимать тревожность перед обследованием.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { badge: "Приватность", text: "Зонирование ожидания, обеспечивающее психологический комфорт пациентов." },
              { badge: "Навигация", text: "Интуитивно понятные указатели — быстрое перемещение между кабинетами диагностики." },
              { badge: "Комфорт", text: "Эргономичная мебель и зона оформления документов для людей любого возраста." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {item.badge}
                </span>
                <p className="text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Результат */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10"
          >
            Результат
          </motion.h2>

          <div className="flex justify-around bg-card border border-border rounded-full py-6 px-6 mb-10 flex-wrap gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">диагностических кабинетов</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-sm text-muted-foreground">зоны комфортного ожидания</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">соответствие СанПиН</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-10">
            <p className="text-xl text-foreground leading-relaxed">
              Махачкалинский «Ирис» стал полноценным звеном федеральной сети, где медицина высоких достижений сочетается с безупречным сервисом и продуманной архитектурой.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-10">
            <p className="text-xl text-foreground leading-relaxed italic mb-4">
              «Команда "Медпроекта" создала для нас пространство, в котором оборудование работает на пределе своих возможностей, а пациент чувствует себя в полной безопасности».
            </p>
            <p className="text-muted-foreground font-medium">— Руководство клиники «Ирис» (Махачкала)</p>
          </div>

          <a
            href="tel:+79182633627"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> Обсудить проект
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseIrisMakhachkala;
