import React from "react";
import {
  Code2,
  Rocket,
  Heart,
  Coffee,
} from "lucide-react";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const stats = [
  { value: "10+",    label: "Projetos concluídos",    icon: "🚀" },
  { value: "10+",   label: "Tecnologias dominadas",  icon: "⚙️" },
  { value: "2",     label: "Linguagens backend",      icon: "🖥️" },
  { value: "1 ano+",label: "Experiência prática",    icon: "📅" },
];

const values = [
  {
    icon: <Code2 className="w-8 h-8 animate-icon-float" />,
    title: "Código Limpo",
    description: "Acredito na importância de escrever código legível, mantível e bem estruturado.",
  },
  {
    icon: <Rocket className="w-8 h-8 animate-icon-glow" />,
    title: "Inovação",
    description: "Sempre em busca das tecnologias mais recentes e melhores práticas do mercado.",
  },
  {
    icon: <Heart className="w-8 h-8 animate-icon-pulse" />,
    title: "Paixão",
    description: "Apaixonado por transformar ideias em experiências digitais incríveis.",
  },
  {
    icon: <Coffee className="w-8 h-8 animate-icon-float animation-delay-400" />,
    title: "Dedicação",
    description: "Comprometido em entregar sempre a melhor solução para cada projeto.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-dark-light/30">
      <div className="container-max mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão pela tecnologia
          </p>
        </div>

        {/* Texto + Tecnologias | Valores */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Esquerda: texto + tecnologias */}
          <div className="space-y-10 animate-fade-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">
                Desenvolvedor Fullstack
              </h3>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                Sou um desenvolvedor fullstack em início de carreira, com foco
                na criação de aplicações completas, do back-end ao front-end.
                Tenho trabalhado com Node.js e Java para o desenvolvimento de
                APIs robustas e bem estruturadas.
              </p>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                No front-end, utilizo React e TypeScript para construir
                interfaces modernas, responsivas e funcionais. Valorizo boas
                práticas de código, organização e aprendizado constante.
              </p>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                Acredito que a tecnologia tem o poder de transformar ideias em
                soluções reais. Estou sempre em busca de novos desafios para
                evoluir como desenvolvedor.
              </p>
            </div>

            {/* Ícones de tecnologias */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-portfolio-text-light">
                Tecnologias
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-portfolio-purple/20 bg-portfolio-dark/40 hover:border-portfolio-purple/50 hover:bg-portfolio-dark/70 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-[0.65rem] text-portfolio-text-muted group-hover:text-portfolio-text-light transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direita: valores */}
          <div className="animate-fade-in-right">
            <h4 className="text-2xl font-semibold text-portfolio-text-light mb-8">
              Meus Valores
            </h4>
            <div className="grid gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-portfolio-dark/50 rounded-lg border border-portfolio-purple/20 hover:border-portfolio-purple/40 transition-all duration-300 card-hover group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-lg text-white group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-portfolio-text-light mb-2">
                        {value.title}
                      </h5>
                      <p className="text-portfolio-text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center text-center p-6 rounded-xl border border-portfolio-purple/20 bg-portfolio-dark/40 hover:border-portfolio-purple/50 hover:bg-portfolio-dark/60 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <span className="text-3xl md:text-4xl font-bold font-poppins gradient-text mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-portfolio-text-muted leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;