import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Send, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [selectedTour, setSelectedTour] = useState("");

  useEffect(() => {
    const tourParam = searchParams.get("tour");
    if (tourParam) {
      setSelectedTour(tourParam);
    }
  }, [searchParams]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Plan Your <span className="text-primary">Adventure</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to capture the wild? Whether you have questions about a specific tour
              or want a custom photography experience, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a question about our wildlife photography tours? Looking for a
                private or custom experience? Fill out the form and we'll get back
                to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "wildifediscovered@outlook.com",
                  href: "mailto:wildifediscovered@outlook.com",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6">
              {[
                { stat: "500+", label: "Happy clients" },
                { stat: "5", label: "Unique tours" },
                { stat: "10+", label: "Years experience" },
                { stat: "100%", label: "Satisfaction" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-display font-bold text-primary">
                    {item.stat}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  We've received your inquiry and will get back to you within 24 hours.
                  In the meantime, explore our tours for more inspiration.
                </p>
                <Button
                  className="mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-xl p-8 md:p-10 space-y-6"
              >
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    Inquiry Form
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fields marked with * are required
                  </p>
                </div>

                {/* Tour Selection */}
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    <Camera className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                    Which tour interests you?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tours.map((tour) => (
                      <button
                        key={tour.slug}
                        type="button"
                        onClick={() => setSelectedTour(tour.slug)}
                        className={`text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                          selectedTour === tour.slug
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <span className="block font-medium">{tour.title}</span>
                        <span className="block text-xs mt-0.5 opacity-70">
                          {tour.month} · {tour.location}
                        </span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSelectedTour("custom")}
                      className={`text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                        selectedTour === "custom"
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <span className="block font-medium">General Inquiry</span>
                      <span className="block text-xs mt-0.5 opacity-70">
                        Questions · Feedback · Other
                      </span>
                    </button>
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                {/* Phone & Group Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      maxLength={20}
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Group Size
                    </label>
                    <Input
                      type="number"
                      min={1}
                      max={20}
                      placeholder="Number of people"
                      value={formData.groupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, groupSize: e.target.value })
                      }
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell us about your photography goals, preferred dates, experience level, or any questions you have..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 text-sm tracking-wider uppercase">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
