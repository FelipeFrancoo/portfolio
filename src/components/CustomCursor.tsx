import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/use-gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const moveCursor = (e: MouseEvent) => {
      // Cursor principal (com lag, segue o mouse)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      // Ponto central (sem lag, segue imediatamente)
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Verificar se é um botão ou link
      const isButton = target.tagName === "BUTTON" || target.tagName === "A" || target.getAttribute("role") === "button";
      
      if (isButton) {
        gsap.to(cursor, {
          scale: 2,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Adicionar listeners para elementos interativos
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Ponto central - segue o mouse imediatamente */}
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed w-3 h-3 bg-gradient-to-br from-silver to-white rounded-full pointer-events-none z-[9999]"
        style={{
          left: "-6px",
          top: "-6px",
          boxShadow: "0 0 8px rgba(184, 184, 184, 0.6), inset 0 0 4px rgba(255, 255, 255, 0.3)",
        }}
      />
      
      {/* Anel externo - segue com lag (efeito elegante) */}
      <div
        ref={cursorRef}
        className="custom-cursor-ring fixed w-10 h-10 border-2 border-silver/60 rounded-full pointer-events-none z-[9999]"
        style={{
          left: "-20px",
          top: "-20px",
          background: "radial-gradient(circle at 30% 30%, rgba(184, 184, 184, 0.15), transparent)",
          boxShadow: "0 0 20px rgba(184, 184, 184, 0.2), inset 0 0 10px rgba(184, 184, 184, 0.1)",
        }}
      />
    </>
  );
};

export default CustomCursor;
