import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-portfolio-dark border-t border-portfolio-purple/20">
      <div className="container-max mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-portfolio-text-muted">© 2025 Ebert Palmeira</p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 bg-portfolio-dark-light border border-portfolio-purple/30 rounded-lg text-portfolio-text-light hover:border-portfolio-purple/60 hover:text-portfolio-purple transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
