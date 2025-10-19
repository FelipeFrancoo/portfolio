import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { gsap, gsapConfig } from "@/hooks/use-gsap";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLAnchorElement[]>([]);

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
          toggleActions: "play none none none",
        },
      });

      // Animação do conteúdo da esquerda
      gsap.from(leftContentRef.current, {
        opacity: 0,
        x: -50,
        duration: gsapConfig.duration.normal,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animação dos ícones sociais
      socialIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        gsap.from(icon, {
          opacity: 0,
          scale: 0,
          duration: gsapConfig.duration.fast,
          ease: gsapConfig.ease.bounce,
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSocialIconHover = (index: number, isHovering: boolean) => {
    const icon = socialIconsRef.current[index];
    if (!icon) return;

    const svg = icon.querySelector('svg');

    gsap.to(icon, {
      scale: isHovering ? 1.1 : 1,
      rotation: isHovering ? 5 : 0,
      duration: gsapConfig.duration.fast,
      ease: gsapConfig.ease.smooth,
    });

    if (svg) {
      gsap.to(svg, {
        rotation: isHovering ? -5 : 0,
        duration: gsapConfig.duration.fast,
        ease: gsapConfig.ease.smooth,
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/FelipeFrancoo", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/felipe-franco-b33ba12b4", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox?compose=new", label: "Email" },
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className="space-y-4 mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Vamos conversar
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div ref={leftContentRef} className="space-y-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tem um projeto em mente ou quer discutir oportunidades?
                Ficarei feliz em conversar.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-inter">
                  Conecte-se comigo:
                </p>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        ref={(el) => {
                          if (el) socialIconsRef.current[index] = el;
                        }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-silver/50 hover:shadow-[0_0_20px_rgba(184,184,184,0.2)] transition-all duration-300 group"
                        aria-label={social.label}
                        onMouseEnter={() => handleSocialIconHover(index, true)}
                        onMouseLeave={() => handleSocialIconHover(index, false)}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
