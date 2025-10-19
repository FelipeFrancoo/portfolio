import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Hook para animações na montagem do componente
export const useGSAP = (callback: () => void, dependencies: any[] = []) => {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    contextRef.current = gsap.context(callback);

    return () => {
      contextRef.current?.revert();
    };
  }, dependencies);

  return contextRef;
};

// Configurações padrão para animações
export const gsapConfig = {
  ease: {
    smooth: 'power2.out',
    elastic: 'elastic.out(1, 0.3)',
    bounce: 'back.out(1.7)',
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1,
  },
};
