import { Link } from "react-router-dom";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Документ
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-8">
            Политика обработки персональных данных
          </h1>

          <div className="prose prose-neutral max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с
              требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
              обработки персональных данных и меры по обеспечению их безопасности, предпринимаемые оператором сайта
              «МедПроект» (далее — Оператор).
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">1. Общие положения</h2>
            <p>
              Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и
              свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на
              неприкосновенность частной жизни, личную и семейную тайну.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">
              2. Цели обработки персональных данных
            </h2>
            <p>
              Оператор обрабатывает персональные данные пользователя (имя, номер телефона, адрес электронной почты,
              сведения о проекте) в следующих целях: связь с пользователем для предоставления консультаций, обработки
              заявок и предложений, предоставления информации об услугах Оператора.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">
              3. Правовые основания обработки
            </h2>
            <p>
              Правовыми основаниями обработки персональных данных являются согласие пользователя, выраженное путём
              заполнения и отправки форм на сайте, а также договоры, заключаемые между Оператором и пользователем.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">
              4. Условия обработки и хранения
            </h2>
            <p>
              Обработка персональных данных осуществляется с соблюдением принципов и правил, предусмотренных
              законодательством РФ. Персональные данные хранятся в течение срока, необходимого для достижения целей
              обработки, или до отзыва согласия пользователем.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">
              5. Права субъекта персональных данных
            </h2>
            <p>
              Пользователь имеет право на получение информации, касающейся обработки его персональных данных, на их
              уточнение, блокирование или уничтожение в случае неполноты, устаревания, неточности либо незаконности
              обработки, а также на отзыв согласия на обработку.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">6. Контактная информация</h2>
            <p>
              По вопросам обработки персональных данных вы можете обратиться по электронной почте:{" "}
              <a href="mailto:med-project@bk.ru" className="text-accent hover:underline">
                med-project@bk.ru
              </a>{" "}
              или по телефону{" "}
              <a href="tel:+79182633627" className="text-accent hover:underline">
                +7 (918) 263-36-27
              </a>
              .
            </p>

            <p className="text-sm text-muted-foreground mt-12">
              Отправляя любую форму на сайте, пользователь подтверждает своё согласие с настоящей Политикой и даёт
              согласие на обработку персональных данных в указанных целях.
            </p>

            <div className="pt-8">
              <Link to="/" className="text-accent hover:underline text-sm font-display">
                ← Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Privacy;
