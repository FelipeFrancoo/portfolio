import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger, gsapConfig } from "@/hooks/use-gsap";

const projects = [
  {
    title: "AgriCredit",
    description: "Aplicação web para simulação e análise de crédito agrícola. O sistema permite cadastrar áreas próprias e arrendadas, selecionar culturas (soja/milho), inserir custos, preços e dívidas",
    stack: ["React", "Next.js","TailwindCSS", "PostgreSQL"],
    demo: "https://agri-creditdevfelipe.vercel.app",
    code: "https://github.com/FelipeFrancoo/AgriCredit",
    image: "/projects/agriredit_1200x600.png",
  },
  {
    title: "Machine Tracker",
    description: "O Machine Tracker é um sistema de controle de máquina agrícola desenvolvido para gerenciar o empréstimo de máquinas de forma simples e organizada.",
    stack: ["React", "Next.js", "TailwindCSS", "PostgreSQL"],
    demo: "https://machine-trackerdevfelipe.vercel.app",
    code: "https://github.com/FelipeFrancoo/Machine-Tracker.git",
    image: "/projects/machine_tracker_1200x600.png",
  },
  {
    title: "NotaFlex",
    description: "Controle e criação de resumos de Notas Fiscais para facilitar o resumo manual feito semanalmente",
    stack: ["TypeScript", "Next.js", "TailwindCSS"],
    demo: "https://nota-flexdevfelipecom.vercel.app",
    code: "https://github.com/FelipeFrancoo/NotaFlex.git",
    image: "/projects/notaflex_1200x600.png"
  },
  {
    title: "Saldoo",
    description: "Um aplicativo web moderno de controle financeiro pessoal. Que permite gerenciar transações, categorias e visualizar gráficos de despesas, com autenticação de usuários e interface responsiva.",
    stack: ["React", "Vite", "Node.js"],
    demo: "https://saldoo-devfelipe.vercel.app/",
    code: "https://github.com/FelipeFrancoo/Saldoo.git",
    image: "/projects/saldoo_1200x600.png",
  },
  {
    title: "Bday Notifier",
    description: "Sistema de alertas em tempo real com calendário interativo e painel de aniversariantes. Feito pra times e empresas.",
    stack: ["React", "Next.js", "TailwindCSS", "Node.js"],
    demo: "https://bday-notifier.vercel.app",
    code: "https://github.com/FelipeFrancoo/BdayNotifier",
    image: "/projects/bday_notifier_1200x600.png",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const buttonsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: gsapConfig.duration.slow,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      // Animação dos cards com stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: gsapConfig.duration.normal,
          ease: gsapConfig.ease.smooth,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (key: string, isHovering: boolean) => {
    const button = buttonsRef.current.get(key);
    if (!button) return;

    const icon = button.querySelector('svg');
    
    gsap.to(button, {
      boxShadow: isHovering
        ? "0 0 15px rgba(0, 255, 255, 0.3)"
        : "0 0 0px rgba(0, 255, 255, 0)",
      duration: gsapConfig.duration.fast,
      ease: gsapConfig.ease.smooth,
    });

    if (icon) {
      gsap.to(icon, {
        scale: isHovering ? 1.15 : 1,
        rotation: isHovering ? 5 : 0,
        duration: gsapConfig.duration.fast,
        ease: gsapConfig.ease.smooth,
      });
    }
  };

  return (
    <section ref={sectionRef} id="projetos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="space-y-4 mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Destaques
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="space-y-8">
            {/* Featured Project - AgriCredit */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[0] = el;
              }}
              className="glass-effect rounded-lg overflow-hidden group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-2xl text-foreground group-hover:text-silver transition-colors">
                      {projects[0].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[0].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[0].title}-demo`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[0].title}-demo`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[0].title}-demo`, false)}
                      asChild
                    >
                      <a href={projects[0].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[0].title}-code`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[0].title}-code`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[0].title}-code`, false)}
                      asChild
                    >
                      <a href={projects[0].code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Project - Machine Tracker */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[1] = el;
              }}
              className="glass-effect rounded-lg overflow-hidden group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={projects[1].image}
                    alt={projects[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-2xl text-foreground group-hover:text-silver transition-colors">
                      {projects[1].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[1].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[1].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[1].title}-demo`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[1].title}-demo`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[1].title}-demo`, false)}
                      asChild
                    >
                      <a href={projects[1].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[1].title}-code`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[1].title}-code`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[1].title}-code`, false)}
                      asChild
                    >
                      <a href={projects[1].code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Project - NotaFlex */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[2] = el;
              }}
              className="glass-effect rounded-lg overflow-hidden group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-2xl text-foreground group-hover:text-silver transition-colors">
                      {projects[2].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[2].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[2].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[2].title}-demo`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[2].title}-demo`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[2].title}-demo`, false)}
                      asChild
                    >
                      <a href={projects[2].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[2].title}-code`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[2].title}-code`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[2].title}-code`, false)}
                      asChild
                    >
                      <a href={projects[2].code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Project - Saldoo */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[3] = el;
              }}
              className="glass-effect rounded-lg overflow-hidden group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-2xl text-foreground group-hover:text-silver transition-colors">
                      {projects[3].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[3].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[3].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[3].title}-demo`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[3].title}-demo`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[3].title}-demo`, false)}
                      asChild
                    >
                      <a href={projects[3].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[3].title}-code`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[3].title}-code`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[3].title}-code`, false)}
                      asChild
                    >
                      <a href={projects[3].code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Project - Bday Notifier */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[4] = el;
              }}
              className="glass-effect rounded-lg overflow-hidden group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,184,184,0.2)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={projects[4].image}
                    alt={projects[4].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-2xl text-foreground group-hover:text-silver transition-colors">
                      {projects[4].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[4].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[4].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-inter px-3 py-1 rounded-full bg-accent/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[4].title}-demo`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[4].title}-demo`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[4].title}-demo`, false)}
                      asChild
                    >
                      <a href={projects[4].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      ref={(el) => {
                        if (el) buttonsRef.current.set(`${projects[4].title}-code`, el);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-silver hover:text-foreground hover:bg-accent/50 transition-all"
                      onMouseEnter={() => handleButtonHover(`${projects[4].title}-code`, true)}
                      onMouseLeave={() => handleButtonHover(`${projects[4].title}-code`, false)}
                      asChild
                    >
                      <a href={projects[4].code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
