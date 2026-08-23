import { motion } from "framer-motion";
import { Quote, FileText } from "lucide-react";
import rec22gImg from "@/assets/rec-22g.jpg";
import recAmritaImg from "@/assets/rec-amrita.jpg";
import recInvitroImg from "@/assets/rec-invitro.jpg";
import recIrisImg from "@/assets/rec-iris.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export const recommendations = [
  {
    company: "ООО «ИНВИТРО-Воронеж»",
    person: "Гамов Р.В., генеральный директор",
    type: "Медицинская лаборатория",
    quote:
      "Все услуги были предоставлены на высочайшем уровне, в полном соответствии с действующими государственными стандартами и санитарно-эпидемиологическими нормами. Благодаря безупречному качеству проектной документации наша организация без затруднений получила все необходимые лицензии.",
    image: recInvitroImg,
    pdf: "/documents/rekomendaciya-invitro.pdf",
  },
  {
    company: "Центр офтальмохирургии «ИРИС»",
    person: "Сташкова Е.А.",
    type: "Офтальмохирургия, операционные",
    quote:
      "Специфика высокотехнологичной офтальмохирургии предъявляет бескомпромиссные требования к микроклимату, чистоте воздуха и инженерии. Наш центр прошёл все лицензионные и контролирующие проверки с первого раза и точно в намеченные сроки.",
    image: recIrisImg,
    pdf: "/documents/rekomendaciya-iris.pdf",
  },
  {
    company: "ООО «22 ДЖИ КЛИНИК»",
    person: "Ибрагимов Т.Т., генеральный директор",
    type: "Многопрофильный медицинский центр",
    quote:
      "Задачи любой сложности решались системно, точно в установленные сроки и с глубоким пониманием специфики лицензирования медицинской деятельности. Документация прошла все процедуры согласования без замечаний.",
    image: rec22gImg,
    pdf: "/documents/rekomendaciya-22g.pdf",
  },
  {
    company: "ООО «Амрита»",
    person: "Сайдуллаев З.М., генеральный директор",
    type: "Клиника, Москва",
    quote:
      "Отдельно отмечаем высокий уровень сервиса и клиентского контроля: на протяжении всего сотрудничества вы были на связи и оперативно реагировали на любые вопросы. Рекомендуем как надёжного и компетентного партнёра.",
    image: recAmritaImg,
    pdf: "/documents/rekomendaciya-amrita.pdf",
  },
];

interface Props {
  className?: string;
  compact?: boolean;
}

const RecommendationsSection = ({ className = "", compact = false }: Props) => {
  const items = compact ? recommendations.slice(0, 2) : recommendations;

  return (
    <section className={`py-20 px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Рекомендации
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight mb-4">
            Что о нас пишут клиники
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Официальные рекомендательные письма от медицинских организаций, чьи объекты мы спроектировали и довели до лицензии.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((r, i) => (
            <motion.article
              key={r.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
              className="border border-border rounded-2xl p-6 md:p-8 bg-background flex flex-col gap-5"
            >
              <div className="flex items-start gap-5">
                <a
                  href={r.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-24 md:w-28 rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-colors"
                >
                  <img
                    src={r.image}
                    alt={`Рекомендательное письмо — ${r.company}`}
                    loading="lazy"
                    className="w-full h-auto object-cover object-top aspect-[3/4]"
                  />
                </a>
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-2">
                    {r.type}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                    {r.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.person}</p>
                </div>
              </div>

              <div className="relative pl-7">
                <Quote className="w-4 h-4 text-accent absolute left-0 top-1" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {r.quote}
                </p>
              </div>

              <a
                href={r.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors mt-auto"
              >
                <FileText className="w-4 h-4" />
                Открыть оригинал PDF
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
