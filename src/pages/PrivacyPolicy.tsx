import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const SITE_URL = "https://silverbearphototours.com";
const CONTACT_EMAIL = "erik@silverbearphototours.com";
const LAST_UPDATED = "June 27, 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-display font-bold text-foreground mb-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Privacy Policy | Silver Bear Photo Tours"
        description="How Silver Bear Photo Tours collects, uses, and protects the information you share through our contact and booking inquiry forms."
        path="/privacy-policy"
      />
      <Navbar />

      <section className="pt-40 pb-16 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-10">
            Silver Bear Photo Tours ("we", "us", "our") respects your privacy. This policy
            explains what information we collect through this website, how we use it, and the
            choices you have. By using our contact or inquiry forms, you agree to the practices
            described below.
          </p>

          <Section title="Information We Collect">
            <p>
              We only collect the information you choose to provide when you submit our contact
              or booking inquiry form. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (optional)</li>
              <li>Your group size (optional)</li>
              <li>The tour you're interested in</li>
              <li>Any message or details you include in your inquiry</li>
            </ul>
            <p>
              We do not require you to create an account, and we do not knowingly collect
              information from children.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information you submit solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiry and answer your questions</li>
              <li>Provide details, availability, and pricing for our photography tours</li>
              <li>Arrange and coordinate any tour booking you request</li>
            </ul>
            <p>
              When you submit the form, your details are delivered to us by email so we can
              reply to you directly.
            </p>
          </Section>

          <Section title="Sharing Your Information">
            <p>
              We do not sell, rent, or trade your personal information. We do not share it with
              third parties for marketing purposes. Your information may be processed by the
              service providers that operate our website and email delivery strictly for the
              purpose of transmitting your inquiry to us.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We keep inquiry messages only as long as needed to respond to you and to manage any
              resulting booking. You may ask us to delete your information at any time.
            </p>
          </Section>

          <Section title="Cookies & Analytics">
            <p>
              Our site may use basic cookies or analytics to understand how visitors use the
              website and to improve it. This data is aggregated and is not used to personally
              identify you.
            </p>
          </Section>

          <Section title="Your Choices & Rights">
            <p>
              You can request access to, correction of, or deletion of the personal information
              you've shared with us. To make a request, email us at the address below.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we handle your
              information, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <p className="text-muted-foreground text-sm">
            This policy applies to {SITE_URL} and the inquiry forms on this website. We may
            update it from time to time; the "last updated" date above reflects the most recent
            revision.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;