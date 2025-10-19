import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative geometric-bg overflow-hidden"
    >
      {/* Geometric accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-silver/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-48 h-[1px] bg-gradient-to-l from-transparent via-silver/20 to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-foreground">
            Construo interfaces que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-silver">unem</span>
              <span className="absolute inset-0 blur-lg bg-silver/20 animate-glow-pulse" />
            </span>{" "}
            estética e tecnologia
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-inter font-light">
            Desenvolvedor Full Stack especializado em criar experiências digitais
            modernas, performáticas e visualmente impactantes
          </p>

          <div className="pt-4">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-[1px] h-16 bg-gradient-to-b from-silver/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
