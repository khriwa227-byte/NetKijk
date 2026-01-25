
import React from 'react';

const TrustIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>
    {children}
  </div>
);

export const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0";

  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tighter text-white drop-shadow-sm">
              Premium IPTV voor <span className="text-italics">iedereen</span>
            </h1>
            <p className="text-xl text-white/80 max-w-md mx-auto lg:mx-0 font-medium">
              TV kijken zoals het hoort. Pauzeer of annuleer op elk moment. Directe toegang via WhatsApp.
            </p>
          </div>
          
          <div className="space-y-8 w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center lg:justify-start">
              <a 
                href="#pricing" 
                className="w-full max-w-[320px] sm:max-w-none sm:w-auto px-10 py-5 bg-white text-black text-lg font-black rounded-full hover:scale-[1.02] transition-transform shadow-2xl text-center"
              >
                Bekijk prijzen
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[320px] sm:max-w-none sm:w-auto px-10 py-5 border-2 border-white/30 backdrop-blur-md text-white text-lg font-bold rounded-full hover:bg-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                WhatsApp ons
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
              <TrustIcon>Instant Activering</TrustIcon>
              <TrustIcon>Geen Buffering</TrustIcon>
              <TrustIcon>15 Dagen Garantie</TrustIcon>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="glass-card-dark p-10 rounded-[40px] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 w-full max-w-[440px] flex flex-col items-center text-center">
            <div className="space-y-8 w-full flex flex-col items-center">
              <div className="flex justify-between items-center w-full">
                <div className="w-12 h-12 opacity-0"></div> {/* Spacer for symmetry */}
                <div className="bg-pink-500 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/50">
                  Start Vandaag
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rotate-45"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-black text-white leading-tight">Doe mee</h3>
                <h3 className="text-5xl font-black text-white leading-tight underline decoration-pink-500 decoration-4 underline-offset-8">PrimeKopenTV</h3>
              </div>
              <p className="text-white/70 text-lg font-medium">Eén abonnement voor alles.</p>
              <a 
                href="#pricing" 
                className="w-full py-5 bg-white text-black font-black rounded-2xl text-xl hover:bg-gray-100 transition-colors block text-center shadow-xl"
              >
                Bekijk prijzen
              </a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border-t border-white/10 pt-6 w-full flex justify-between items-center text-white hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500"></div>
                <div className="text-left">
                  <div className="text-sm font-bold">WhatsApp Support</div>
                  <div className="text-xs text-white/50">Bereikbaar 24/7</div>
                </div>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full -z-10 blur-3xl opacity-30"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full -z-10 blur-3xl opacity-30"></div>
        </div>
      </div>

      <div className="mt-40 border-y border-white/10 py-12 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-content brightness-125">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black text-white/80 hover:text-white transition-colors uppercase tracking-widest px-8 cursor-default">{brand}</span>
            ))}
          </div>
          <div className="marquee-content brightness-125">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black text-white/80 hover:text-white transition-colors uppercase tracking-widest px-8 cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
