import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import prarthana1 from "@/assets/prarthana1.jpeg";

const Hero = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-12
        bg-gradient-to-b from-[#f8f4ff] via-[#f1dfd1] to-[#f8f8f7]
        dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <span
                className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full
                bg-primary/10 text-primary backdrop-blur-md"
              >
                👋 Hello, I’m
              </span>

              <h1
                className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-4
                bg-gradient-to-r from-primary via-secondary to-primary
                bg-clip-text text-transparent tracking-tight"
              >
                Prarthana Tolmare
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">
                US{" "}
                <span className="font-semibold text-primary">
                  Technical Recruiter
                </span>
              </p>

              <p
                className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed
                max-w-xl mx-auto lg:mx-0"
              >
                I’m a US Technical Recruiter focused on connecting organizations
                with the right technical talent. I prioritize clear
                communication, efficient hiring processes, and a positive
                candidate experience driven by quality and long-term
                relationships.
              </p>

              <div className="flex justify-center lg:justify-start mb-10">
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  className="px-8 py-3 rounded-full font-medium
    border-2 border-primary text-primary
    hover:bg-primary hover:text-primary-foreground
    transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:prarthanatolmare371@gmail.com"
                  className="w-11 h-11 rounded-full bg-secondary
                  flex items-center justify-center
                  hover:bg-primary hover:text-primary-foreground
                  transition-all transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prarthana-tolmare-7040782b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary
                  flex items-center justify-center
                  hover:bg-primary hover:text-primary-foreground
                  transition-all transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative group cursor-pointer">
                <div
                  className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                  rounded-full overflow-hidden border-4 border-primary
                  shadow-2xl transition-all duration-500
                  group-hover:scale-105 group-hover:shadow-primary/40"
                >
                  <img
                    src={prarthana1}
                    alt="Prarthana Tolmare"
                    onClick={() => setIsImageOpen(true)}
                    className="w-full h-full object-cover
                    transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL */}

        </div>
      </section>

      {/* IMAGE MODAL */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/70 backdrop-blur-md px-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:opacity-80"
            >
              ✕
            </button>

            <img
              src={prarthana1}
              alt="Prarthana Tolmare"
              className="w-full max-h-[85vh] object-contain
              rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
