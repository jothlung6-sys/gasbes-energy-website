import logoIcon from "@assets/logo icon-gasbes_1753609285188.png";

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  const isFooter = variant === 'footer';
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Logo Icon */}
      <img 
        src={logoIcon} 
        alt="Gasbes Energy Icon" 
        className={`object-contain ${isFooter ? 'h-20 w-20' : 'h-16 w-16'}`}
      />
      
      {/* Text Content */}
      <div className="flex flex-col">
        {/* GASBES ENERGY */}
        <div className="flex flex-col leading-none">
          <span 
            className={`font-black tracking-wider ${
              isFooter 
                ? 'text-white text-3xl' 
                : 'text-coffee-brown text-2xl'
            }`}
            style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
          >
            GASBES
          </span>
          <span 
            className={`font-black tracking-wider ${
              isFooter 
                ? 'text-white text-xl' 
                : 'text-coffee-brown text-lg'
            }`}
            style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
          >
            ENERGY
          </span>
        </div>
        
        {/* Tagline */}
        <span 
          className={`font-bold text-xs mt-1 ${
            isFooter 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          by Biozam Corporate Limited
        </span>
      </div>
    </div>
  );
}