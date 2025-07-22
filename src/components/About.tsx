import React from "react";
import {
  Code2,
  Rocket,
  Heart,
  Coffee,
  MessageCircle,
  ChartBar,
  Brain,
  Shield,
  Clock,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "React",
      level: 90,
      color: "from-portfolio-purple to-portfolio-blue",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "from-portfolio-blue to-portfolio-cyan",
    },
    {
      name: "JavaScript",
      level: 95,
      color: "from-portfolio-cyan to-portfolio-purple",
    },
    {
      name: "Tailwind CSS",
      level: 50,
      color: "from-portfolio-purple to-portfolio-blue",
    },
    {
      name: "Java",
      level: 60,
      color: "from-portfolio-cyan to-portfolio-purple",
    },
    {
      name: "Mysql",
      level: 70,
      color: "from-portfolio-purple to-portfolio-blue",
    },
    {
      name: "Next.js",
      level: 60,
      color: "from-portfolio-blue to-portfolio-cyan",
    },
    {
      name: "Node.js",
      level: 75,
      color: "from-portfolio-cyan to-portfolio-purple",
    },
  ];

  const values = [
    {
      icon: <Code2 className="w-8 h-8 animate-icon-float" />,
      title: "Código Limpo",
      description:
        "Acredito na importância de escrever código legível, maintível e bem estruturado.",
    },
    {
      icon: <Rocket className="w-8 h-8 animate-icon-glow" />,
      title: "Inovação",
      description:
        "Sempre em busca das tecnologias mais recentes e melhores práticas do mercado.",
    },
    {
      icon: <Heart className="w-8 h-8 animate-icon-pulse" />,
      title: "Paixão",
      description:
        "Apaixonado por transformar ideias em experiências digitais incríveis.",
    },
    {
      icon: (
        <Coffee className="w-8 h-8 animate-icon-float animation-delay-400" />
      ),
      title: "Dedicação",
      description:
        "Comprometido em entregar sempre a melhor solução para cada projeto.",
    },
  ];

  const softSkills = [
    {
      icon: <MessageCircle className="w-8 h-8 animate-icon-float" />,
      title: "Comunicação",
      subtitle: "Efetiva",
      description:
        "Sou uma pessoa comunicativa e transparente, sempre busco facilitar a compreensão e colaboração de todos.",
    },
    {
      icon: <ChartBar className="w-8 h-8 animate-icon-glow" />,
      title: "Trabalho em",
      subtitle: "Equipe",
      description:
        "Gosto de trabalhar em equipe, principalmente quando o compartilhamento de ideias para alcançar metas e resultados é incentivado.",
    },
    {
      icon: <Brain className="w-8 h-8 animate-icon-pulse" />,
      title: "Alta",
      subtitle: "Adaptabilidade",
      description:
        "Encaro mudanças com bastante flexibilidade e acredito que me adapto rápido a novas situações para sempre manter a produtividade e o desempenho.",
    },
    {
      icon: <Brain className="w-8 h-8 animate-icon-rotate" />,
      title: "Mente",
      subtitle: "Criativa",
      description:
        "Uso minha criatividade para desafiar o óbvio e o convencional, encontrando soluções eficazes e inovadoras.",
    },
    {
      icon: (
        <Shield className="w-8 h-8 animate-icon-glow animation-delay-400" />
      ),
      title: "Resiliência",
      subtitle: "Profissional",
      description:
        "Já enfrentei diversos bugs ao longo do caminho. E mesmo assim o objetivo sempre é adaptar a rota e entregar com qualidade.",
    },
    {
      icon: (
        <Clock className="w-8 h-8 animate-icon-float animation-delay-600" />
      ),
      title: "Gestão do",
      subtitle: "Tempo",
      description:
        "Planejo meu tempo de forma consciente, com foco em prazos e entregas, equilibrando produtividade e qualidade.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-portfolio-dark-light/30">
      <div className="container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão pela
            tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">
                Desenvolvedor Fullstack
              </h3>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                Sou um desenvolvedor fullstack em início de carreira, com foco
                na criação de aplicações completas, do back-end ao front-end.
                Tenho trabalhado com Node.js para o desenvolvimento de APIs e
                lógica de servidor, e estou expandindo meu conhecimento em Java
                para projetos mais estruturados.
              </p>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                No front-end, utilizo tecnologias como React e TypeScript para
                construir interfaces modernas, responsivas e funcionais.
                Valorizo boas práticas de código, organização e aprendizado
                constante em cada etapa do desenvolvimento.
              </p>
              <p className="text-portfolio-text-muted text-lg leading-relaxed">
                Acredito que a tecnologia tem o poder de transformar ideias em
                soluções reais. Estou sempre em busca de novos desafios para
                evoluir como desenvolvedor e criar experiências que gerem valor
                de verdade.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-portfolio-text-light">
                Principais Tecnologias
              </h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-portfolio-text-light font-medium">
                        {skill.name}
                      </span>
                      <span className="text-portfolio-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolio-dark rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-in-right">
            <h4 className="text-2xl font-semibold text-portfolio-text-light mb-8">
              Meus Valores
            </h4>
            <div className="grid gap-6">
              {values.map((value, index) => (
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

        {/* Soft Skills Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              <span className="gradient-text">Soft Skills</span>
            </h3>
            <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
              Habilidades interpessoais que me ajudam a ser um profissional
              completo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {softSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-portfolio-dark/50 rounded-lg border border-portfolio-purple/20 hover:border-portfolio-purple/40 transition-all duration-300 card-hover group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full text-white group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <h5 className="text-lg font-semibold text-portfolio-text-light">
                    {skill.title}
                  </h5>
                  <h6 className="text-xl font-bold gradient-text">
                    {skill.subtitle}
                  </h6>
                </div>
                <p className="text-portfolio-text-muted leading-relaxed text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
