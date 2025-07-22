import React, { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-portfolio-dark/90 backdrop-blur-md border-b border-portfolio-purple/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="gradient-text font-poppins">Ebert</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-portfolio-text-light hover:text-portfolio-purple transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-portfolio-text-light hover:text-portfolio-purple transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-portfolio-text-light hover:text-portfolio-purple transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-portfolio-text-light hover:text-portfolio-purple transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/EbertPalmeira"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-portfolio-text-muted hover:text-portfolio-purple transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ebert-palmeira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-portfolio-text-muted hover:text-portfolio-blue transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-portfolio-text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-portfolio-dark-light border-b border-portfolio-purple/20 p-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-portfolio-text-light hover:text-portfolio-purple transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-portfolio-text-light hover:text-portfolio-purple transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-portfolio-text-light hover:text-portfolio-purple transition-colors py-2"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-portfolio-text-light hover:text-portfolio-purple transition-colors py-2"
            >
              Contato
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-portfolio-purple/20">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-text-muted hover:text-portfolio-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-text-muted hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@ebertdeveloper.com"
                className="p-2 text-portfolio-text-muted hover:text-portfolio-cyan transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
