import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="font-space font-bold text-xl tracking-tight text-ice-white">
          Felipe<span className="text-silver">.</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {["inicio", "sobre", "projetos", "contato"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="relative text-sm font-inter text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-silver group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
