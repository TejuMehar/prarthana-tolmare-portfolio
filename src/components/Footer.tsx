import { Heart, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand & Message */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aditi Yadav</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Frontend Developer passionate about creating meaningful solutions 
              and building connections through technology.
            </p>
            <p className="text-background/60 text-xs">
              Made with <Heart className="inline w-3 h-3 text-red-400" /> and lots of curiosity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-background/80 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:aditiyadav2405@gmail.com"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/aditi-yadav2405"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Aditi-y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="text-background/60 hover:text-background text-xs transition-colors"
              >
                ↑ Back to top
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-background/60 text-xs">
            © {currentYear} Aditi Ashok Yadav. Designed & built with passion for meaningful connections.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;