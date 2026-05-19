import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              WILDLIFE <span className="text-primary">DISCOVERED</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Small group wildlife photography tours across Canada's most breathtaking landscapes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Photography Tours
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tours/polar-bear-photography-tour" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Polar Bear Photography Tours
                </Link>
              </li>
              <li>
                <Link to="/tours/moose-photography-tours" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Moose Photography Tours
                </Link>
              </li>
              <li>
                <Link to="/tours/loon-photography-tours" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Loon Photography Tours
                </Link>
              </li>
              <li>
                <Link to="/tours/waterfowl-and-swan-photography-tours" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Waterfowl & Swan Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Get In Touch
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Interested in a photography tour? Reach out to plan your next adventure.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-block px-6 py-2.5 border border-primary text-primary text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="https://www.instagram.com/wildlife.discovered"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} Wildlife Discovered. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
