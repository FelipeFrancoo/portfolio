import { useEffect, useRef } from 'react';

// Declaração dos tipos globais
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaWavesProps {
  children?: React.ReactNode;
}

const VantaWaves = ({ children }: VantaWavesProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Inicializar Vanta Waves
    const initVanta = () => {
      if (!vantaRef.current || !window.VANTA || !window.VANTA.WAVES) return;

      // Destruir efeito anterior se existir
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }

      // Inicializar efeito Vanta WAVES com configurações personalizadas
      vantaEffect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb0b0b,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.90,
        zoom: 0.98
      });
    };

    // Aguardar um pouco para garantir que os scripts carregaram
    const timer = setTimeout(initVanta, 100);

    // Cleanup ao desmontar
    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="vanta-waves-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
};

export default VantaWaves;
