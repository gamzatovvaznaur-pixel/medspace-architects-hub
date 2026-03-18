import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import { FileText, Download, Shield, Building2, Zap, Accessibility, FlameKindling } from "lucide-react";

const documentCategories = [
  {
    title: "Санитарные правила и нормы (СанПиН)",
    icon: Shield,
    description: "Основные санитарно-эпидемиологические требования к проектированию и эксплуатации медицинских учреждений",
    documents: [
      {
        name: "СП 2.1.3678-20",
        title: "Санитарно-эпидемиологические требования к эксплуатации помещений, зданий, сооружений, оборудования и транспорта",
        description: "Устанавливает санитарно-эпидемиологические требования к содержанию территорий, помещений и эксплуатации производственных, общественных и жилых зданий, включая медицинские организации.",
        file: "/documents/sp-2.1.3678-20.pdf",
      },
      {
        name: "СанПиН 3.3686-21",
        title: "Санитарно-эпидемиологические требования по профилактике инфекционных болезней",
        description: "Регламентирует профилактические и противоэпидемические мероприятия, требования к дезинфекции и стерилизации в медицинских организациях.",
        file: "/documents/sanpin-3.3686-21.pdf",
      },
    ],
  },
  {
    title: "Своды правил (СП) — проектирование зданий",
    icon: Building2,
    description: "Нормативные документы, регулирующие архитектурно-строительное проектирование медицинских объектов",
    documents: [
      {
        name: "СП 158.13330.2014",
        title: "Здания и помещения медицинских организаций. Правила проектирования",
        description: "Основной свод правил для проектирования зданий медицинских организаций. Определяет требования к планировочным решениям, составу и площадям помещений, инженерному обеспечению.",
        file: "/documents/sp-158.13330-2014.pdf",
      },
      {
        name: "СП 59.13330.2020",
        title: "Доступность зданий и сооружений для маломобильных групп населения",
        description: "Устанавливает требования к проектированию зданий и территорий, обеспечивающих доступность для инвалидов и других маломобильных групп населения.",
        file: "/documents/sp-59.13330-2020.pdf",
      },
    ],
  },
  {
    title: "Своды правил (СП) — инженерные системы",
    icon: Zap,
    description: "Нормативные документы по инженерному оснащению и безопасности медицинских объектов",
    documents: [
      {
        name: "СП 256.1325800.2016",
        title: "Электроустановки жилых и общественных зданий. Правила проектирования и монтажа",
        description: "Регулирует проектирование электроустановок, включая требования к электроснабжению медицинского оборудования, аварийному освещению и системам бесперебойного питания.",
        file: "/documents/sp-256.1325800-2016.pdf",
      },
      {
        name: "СП 71.13130.2013",
        title: "Ограничение распространения пожара на объектах защиты. Требования к объёмно-планировочным решениям",
        description: "Определяет противопожарные требования к архитектурно-планировочным решениям, путям эвакуации и огнестойкости конструкций медицинских зданий.",
        file: "/documents/sp-71.13130-2013.pdf",
      },
    ],
  },
  {
    title: "Приказы Министерства здравоохранения РФ",
    icon: FileText,
    description: "Ведомственные нормативные акты, определяющие порядки оказания медицинской помощи и требования к оснащению",
    documents: [
      {
        name: "Приказ Минздрава РФ № 902н",
        title: "Порядок оказания медицинской помощи взрослому населению по профилю «онкология»",
        description: "Определяет стандарты оснащения онкологических отделений, кабинетов и центров, требования к помещениям и оборудованию для диагностики и лечения.",
        file: "/documents/prikaz-902n.pdf",
      },
      {
        name: "Приказ Минздрава РФ № 786н",
        title: "Порядок оказания медицинской помощи взрослому населению при стоматологических заболеваниях",
        description: "Устанавливает требования к организации стоматологической помощи, стандарты оснащения стоматологических кабинетов и отделений.",
        file: "/documents/prikaz-786n.pdf",
      },
      {
        name: "Приказ Минздрава РФ № 560н",
        title: "Правила проведения рентгенологических исследований",
        description: "Регулирует порядок проведения рентгенологических исследований, требования к помещениям, оборудованию и радиационной безопасности.",
        file: "/documents/prikaz-560n.pdf",
      },
      {
        name: "Приказ Минздрава РФ № 298н",
        title: "Порядок оказания медицинской помощи по профилю «пластическая хирургия»",
        description: "Определяет стандарты организации медицинской помощи по пластической хирургии, включая требования к помещениям, оборудованию и кадровому обеспечению.",
        file: "/documents/prikaz-298n.pdf",
      },
    ],
  },
];

const Documents = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-4">
            Нормативная база
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Документация
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ключевые нормативные документы, регулирующие проектирование медицинских учреждений в Российской Федерации. Мы работаем в строгом соответствии с действующим законодательством.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {documentCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {category.documents.map((doc, docIdx) => (
                  <a
                    key={docIdx}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-border rounded-2xl p-6 hover:border-accent/40 hover:bg-accent/5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[11px] tracking-widest uppercase text-accent font-semibold">
                            {doc.name}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Нужна консультация по нормативным требованиям?
          </h2>
          <p className="text-muted-foreground mb-8">
            Наши специалисты помогут разобраться в требованиях и обеспечат полное соответствие вашего проекта действующему законодательству.
          </p>
          <a
            href="tel:+79182633627"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Получить консультацию
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Documents;
