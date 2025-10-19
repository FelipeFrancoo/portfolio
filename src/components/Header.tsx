import { useState, useEffect, useRef } from "react";
import { gsap } from "@/hooks/use-gsap";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        
        // Animação do header ao rolar
        gsap.to(headerRef.current, {
          backgroundColor: isScrolled ? "rgba(13, 13, 13, 0.8)" : "rgba(13, 13, 13, 0)",
          paddingTop: isScrolled ? "12px" : "20px",
          paddingBottom: isScrolled ? "12px" : "20px",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkHover = (index: number, isHovering: boolean) => {
    const link = linksRef.current[index];
    if (!link) return;

    gsap.to(link.querySelector('button'), {
      y: isHovering ? -2 : 0,
      color: isHovering ? "#eaeaea" : "#737373",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(link.querySelector('.link-underline'), {
      scaleX: isHovering ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          {`<Felipe/>`}

        <ul className="hidden md:flex items-center gap-8">
          {["inicio", "sobre", "projetos", "contato"].map((item, index) => (
            <li
              key={item}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              onMouseEnter={() => handleLinkHover(index, true)}
              onMouseLeave={() => handleLinkHover(index, false)}
            >
              <button
                onClick={() => scrollToSection(item)}
                className="relative text-sm font-inter text-muted-foreground transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="link-underline absolute bottom-0 left-0 w-full h-[1px] bg-silver origin-left scale-x-0" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
