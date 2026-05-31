import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import { blogPosts } from "@/data/blogPosts";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const Blog = () => {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-6 md:px-12 mb-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent block mb-4">
                Блог МедПроект
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.05] mb-6">
                Проектирование клиник:
                <br />
                нормы, практика, цифры
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {blogPosts.length} экспертных материала о том, как пройти санитарно-эпидемиологическую экспертизу, получить лицензию и построить клинику без переделок. Опыт 100+ объектов от Азнаура Гамзатова.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 mt-10"
            >
              {categories.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...transition, delay: (i % 6) * 0.05 }}
                className="group"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                    <span className="text-accent">{post.category}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readingMinutes} мин
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-foreground">
                    Читать
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 mt-20">
          <div className="max-w-5xl mx-auto">
            <InlineCallbackForm
              variant="accent"
              title="Не нашли ответ в статьях?"
              description="Расскажите о вашем проекте — Азнаур Гамзатов лично разберёт ваш случай и даст рекомендации по проектированию и лицензированию."
              subject="Блог — заявка на консультацию"
              id="blog-cta"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Blog;
