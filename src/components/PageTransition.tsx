import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/use-gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação inicial da página
      gsap.from(transitionRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }, transitionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={transitionRef} className="w-full">
      {children}
    </div>
  );
};

export default PageTransition;
