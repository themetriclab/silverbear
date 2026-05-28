import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const latest = sorted.slice(0, 3);
  const categories = Array.from(new Set(sorted.map((p) => p.category)));

  const PostCard = ({ post, i }: { post: (typeof sorted)[number]; i: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all h-full"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {post.readTime} min read
            </span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Estimated reading time: {post.readTime} minutes
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-medium">
            Read article <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog | Wildlife Discovered Journal"
        description="Field notes, gear reviews, and ethical wildlife photography insights from our expeditions across Canada — polar bears, moose, loons, and more."
        path="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Wildlife Discovered Journal",
          url: "https://wildlifediscovered.com/blog",
          blogPost: sorted.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            image: p.image,
            url: `https://wildlifediscovered.com/blog/${p.slug}`,
          })),
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary mb-4">
              The Wildlife Discovered Journal
            </p>
            <h1 className="font-display text-5xl sm:text-7xl text-primary leading-none mb-6">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Field notes, gear reviews, and ethical wildlife photography
              insights from our expeditions across Canada's wild places.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-3xl text-foreground">Latest</h2>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Most Recent
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((post, i) => (
              <PostCard key={post.slug} post={post} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Grid by category */}
      {categories.map((cat) => {
        const inCat = sorted.filter((p) => p.category === cat);
        return (
          <section key={cat} className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-3xl text-foreground">{cat}</h2>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {inCat.length} {inCat.length === 1 ? "post" : "posts"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {inCat.map((post, i) => (
                  <PostCard key={post.slug} post={post} i={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
};

export default Blog;