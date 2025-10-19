import { useEffect, useRef } from "react";
import { gsap, gsapConfig } from "@/hooks/use-gsap";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: gsapConfig.duration.normal,
        ease: gsapConfig.ease.smooth,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <p ref={contentRef} className="text-center text-muted-foreground text-sm font-inter font-light">
          © 2025 — Desenvolvido por{" "}
          <span className="text-silver font-medium">Felipe</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
