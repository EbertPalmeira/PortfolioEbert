import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import img1 from "../imgs/chat2.png";
import img2 from "../imgs/abencoado3.png";

type Category = "all" | "backend" | "frontend" | "fullstack";

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  technologies: string[];
  category: Exclude<Category, "all">;
  githubUrl?: string;
  liveUrl?: string;
  useImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chat em Tempo Real",
    description:
      "Aplicativo de chat com mensagens em tempo real, interface moderna para comunicação ágil e eficiente.",
    emoji: "💬",
    gradient: "from-[#1e1b4b] to-[#0f4c75]",
    technologies: ["Socket.IO", "React.js", "Node.js", "TypeScript"],
    category: "fullstack",
    githubUrl: "https://github.com/EbertPalmeira/Chat",
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7291167891448545281/",
   
  },
  {
    id: 2,
    title: "Organizador de Loja",
    description:
      "Sistema de gestão de estoque com controle de produtos, vendas e relatórios em tempo real.",
    emoji: "🛒",
    gradient: "from-[#0f3460] to-[#533483]",
    technologies: ["Supabase", "React.js", "Node.js", "Socket.io", "TypeScript"],
    category: "fullstack",
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7332738717578592256/",
    
  },
  {
    id: 3,
    title: "Extreme Fit API",
    description:
      "API REST completa para gestão de academia. Alunos, professores, treinos e exercícios com autenticação JWT e testes unitários.",
    emoji: "🏋️",
    gradient: "from-[#1a1a2e] to-[#16213e]",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Flyway"],
    category: "backend",
    githubUrl: "https://github.com/EbertPalmeira/ExtremeFit",
  },
  {
    id: 4,
    title: "Sistema Clínica",
    description:
      "Painel de senhas para clínica médica com chamada de consultórios em TV, impressão de senhas e gestão de filas em tempo real.",
    emoji: "🏥",
    gradient: "from-[#0d2137] to-[#1a4a6e]",
    technologies: ["React.js", "Socket.IO", "Node.js", "TypeScript"],
    category: "fullstack",
    githubUrl: "https://github.com/EbertPalmeira/BackEndClinic",
  },
  {
    id: 5,
    title: "Dashboard Financeiro",
    description:
      "Dashboard com visualização clara de receitas, despesas e indicadores para controle financeiro.",
    emoji: "📊",
    gradient: "from-[#134e4a] to-[#0f766e]",
    technologies: ["React", "Material-UI", "Styled Components"],
    category: "frontend",
    githubUrl: "https://github.com/EbertPalmeira/dashboardFinanceiro",
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7236910703205355521/",
  },
  {
    id: 6,
    title: "Cadastro de Pacientes",
    description:
      "Sistema de cadastro de pacientes com armazenamento seguro e gerenciamento eficiente de dados clínicos.",
    emoji: "🏨",
    gradient: "from-[#1e3a5f] to-[#2d1b69]",
    technologies: ["React", "MySQL", "Node.js", "Styled-components"],
    category: "fullstack",
    githubUrl:
      "https://github.com/EbertPalmeira/Projeto-cadastro-de-pacientes",
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7233233472801112064/",
  },
];

const filters: { label: string; value: Category; icon: string }[] = [
  { label: "Todos", value: "all", icon: "✦" },
  { label: "Back-end", value: "backend", icon: "⚙" },
  { label: "Front-end", value: "frontend", icon: "🎨" },
  { label: "FullStack", value: "fullstack", icon: "⚡" },
];

const badgeStyles: Record<Exclude<Category, "all">, string> = {
  backend:
    "bg-portfolio-purple/10 text-purple-300 border border-portfolio-purple/30",
  frontend:
    "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
  fullstack:
    "bg-blue-600/10 text-blue-300 border border-blue-600/30",
};

const badgeLabels: Record<Exclude<Category, "all">, string> = {
  backend: "Back-end",
  frontend: "Front-end",
  fullstack: "FullStack",
};

const Projects = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const countLabel = () => {
    if (active === "all") return `${filtered.length} projetos`;
    return `${filtered.length} projeto(s) ${badgeLabels[active]}`;
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-max mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105
                ${
                  active === f.value
                    ? "bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white border-transparent shadow-lg shadow-portfolio-purple/20"
                    : "border-portfolio-purple/20 text-portfolio-text-muted hover:border-portfolio-purple/50 hover:text-portfolio-text-light"
                }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        {/* Contagem */}
        <p className="text-center text-portfolio-text-muted text-sm mb-10 tracking-wide">
          {countLabel()}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center text-portfolio-text-muted py-20">
            Nenhum projeto nessa categoria ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className="group bg-portfolio-dark-light rounded-xl overflow-hidden border border-portfolio-purple/20 hover:border-portfolio-purple/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-portfolio-purple/10 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Imagem ou placeholder */}
                {project.useImage ? (
                  <img
                    src={project.useImage}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl`}
                  >
                    {project.emoji}
                  </div>
                )}

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-poppins font-semibold text-portfolio-text-light group-hover:text-portfolio-purple transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <span
                      className={`text-[0.65rem] font-semibold uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${badgeStyles[project.category]}`}
                    >
                      {badgeLabels[project.category]}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-portfolio-text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-portfolio-dark border border-portfolio-purple/25 text-portfolio-text-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-portfolio-text-muted hover:text-portfolio-purple transition-colors px-3 py-1.5 rounded-lg border border-portfolio-purple/20 hover:border-portfolio-purple/40"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-white px-3 py-1.5 rounded-lg bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-portfolio-text-muted mb-6">
            Interessado em ver mais projetos ou colaborar?
          </p>
          <a
            href="https://github.com/EbertPalmeira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            <Github className="w-5 h-5" />
            Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;