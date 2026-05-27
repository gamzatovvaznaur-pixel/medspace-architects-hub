import { Link } from "react-router-dom";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import heroImg from "@/assets/hero-blueprint.jpg";
import designImg from "@/assets/service-design.jpg";
import supervisionImg from "@/assets/service-supervision.jpg";
import equipmentImg from "@/assets/service-equipment.jpg";
import approvalImg from "@/assets/service-approval.jpg";
import clinicMulti from "@/assets/clinic-multidisciplinary.jpg";
import clinicStom from "@/assets/clinic-stomatology.jpg";
import clinicMri from "@/assets/clinic-mri.jpg";
import clinicXray from "@/assets/clinic-xray.jpg";
import clinicCosm from "@/assets/clinic-cosmetology.jpg";
import clinicLab from "@/assets/clinic-laboratory.jpg";
import clinicHospital from "@/assets/clinic-hospital.jpg";
import clinicOphth from "@/assets/clinic-ophthalmology.jpg";
import clinicProc from "@/assets/clinic-procedure.jpg";
import serviceConsult from "@/assets/service-consultation.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import caseIris1 from "@/assets/case-iris-1.webp";
import caseIris2 from "@/assets/case-iris-2.webp";
import caseIris3 from "@/assets/case-iris-3.webp";
import caseIris4 from "@/assets/case-iris-4.webp";
import caseIrisMhk from "@/assets/case-iris-mhk-1.webp";
import caseIrisMhk2 from "@/assets/case-iris-mhk-2.webp";
import caseIrisMhk3 from "@/assets/case-iris-mhk-3.webp";
import caseMavie from "@/assets/case-mavie-1.jpg";
import caseDental from "@/assets/case-dental-spb.jpg";
import caseMulti from "@/assets/case-multi-krasnodar.jpg";

