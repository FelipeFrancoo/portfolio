import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo e integração de pagamentos",
    stack: ["Next.js", "Stripe", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Manager Pro",
    description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
    stack: ["React", "Socket.io", "Node.js"],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo usando IA com interface intuitiva",
    stack: ["TypeScript", "OpenAI", "TailwindCSS"],
    demo: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-32 relative geometric-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16 animate-fade-in">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Projetos Selecionados
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-effect p-6 rounded-lg group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="font-space font-semibold text-xl text-foreground group-hover:text-silver transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all group/btn"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all group/btn"
                      asChild
                    >
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
