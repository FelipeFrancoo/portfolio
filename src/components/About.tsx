import { useEffect, useRef } from "react";
import { Code2, Database, Globe, Palette, Container } from "lucide-react";
import { gsap, gsapConfig } from "@/hooks/use-gsap";

const skills = [
  { name: "Node.js", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "Docker", icon: Container },
  { name: "PostgreSQL", icon: Database },
  { name: "TailwindCSS", icon: Palette },
  { name: "Bootstrap", icon: Palette },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -50,
        duration: gsapConfig.duration.slow,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animação do texto
      gsap.from(textRef.current, {
        opacity: 0,
        x: -30,
        duration: gsapConfig.duration.normal,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animação do título de skills
      gsap.from(skillsRef.current?.querySelector('h3'), {
        opacity: 0,
        x: 30,
        duration: gsapConfig.duration.normal,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animação dos cards de skills
      skillCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: gsapConfig.duration.normal,
          ease: gsapConfig.ease.bounce,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.08,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSkillHover = (index: number, isHovering: boolean) => {
    const card = skillCardsRef.current[index];
    if (!card) return;

    const icon = card.querySelector('svg');
    
    gsap.to(card, {
      y: isHovering ? -5 : 0,
      scale: isHovering ? 1.05 : 1,
      duration: gsapConfig.duration.fast,
      ease: gsapConfig.ease.smooth,
    });

    if (icon) {
      gsap.to(icon, {
        rotation: isHovering ? 5 : 0,
        scale: isHovering ? 1.1 : 1,
        duration: gsapConfig.duration.fast,
        ease: gsapConfig.ease.smooth,
      });
    }
  };

  return (
    <section ref={sectionRef} id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={titleRef} className="space-y-4 mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Sobre mim
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div ref={textRef} className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                Sou desenvolvedor Full Stack júnior, apaixonado por criar interfaces que misturam design minimalista com tecnologia de ponta. Trabalho em uma empresa do ramo do agro, onde aprendi a aplicar tecnologias para otimização de processos e implantação de soluções com inteligência artificial.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                Gosto de tornar a tecnologia acessível e criar experiências digitais que sejam intuitivas e agradáveis no dia a dia dos usuários. Adoro explorar ferramentas de IA e programar com inteligência artificial para deixar meus projetos mais inteligentes e interessantes. Cada projeto é uma oportunidade de aprender algo novo, se desafiar e fazer algo que realmente faça sentido.
              </p>
            </div>

            <div ref={skillsRef}>
              <h3 className="font-space font-semibold text-xl mb-8 text-foreground">
                Ferramentas de Desenvolvimento
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      ref={(el) => {
                        if (el) skillCardsRef.current[index] = el;
                      }}
                      className="glass-effect p-6 rounded-lg group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,184,184,0.15)]"
                      onMouseEnter={() => handleSkillHover(index, true)}
                      onMouseLeave={() => handleSkillHover(index, false)}
                    >
                      <Icon className="w-6 h-6 text-silver mb-3" />
                      <p className="font-inter text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
