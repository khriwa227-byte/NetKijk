
import React from 'react';

const SupportIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="35" height="65" rx="6" />
    <path d="M55 45 C 55 35, 85 35, 85 55 C 85 65, 75 75, 65 75 L55 85 L55 75" />
    <circle cx="65" cy="55" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="72" cy="55" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="79" cy="55" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const PriceTagIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M58 24 C 64 16, 76 26, 68 36" strokeWidth="4" />
    <path d="M25 55 L55 25 C 57 23, 60 23, 62 25 L85 48 C 87 50, 87 53, 85 55 L55 85 C 53 87, 50 87, 48 85 L25 62 C 23 60, 23 57, 25 55 Z" strokeWidth="4" />
    <circle cx="58" cy="36" r="4" strokeWidth="4" />
    <g transform="translate(42, 48) rotate(-45) scale(0.8)">
      <path d="M10 2 L10 22 M10 4 C 6 4, 3 6, 3 9 C 3 12, 6 13, 10 14 C 14 15, 17 16, 17 19 C 17 22, 14 24, 10 24 C 6 24, 3 22, 3 22" strokeWidth="4.5" />
    </g>
  </svg>
);

const QuickSetupIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="15" y1="40" x2="35" y2="40" strokeWidth="4" />
    <line x1="10" y1="52" x2="30" y2="52" strokeWidth="4" />
    <line x1="15" y1="64" x2="35" y2="64" strokeWidth="4" />
    <circle cx="60" cy="55" r="28" />
    <rect x="54" y="20" width="12" height="7" rx="2" />
    <path d="M78 32 L83 37" strokeWidth="5" />
    <line x1="60" y1="33" x2="60" y2="38" strokeWidth="2" />
    <line x1="60" y1="72" x2="60" y2="77" strokeWidth="2" />
    <line x1="43" y1="55" x2="48" y2="55" strokeWidth="2" />
    <line x1="72" y1="55" x2="77" y2="55" strokeWidth="2" />
    <path d="M50 55 L57 62 L70 48" strokeWidth="5" />
  </svg>
);

const QualityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 12 L61 38 L88 38 L67 55 L75 82 L50 66 L25 82 L33 55 L12 38 L39 38 Z" />
    <path d="M45 45 L55 55 M55 45 L45 55" strokeWidth="3" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="25" width="50" height="50" rx="8" />
    <line x1="25" y1="42" x2="75" y2="42" />
    <rect x="42" y="52" width="4" height="12" rx="1" fill="currentColor" stroke="none" />
    <rect x="54" y="52" width="4" height="12" rx="1" fill="currentColor" stroke="none" />
    <path d="M75 55 C 85 55, 85 35, 75 35" />
    <path d="M72 38 L75 35 L72 32" />
  </svg>
);

const DevicesIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="15" y="20" width="50" height="35" rx="4" />
    <line x1="30" y1="55" x2="50" y2="55" />
    <rect x="45" y="45" width="35" height="25" rx="4" />
    <rect x="72" y="55" width="15" height="30" rx="3" />
    <circle cx="79.5" cy="80" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const BenefitCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; className?: string }> = ({ title, desc, icon, className }) => (
  <div className={`p-8 rounded-[40px] glass-card hover:bg-white transition-all duration-500 group cursor-default ${className}`}>
    <div className="w-16 h-16 bg-black rounded-2xl mb-8 flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform shadow-xl group-hover:shadow-pink-500/20">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tighter">{title}</h3>
    <p className="text-black/70 leading-relaxed font-medium">{desc}</p>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
            Lidmaatschap voordelen
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
            Het is <span className="text-italics underline decoration-white/20 decoration-2 underline-offset-[12px]">"je gaat nooit meer terug"</span> beter
          </h2>
          <p className="text-xl text-white/80 font-medium">
            PrimeKopenTV vervangt dure Ziggo-pakketten en meerdere streamingdiensten voor één vaste prijs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<SupportIcon />} 
            title="WhatsApp Support" 
            desc="Bereik ons direct via WhatsApp voor instant hulp bij al je vragen." 
          />
          <BenefitCard 
            icon={<PriceTagIcon />} 
            title="Vaste Prijs" 
            desc="Geen verrassingen! Betaal dezelfde vaste prijs voor je gekozen pakket." 
          />
          <BenefitCard 
            icon={<QuickSetupIcon />} 
            title="Snelle Setup" 
            desc="Ontvang toegang binnen 5 minuten. Geen technicus nodig voor installatie." 
          />
          <BenefitCard 
            icon={<QualityIcon />} 
            title="Prime Kwaliteit" 
            desc="Premium 4K streamingkwaliteit, wanneer je maar wilt op al je favoriete zenders." 
          />
          <BenefitCard 
            icon={<FlexibilityIcon />} 
            title="Flexibel" 
            desc="Kies 3, 6 of 12 maanden. Volledig flexibel en aanpasbaar aan jouw wensen." 
          />
          <BenefitCard 
            icon={<DevicesIcon />} 
            title="Alle Apparaten" 
            desc="Werkt op Smart TV, Fire Stick, telefoon, tablet, PC en vrijwel elke box." 
          />
        </div>
      </div>
    </section>
  );
};
