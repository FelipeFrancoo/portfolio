import { Code2, Database, Globe, Palette } from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Code2 },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "TailwindCSS", icon: Palette },
  { name: "Framer Motion", icon: Palette },
];

const About = () => {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-16 animate-fade-in">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Sobre mim
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 animate-slide-in">
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                Desenvolvedor Full Stack com paixão por criar interfaces que combinam
                design minimalista com tecnologia de ponta. Especializado em transformar
                ideias complexas em experiências digitais intuitivas e elegantes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                Minha abordagem foca em código limpo, performance otimizada e atenção
                meticulosa aos detalhes visuais. Cada projeto é uma oportunidade de
                elevar o padrão de qualidade.
              </p>
            </div>

            <div className="animate-fade-in">
              <h3 className="font-space font-semibold text-xl mb-8 text-foreground">
                Stack Tecnológica
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass-effect p-6 rounded-lg group hover:border-silver/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,184,184,0.15)]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-6 h-6 text-silver mb-3 group-hover:scale-110 transition-transform" />
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
