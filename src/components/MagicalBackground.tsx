import React from 'react';

interface MagicalBackgroundProps {
  children: React.ReactNode;
  variant?: 'hero' | 'about' | 'default';
  className?: string;
}

const MagicalBackground: React.FC<MagicalBackgroundProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const particles = Array.from({ length: 8 }, (_, i) => i);

  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'magical-bg min-h-screen';
      case 'about':
        return 'magical-bg relative';
      default:
        return 'relative';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      {/* Floating Particles */}
      <div className="floating-particles">
        {particles.map((particle) => (
          <div
            key={particle}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MagicalBackground;