import React from "react";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="particles-bg"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-r from-portfolio-blue to-portfolio-cyan rounded-full opacity-20 animate-float animation-delay-400"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-r from-portfolio-cyan to-portfolio-purple rounded-full opacity-20 animate-float animation-delay-800"></div>

      <div className="container-max mx-auto px-4 md:px-8 lg:px-16 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Title */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ paddingTop: "20px" }}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight"
              style={{ gap: "20px" }}
            >
              <span className="block text-portfolio-text-light">Olá, sou</span>
              <span className="gradient-text text-shadow">Ebert Palmeira</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-portfolio-text-muted font-light">
              Desenvolvedor
              <span className="gradient-text font-semibold">  Back-end Java | FullStack</span>
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in animation-delay-200">
            <p className="text-lg md:text-xl text-portfolio-text-muted leading-relaxed max-w-2xl mx-auto">
              Criando APIs robustas e experiências digitais incríveis com tecnologias modernas.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
            <a
              href="/ebert.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-purple/25 flex items-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Baixar CV
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border border-portfolio-purple/50 rounded-lg font-semibold text-portfolio-text-light hover:bg-portfolio-purple/10 transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-600">
            <a
              href="https://github.com/EbertPalmeira"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-portfolio-text-muted hover:text-portfolio-purple transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ebert-palmeira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-portfolio-text-muted hover:text-portfolio-blue transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in animation-delay-800">
            <button
              onClick={() => scrollToSection("about")}
              className="mt-8 p-2 text-portfolio-text-muted hover:text-portfolio-purple transition-colors animate-bounce"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
