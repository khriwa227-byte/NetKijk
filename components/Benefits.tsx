
import React from 'react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FixedPriceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.88 10.62 12 12 12C13.38 12 14.5 13.12 14.5 14.5C14.5 15.88 13.38 17 12 17C10.62 17 9.5 15.88 9.5 14.5" />
    <line x1="12" y1="5" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="19" />
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
            icon={<WhatsAppIcon />}
            title="WhatsApp Support"
            desc="Bereik ons direct via WhatsApp voor instant hulp bij al je vragen."
          />
          <BenefitCard
            icon={<FixedPriceIcon />}
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
