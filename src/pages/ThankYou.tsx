import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const ThankYou = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Thank You | Silver Bear Photo Tours"
      description="Thanks for reaching out to Silver Bear Photo Tours. Erik will be in touch soon."
      path="/thank-you"
      noindex
    />
    <Navbar />
    <section className="relative pt-40 pb-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="relative max-w-2xl mx-auto text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Message Received
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Thank You
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Your inquiry is on its way to Erik. He personally reads every message and will get back to
          you soon, usually within a day or two. Check your inbox (and your spam folder, just in case).
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/tours">Browse Tours</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">Read the Blog</Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ThankYou;
