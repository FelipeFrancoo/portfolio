import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { gsap, gsapConfig } from "@/hooks/use-gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const accentLine1Ref = useRef<HTMLDivElement>(null);
  const accentLine2Ref = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal para coordenar as animações
      const tl = gsap.timeline({ defaults: { ease: gsapConfig.ease.smooth } });

      // Animação do título - fade in + slide up
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: gsapConfig.duration.slow,
        }
      );

      // Animação do subtítulo com delay
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: gsapConfig.duration.normal,
        },
        "-=0.4"
      );

      // Animação do botão com scale
      tl.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: gsapConfig.duration.normal,
        },
        "-=0.3"
      );

      // Linhas geométricas aparecem com width animation
      tl.fromTo(
        accentLine1Ref.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: gsapConfig.duration.slow,
          ease: "power1.inOut",
        },
        "-=0.8"
      );

      tl.fromTo(
        accentLine2Ref.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: gsapConfig.duration.slow,
          ease: "power1.inOut",
        },
        "-=0.8"
      );

      // Elemento flutuante com fade in
      tl.fromTo(
        floatingRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: gsapConfig.duration.normal,
        },
        "-=0.5"
      );

      // Animação de flutuação contínua
      gsap.to(floatingRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Background shift sutil
      gsap.to(heroRef.current, {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative geometric-bg overflow-hidden"
      style={{ backgroundSize: "200% 200%", backgroundPosition: "0% 0%" }}
    >
      {/* Geometric accent lines */}
      <div
        ref={accentLine1Ref}
        className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-silver/20 to-transparent origin-left"
      />
      <div
        ref={accentLine2Ref}
        className="absolute bottom-1/4 right-0 w-48 h-[1px] bg-gradient-to-l from-transparent via-silver/20 to-transparent origin-right"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1
            ref={titleRef}
            className="font-space font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-foreground"
          >
            Construo experiências digitais{" "}
            <br className="hidden md:block" />
            que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-silver">encantam</span>
              <span className="absolute inset-0 blur-lg bg-silver/20 animate-glow-pulse" />
            </span>{" "}
            e funcionam
          </h1>

          <p
            ref={subtitleRef}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-inter font-light"
          >
            Desenvolvedor Full Stack júnior, transformo ideias complexas em interfaces minimalistas, modernas e inteligentes, sempre com atenção a cada detalhe visual e performance.
          </p>

          <div ref={buttonRef} className="pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="relative group bg-card hover:bg-accent text-foreground border border-border transition-all duration-300 hover:border-silver/50 hover:shadow-[0_0_20px_rgba(184,184,184,0.2)]"
            >
              Ver Projetos
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating element */}
      <div
        ref={floatingRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-silver/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
