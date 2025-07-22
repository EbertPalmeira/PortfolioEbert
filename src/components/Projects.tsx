import React from "react";
import { ExternalLink, Github, Code, Palette, Database } from "lucide-react";
import img1 from "../imgs/chat2.png";
import img2 from "../imgs/abencoado3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chat ",
      description:
        "Aplicativo de chat com mensagens em tempo real, interface moderna para comunicação ágil e eficiente.",
      image: img1,
      technologies: [
        "Socket.IO",
        "TypeScript",
        "React.js",
        "Node.js",
        "Typescript",
      ],
      githubUrl: "https://github.com/EbertPalmeira/Chat",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7291167891448545281/?originTrackingId=IkRANBJrQAWVWEAhGa5xyQ%3D%3D",
      featured: true,
    },
    {
      id: 2,
      title: "Organizador de Loja",
      description:
        "Aplicativo para organização de produtos e prateleiras com controle visual e atualização em tempo real. Ideal para estoquistas e gerentes de loja.",
      image: img2,
      technologies: [
        "Supabase",
        "React.js",
        "Node.js",
        "Typescript",
        "Socket.io",
      ],
      // githubUrl: "",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7332738717578592256/?originTrackingId=vV9wEBsmRLub%2BX%2BQeIDB9Q%3D%3D",
      featured: true,
    },
    {
      id: 3,
      title: "Cadastro de Pacientes",
      description:
        "Sistema de cadastro de pacientes com armazenamento seguro, acesso rápido às informações e gerenciamento eficiente de dados clínicos.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Mysql", "Styled-components", "Node.js"],
      githubUrl:
        "https://github.com/EbertPalmeira/Projeto-cadastro-de-pacientes",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7233233472801112064/?originTrackingId=XfWjfTifSnSc%2BX8P%2BXWxgg%3D%3D",
      featured: false,
    },
    {
      id: 4,
      title: "Dashboard Financeiro",
      description:
        "Dashboard financeiro com visualização clara de receitas, despesas e indicadores em tempo real para controle total das finanças.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Material-UI", "Styled Components"],
      githubUrl: "https://github.com/EbertPalmeira/dashboardFinanceiro",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7236910703205355521/?originTrackingId=RVTERgAaR%2B29uluQVrXH6g%3D%3D",
      featured: false,
    },
  ];

  const getTechIcon = (tech: string) => {
    if (tech.includes("React") || tech.includes("Next") || tech.includes("Vue"))
      return <Code className="w-4 h-4" />;
    if (tech.includes("CSS") || tech.includes("Tailwind"))
      return <Palette className="w-4 h-4" />;
    if (
      tech.includes("MongoDB") ||
      tech.includes("PostgreSQL") ||
      tech.includes("Firebase")
    )
      return <Database className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-portfolio-text-light mb-8 text-center">
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-portfolio-dark-light rounded-xl overflow-hidden border border-portfolio-purple/20 hover:border-portfolio-purple/40 transition-all duration-300 card-hover animate-fade-in ${
                  index % 2 === 0
                    ? "animation-delay-200"
                    : "animation-delay-400"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-64 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-portfolio-text-light mb-3 group-hover:text-portfolio-purple transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-3 py-1 bg-portfolio-dark rounded-full text-sm text-portfolio-text-light border border-portfolio-purple/30"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-portfolio-text-muted hover:text-portfolio-purple transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-lg hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-text-light mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-portfolio-dark-light rounded-lg p-6 border border-portfolio-purple/20 hover:border-portfolio-purple/40 transition-all duration-300 card-hover animate-fade-in animation-delay-${
                  (index + 1) * 200
                }`}
              >
                <h4 className="text-lg font-semibold text-portfolio-text-light mb-3 group-hover:text-portfolio-purple transition-colors">
                  {project.title}
                </h4>
                <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-portfolio-dark rounded text-xs text-portfolio-text-light border border-portfolio-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-portfolio-text-muted">
                      +{project.technologies.length - 3} mais
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-portfolio-text-muted hover:text-portfolio-purple transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-portfolio-text-muted hover:text-portfolio-cyan transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

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
