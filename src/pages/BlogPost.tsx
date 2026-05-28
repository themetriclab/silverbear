import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import NotFound from "./NotFound";
import { blogPosts } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // For HTML posts, drop the duplicate leading <h1>, cover <img>, and reading-time
  // line since the page renders its own hero/title above.
  const htmlBody =
    post.format === "html"
      ? post.content.slice(Math.max(0, post.content.indexOf("<h2")))
      : "";

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${post.title} | Wildlife Discovered`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Wildlife Discovered" },
          publisher: {
            "@type": "Organization",
            name: "Wildlife Discovered",
          },
          mainEntityOfPage: `https://wildlifediscovered.com/blog/${post.slug}`,
        }}
      />
      <Navbar />

      {/* Hero image */}
      <section className="pt-24">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border"
          >
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="tracking-widest uppercase text-primary">
              {post.category}
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {post.readTime} min read
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-primary leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {post.format === "html" ? (
            <div
              className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-primary prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:text-lg prose-li:text-foreground/90 prose-li:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-ul:my-4 prose-ol:my-4 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: htmlBody }}
            />
          ) : (
            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-foreground/90 leading-relaxed mb-6 text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-all rounded-full"
            >
              Book a Photography Tour
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-8">
              More from the journal
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-widest uppercase text-primary mb-2">
                      {p.category}
                    </p>
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;