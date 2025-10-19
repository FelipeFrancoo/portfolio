import React from 'react';

interface ProfileFrameProps {
  src: string;
  alt: string;
  shape?: 'circle' | 'square';
  size?: number;
}

const ProfileFrame: React.FC<ProfileFrameProps> = ({
  src,
  alt,
  shape = 'circle',
  size = 200
}) => {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Moldura animada */}
      <div className={`absolute inset-0 ${shapeClass} border-2 border-gray-800 overflow-hidden`}>
        {/* Linha superior */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-glitch-line-1"></div>
        {/* Linha inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-glitch-line-2"></div>
        {/* Linha esquerda */}
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-glitch-line-3"></div>
        {/* Linha direita */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-glitch-line-4"></div>

        {/* Elementos glitch sutis */}
        <div className="absolute top-2 left-2 w-4 h-[1px] bg-cyan-400/50 animate-glitch-dot-1"></div>
        <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-purple-400/50 animate-glitch-dot-2"></div>
        <div className="absolute top-1/2 left-1 w-[1px] h-4 bg-blue-400/50 animate-glitch-dot-3"></div>
        <div className="absolute top-1/2 right-1 w-[1px] h-4 bg-cyan-400/50 animate-glitch-dot-4"></div>
      </div>

      {/* Imagem com fallback */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${shapeClass} relative z-10`}
        style={{ objectPosition: '15% 0%' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.svg'; // Fallback para placeholder se a imagem não carregar
        }}
      />

      {/* Overlay sutil */}
      <div className={`absolute inset-0 ${shapeClass} bg-gradient-to-br from-black/10 via-transparent to-black/5 pointer-events-none`}></div>
    </div>
  );
};

export default ProfileFrame;