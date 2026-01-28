import { Heart, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0e1320] text-white px-6 pt-14 pb-8">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">
              Prarthana Tolmare
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-sm">
              US Technical Recruiter focused on people-first hiring, meaningful
              connections, and helping organizations grow with the right talent.
            </p>
            <p className="text-white/60 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400" /> purpose &
              care
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold remind mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="mailto:prarthanatolmare371@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur
                flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground
                transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prarthana-tolmare-7040782b1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur
                flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground
                transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-xs">
            © {currentYear} Prarthana Tolmare. All rights reserved ·{" "}
            <a
              href="https://www.linkedin.com/in/tejasmehar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              Designed & Developed by Tejas Mehar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
