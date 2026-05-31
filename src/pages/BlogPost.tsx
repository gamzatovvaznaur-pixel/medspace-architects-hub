import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  ChevronRight,
  AlertTriangle,
  Info,
  CheckCircle2,
  Quote,
  BookOpen,
  ArrowRight,
  FileText,
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { blogPosts, getPostBySlug, type Block } from "@/data/blogPosts";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const CalloutIcon = ({ variant }: { variant: "warning" | "info" | "success" }) => {
  if (variant === "warning") return <AlertTriangle className="w-5 h-5" />;
  if (variant === "success") return <CheckCircle2 className="w-5 h-5" />;
  return <Info className="w-5 h-5" />;
};

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          id={block.id}
          className="scroll-mt-24 font-display text-2xl md:text-3xl font-semibold text-foreground mt-14 mb-5 leading-tight"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-base md:text-[17px] text-foreground/85 leading-[1.75] mb-5">
          {block.text}
        </p>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          key={i}
          className={`mb-6 space-y-2.5 text-foreground/85 text-base leading-relaxed ${
            block.ordered ? "list-decimal pl-6" : "list-none pl-0"
          }`}
        >
          {block.items.map((it, idx) => (
            <li key={idx} className={block.ordered ? "" : "flex gap-3 pl-0"}>
              {!block.ordered && (
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              )}
              <span>{it}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "callout": {
      const styles = {
        warning: "bg-destructive/5 border-destructive/30 text-destructive",
        info: "bg-accent/5 border-accent/30 text-accent",
        success: "bg-emerald-500/5 border-emerald-500/30 text-emerald-600",
      }[block.variant];
      return (
        <div key={i} className={`my-7 border-l-4 rounded-r-xl p-5 ${styles}`}>
          <div className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              <CalloutIcon variant={block.variant} />
            </div>
            <div>
              {block.title && (
                <div className="font-display font-semibold mb-1.5">{block.title}</div>
              )}
              <div className="text-foreground/85 text-[15px] leading-relaxed">{block.text}</div>
            </div>
          </div>
        </div>
      );
    }
    case "quote":
      return (
        <figure
          key={i}
          className="my-8 bg-secondary/40 border border-border rounded-2xl p-6 md:p-8"
        >
          <Quote className="w-6 h-6 text-accent mb-3" />
          <blockquote className="font-display text-lg md:text-xl text-foreground leading-relaxed italic">
            «{block.text}»
          </blockquote>
          {block.author && (
            <figcaption className="mt-4 text-sm text-muted-foreground font-mono tracking-wide">
              — {block.author}
            </figcaption>
          )}
        </figure>
      );
    case "table":
      return (
        <div key={i} className="my-7 overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                {block.headers.map((h, idx) => (
                  <th
                    key={idx}
                    className="text-left font-display font-semibold text-foreground px-4 py-3 border-b border-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, idx) => (
                <tr key={idx} className="even:bg-secondary/20">
                  {r.map((c, ci) => (
                    <td key={ci} className="px-4 py-3 border-b border-border text-foreground/85">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "norms":
      return (
        <div key={i} className="my-7 grid grid-cols-1 md:grid-cols-2 gap-3">
          {block.items.map((n, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-4 flex gap-3"
            >
              <FileText className="w-4 h-4 text-accent shrink-0 mt-1" />
              <div>
                <div className="font-mono text-xs text-foreground font-semibold mb-1">
                  {n.code}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{n.text}</div>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  const toc = useMemo(
    () =>
      post
        ? (post.blocks.filter((b) => b.type === "h2") as Array<{
            type: "h2";
            id: string;
            text: string;
          }>)
        : [],
    [post],
  );

  const related = useMemo(
    () => (post ? blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3) : []),
    [post],
  );

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <main className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="px-6 md:px-12 max-w-4xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Блог
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground truncate">{post.category}</span>
          </nav>
        </div>

        {/* Header */}
        <header className="px-6 md:px-12 max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="flex items-center gap-4 mb-5 text-[10px] font-mono tracking-widest uppercase">
              <span className="text-accent">{post.category}</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readingMinutes} мин чтения
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </motion.div>
        </header>

        {/* Lead */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-12">
          <div className="bg-accent/8 border-l-4 border-accent rounded-r-xl p-6 md:p-7">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-2">
              Кратко
            </span>
            <p className="text-foreground text-base md:text-lg leading-relaxed">{post.lead}</p>
          </div>
        </section>

        {/* TOC */}
        {toc.length > 0 && (
          <section className="px-6 md:px-12 max-w-4xl mx-auto mb-12">
            <div className="bg-secondary/40 border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-foreground">
                  Содержание
                </span>
              </div>
              <ol className="space-y-2">
                {toc.map((h, idx) => (
                  <li key={h.id} className="flex gap-3 text-sm">
                    <span className="font-mono text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${h.id}`}
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Article body */}
        <article className="px-6 md:px-12 max-w-4xl mx-auto">
          {post.blocks.map(renderBlock)}
        </article>

        {/* FAQ */}
        {post.faq.length > 0 && (
          <section className="px-6 md:px-12 max-w-4xl mx-auto mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="border border-border rounded-2xl bg-card px-5">
              {post.faq.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className={idx === post.faq.length - 1 ? "border-b-0" : ""}
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-[15px]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Author */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mt-16">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display font-semibold text-xl shrink-0">
              АГ
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-2">
                Автор
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Азнаур Гамзатов
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Руководитель проектной организации «МедПроект». 9 лет проектирует медицинские учреждения: клиники, стоматологии, диагностические центры, многопрофильные центры со стационарами. Сопровождение от концепции до получения СЭЗ и лицензии Росздравнадзора.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mt-12">
          <InlineCallbackForm
            variant="accent"
            title="Получить консультацию Азнаура Гамзатова по проектированию"
            description="Опишите ваш проект — перезвоним в течение рабочего дня и бесплатно разберём ваш случай: помещение, нормы, сроки, бюджет."
            subject={`Блог: ${post.title}`}
            id={`post-cta-${post.slug}`}
          />
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="px-6 md:px-12 max-w-7xl mx-auto mt-20">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Читайте также
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group bg-card border border-border rounded-2xl p-5 hover:border-accent/40 transition-colors"
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-3">
                    {r.category}
                  </span>
                  <h3 className="font-display font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-foreground">
                    Читать
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Все статьи блога
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <FooterSection />
    </div>
  );
};

export default BlogPost;