const Overview = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Сводная страница
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground mb-6 leading-tight">
            Всё о нашей работе по проектированию медицинских учреждений на одной странице
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Здесь собрано всё: чем мы занимаемся, для кого работаем, какие клиники проектируем,
            каким нормам следуем, как сопровождаем стройку и доводим объект до медицинской лицензии.
            Без перескакивания по разделам — один длинный текст, несколько иллюстраций и три формы,
            если по дороге захочется оставить заявку.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <img
            src={heroImg}
            alt="Проектирование медицинских учреждений"
            className="w-full rounded-2xl border border-border aspect-[21/9] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Block 1: Who we are */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Кто мы и чем занимаемся
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            МедПроект — это специализированная архитектурно-инженерная компания, которая
            проектирует медицинские учреждения и сопровождает их до получения лицензии
            Росздравнадзора. Мы работаем только в медицинском сегменте: стоматологии,
            многопрофильные клиники, косметологические центры, лаборатории, процедурные
            кабинеты, стационары, кабинеты МРТ и рентгена, офтальмологические клиники.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            У компании есть действующие допуски СРО и лицензия III уровня на проектные
            работы. Этого достаточно, чтобы выпускать проектную и рабочую документацию для
            любых медицинских объектов: от кабинета на одно кресло до многопрофильного
            центра с операционным блоком. Мы не оказываем услуги по логистике из Китая в
            отрыве от проекта и не работаем с лицензиями МЧС — это не наш профиль, и мы
            честно об этом предупреждаем.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            За годы работы накопилась практика по объектам в разных регионах России. Среди
            них — клиника «Ирис» в Краснодаре и клиника «Ирис» в Махачкале: проекты, где мы
            прошли весь путь от технического задания до приёмки контролирующими органами.
          </p>
        </div>
      </section>

      {/* Block 2: Services */}
      <section className="pb-16 px-6 md:px-12 bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Что входит в полный цикл услуг
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Мы закрываем все этапы создания медицинского учреждения. Это значит, что
            заказчику не нужно собирать сборную команду из архитекторов, инженеров,
            технологов и юристов — всё это делает одна команда внутри одного контракта.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <img src={designImg} alt="Проектирование" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={supervisionImg} alt="Авторский надзор" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Консультация на старте
          </h3>
          <img src={serviceConsult} alt="Консультация на старте" className="w-full rounded-2xl border border-border aspect-[21/9] object-cover my-4" loading="lazy" />
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Если вы только думаете об открытии клиники и не знаете, с чего начать, мы
            проводим бесплатную консультацию. Объясняем разницу между концепцией,
            проектной и рабочей документацией, рассказываем о порядке прохождения СЭЗ,
            ГАСН и Росздравнадзора. На этом этапе становится понятно, что именно вам нужно
            заказать и в каком объёме.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Проектирование медицинских учреждений
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Полный комплект проектной и рабочей документации: архитектура, конструктив,
            все инженерные разделы (электрика, вентиляция, водоснабжение, медицинские
            газы, слаботочные системы), технологические решения с расстановкой
            оборудования, радиационная защита для рентген- и МРТ-кабинетов. Документация
            готовится с учётом СП 158.13330, СанПиН 2.1.3678-20 и других нормативов,
            актуальных для медицинских объектов.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Авторский надзор при строительстве
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Архитектор и инженеры выезжают на объект, проверяют соответствие выполняемых
            работ проекту, согласовывают замены материалов, корректируют решения по
            фактическим условиям стройки. Это нужно, чтобы на этапе сдачи объект совпал с
            тем, что согласовано в документации.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Поставка оборудования и мебели из Китая
          </h3>
          <div className="grid md:grid-cols-2 gap-6 my-4">
            <img src={equipmentImg} alt="Оборудование" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={serviceFurniture} alt="Мебель" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Мы работаем с китайскими производителями напрямую, без посредников. Это
            касается стоматологических установок, оборудования для лабораторий,
            процедурной мебели, шкафов и столов под индивидуальные размеры. Стоимость
            обычно на 30–50% ниже европейских аналогов, а сроки производства — от 30 до
            90 дней. Поставка предлагается только как часть проектного контракта.
          </p>


          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Согласование документации в ГАСН и Росздравнадзоре
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Сопровождаем заказчика на всех этапах прохождения экспертиз и получения
            разрешительной документации. Готовим пакет под СЭЗ Роспотребнадзора,
            сопровождаем госэкспертизу там, где она требуется, помогаем дойти до
            медицинской лицензии Росздравнадзора.
          </p>
        </div>
      </section>

      {/* Form 1 */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="overview-form-1"
            variant="compact"
            title="Дочитали до середины — можно обсудить проект"
            description="Оставьте номер, перезвоним в течение рабочего дня и бесплатно разберём задачу."
            subject="Сводная страница — форма 1"
          />
        </div>
      </section>

      {/* Block 3: Clinic types */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Какие клиники мы проектируем
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            У каждого профиля своя специфика, и универсального подхода в медицинском
            проектировании не существует. Ниже — текстом, без карточек, о том, чем
            отличаются типы объектов, с которыми мы работаем.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <img src={clinicMulti} alt="Многопрофильная клиника" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={clinicStom} alt="Стоматология" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Стоматологии.</strong> Самый частый
            запрос. Проектируем от кабинета на одно кресло до клиник с хирургическим
            блоком, отдельной стерилизационной, рентгеном и ОПТГ. Нужно учитывать
            требования к материалам отделки, потокам пациентов и сотрудников, разделению
            «грязных» и «чистых» зон.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Многопрофильные клиники.</strong>
            Объединяют под одной крышей терапию, узких специалистов, диагностику,
            процедурные. Сложность — в правильной компоновке функциональных групп,
            расчёте потоков и инженерных систем под одновременную работу нескольких
            подразделений.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Косметологические центры.</strong>
            Эстетическая медицина с премиальной отделкой и серьёзными требованиями к
            помещениям для инъекционных и аппаратных процедур. Сюда же — лазерные
            кабинеты с отдельными требованиями к освещению, экранированию и вентиляции.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <img src={clinicCosm} alt="Косметология" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={clinicLab} alt="Лаборатория" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={clinicProc} alt="Процедурный кабинет" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
          </div>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Лаборатории и пункты забора.</strong>
            Клинико-диагностические лаборатории и сети пунктов взятия биоматериала.
            Расстановка по уровням биобезопасности, требования к зонированию,
            водоподготовке и удалению отходов класса Б и В.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Процедурные кабинеты.</strong> Для
            инфузионной терапии, манипуляций и малоинвазивных вмешательств. Расчёт
            кратности воздухообмена, бактерицидные облучатели, требования к отделке.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Стационары.</strong> Палатные отделения,
            реанимация, операционные. Здесь подключается полноценный инженерный комплекс:
            медицинские газы, резервирование электроснабжения, чистые помещения,
            противопожарные решения для отделений с лежачими пациентами.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <img src={clinicHospital} alt="Стационар" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={clinicMri} alt="МРТ" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={clinicOphth} alt="Офтальмология" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
          </div>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">МРТ-кабинеты.</strong> Самый
            технологически сложный объект. Электромагнитное экранирование (клетка
            Фарадея), виброизоляция, выделенное помещение под технику, контур
            безопасности. Проектируется в связке с поставщиком томографа.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Рентген-кабинеты.</strong> Радиационная
            защита со свинцовой отделкой, проектирование пультовой, расчёт зон
            ограниченного доступа, получение санитарно-эпидемиологического заключения на
            работу с источниками ионизирующего излучения.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Офтальмологические клиники.</strong>
            Диагностические центры и хирургические комплексы с лазерным оборудованием.
            Точные требования к освещению диагностических кабинетов, темновым комнатам и
            операционным.
          </p>

        </div>
      </section>

      {/* Block 4: Norms */}
      <section className="pb-16 px-6 md:px-12 bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Нормативная база, по которой мы работаем
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Медицинское проектирование жёстко регламентировано. Ниже — основные
            документы, на которые мы опираемся при подготовке проекта и при общении с
            проверяющими органами.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">СП 158.13330.2014</strong> — «Здания и
            помещения медицинских организаций. Правила проектирования». Основной
            строительный свод правил, в котором заданы требования к составу помещений,
            площадям, отделке, инженерным системам, путям эвакуации в медицинских
            объектах.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">СанПиН 2.1.3678-20</strong> — санитарные
            правила, регулирующие эксплуатацию помещений, где оказывается медицинская
            помощь: микроклимат, освещение, водоснабжение, обращение с отходами,
            требования к дезинфекции и стерилизации.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">Приказ Минздрава №298н</strong> —
            требования к организации деятельности медицинских организаций, регулирует
            оснащение кабинетов по профилям. Используется как основа при формировании
            технологического задания.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            <strong className="text-foreground">СанПиН 2.6.1.1192-03</strong> и
            <strong className="text-foreground"> СанПиН 2.6.1.3488-17</strong> —
            радиационная безопасность при использовании рентгеновского оборудования и
            работах с источниками ионизирующего излучения. На их основе делается расчёт
            защиты для рентген- и КТ-кабинетов.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Тексты приказа №298н и сопутствующих документов доступны в разделе
            <Link to="/documents" className="text-accent underline ml-1">Документы</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <img src={approvalImg} alt="Согласования" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={equipmentImg} alt="Оборудование" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Block 5: Process */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Как устроен процесс работы
          </h2>
          <img src={designImg} alt="Процесс проектирования" className="w-full rounded-2xl border border-border aspect-[21/9] object-cover my-4" loading="lazy" />
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            На старте мы обсуждаем задачу и собираем исходные данные: правоустанавливающие
            документы на помещение, обмерные планы, технические условия от ресурсных
            организаций, желаемый профиль медицинской деятельности. Если каких-то данных
            нет — помогаем их получить.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Дальше готовится концепция: планировочное решение, расстановка оборудования,
            предварительный бюджет на стройку. На этом этапе ещё можно дёшево менять
            решения и пробовать варианты.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <img src={supervisionImg} alt="Авторский надзор" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={approvalImg} alt="Согласования" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            После утверждения концепции запускается проектная документация. Это
            формальные разделы, по которым потом проходит экспертиза и получаются
            согласования. Параллельно или следом готовится рабочая документация, по
            которой ведётся стройка.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            На стройке мы ведём авторский надзор. После завершения — сопровождение при
            получении санитарно-эпидемиологического заключения и медицинской лицензии.
            Конечный результат — работающая клиника, в которой можно легально оказывать
            медицинские услуги.
          </p>

        </div>
      </section>

      {/* Form 2 */}
      <section className="py-16 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="overview-form-2"
            variant="compact"
            title="Если по описанию процесса всё совпадает с вашей задачей"
            description="Оставьте номер — обсудим, на каком этапе вы находитесь и что нужно сделать дальше."
            subject="Сводная страница — форма 2"
          />
        </div>
      </section>

      {/* Block 6: Cases */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Примеры реализованных проектов
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <img src={caseIris1} alt="Ирис Краснодар" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={caseIris2} alt="Ирис Краснодар" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={caseIris3} alt="Ирис Краснодар" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={caseIris4} alt="Ирис Краснодар" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
          </div>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
            Клиника «Ирис» в Краснодаре
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Многопрофильная клиника с детским и взрослым отделениями. Мы прошли весь
            путь: концепция, проектная и рабочая документация, авторский надзор,
            сопровождение до получения лицензии. Подробнее — на
            <Link to="/cases/iris-krasnodar" className="text-accent underline ml-1">странице кейса</Link>.
          </p>

          <div className="grid grid-cols-3 gap-4 my-6">
            <img src={caseIrisMhk} alt="Ирис Махачкала" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={caseIrisMhk2} alt="Ирис Махачкала" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
            <img src={caseIrisMhk3} alt="Ирис Махачкала" className="rounded-2xl border border-border aspect-square object-cover" loading="lazy" />
          </div>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Клиника «Ирис» в Махачкале
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Аналогичный по объёму проект в другом регионе, со своей спецификой по
            нормативке и работе с местными надзорными органами. Подробнее — на
            <Link to="/cases/iris-makhachkala" className="text-accent underline ml-1">странице кейса</Link>.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground pt-4">
            Другие реализованные объекты
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Клиника эстетической медицины Mavie в Москве, стоматология в Санкт-Петербурге
            и многопрофильный центр в Краснодарском крае — три разных по масштабу и
            профилю объекта, прошедших путь от проекта до открытия.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <img src={caseMavie} alt="Mavie Москва" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={caseDental} alt="Стоматология СПб" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={caseMulti} alt="Многопрофильный центр" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <img src={clinicMri} alt="МРТ" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
            <img src={clinicXray} alt="Рентген" className="rounded-2xl border border-border aspect-[4/3] object-cover" loading="lazy" />
          </div>

        </div>
      </section>

      {/* Block 7: What we DON'T do */}
      <section className="pb-16 px-6 md:px-12 bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Что мы не делаем — честно
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Мы сознательно не берёмся за непрофильные задачи, даже когда нас просят. Это
            экономит время заказчику и не размывает экспертизу команды.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Мы не оформляем лицензии МЧС и не делаем проекты в области пожарной
            безопасности как отдельную услугу. Не занимаемся «чистой» логистикой из Китая
            в отрыве от проекта — поставка оборудования возможна только как часть
            проектного контракта. Не проектируем немедицинские объекты: офисы, кафе,
            квартиры. Если ваш запрос лежит за пределами этих рамок, мы сразу скажем об
            этом на консультации.
          </p>
        </div>
      </section>

      {/* Block 8: Contacts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Как связаться
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Самый быстрый способ — оставить номер в форме ниже. Перезвоним в течение
            рабочего дня. Можно также написать на почту или зайти в раздел
            <Link to="/contacts" className="text-accent underline ml-1">Контакты</Link> —
            там перечислены все способы связи и реквизиты.
          </p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Если хочется сначала почитать про конкретные услуги, открывайте
            <Link to="/services" className="text-accent underline ml-1">Услуги</Link>.
            Если интересно посмотреть проекты — раздел
            <Link to="/about" className="text-accent underline ml-1">О компании</Link>.
            Если нужны документы и нормативка — раздел
            <Link to="/documents" className="text-accent underline ml-1">Документы</Link>.
          </p>
        </div>
      </section>

      {/* Form 3 */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="overview-form-3"
            variant="compact"
            title="Финальная форма — спасибо, что дочитали"
            description="Оставьте номер, и мы свяжемся, чтобы обсудить ваш проект."
            subject="Сводная страница — форма 3"
          />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Overview;
