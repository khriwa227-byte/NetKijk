
import React from 'react';
import { PRICING_PLANS } from '../constants';

const SmallPauseIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
    <line x1="35" y1="25" x2="35" y2="75" />
    <line x1="65" y1="25" x2="65" y2="75" />
  </svg>
);

const SmallCheckIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 50 L45 75 L80 25" />
  </svg>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
            PRIJZEN
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
            Eén abonnement, <span className="text-italics">eindeloze</span> mogelijkheden
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={idx} className={`glass-card rounded-[48px] overflow-hidden shadow-2xl relative flex flex-col group hover:scale-[1.02] transition-all duration-500 border-none ${idx === 1 ? 'ring-4 ring-purple-500/50' : ''}`}>
              {idx === 1 && (
                <div className="absolute top-6 right-8 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-purple-500/30">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Meest Gekozen
                </div>
              )}
              {plan.savings && (
                <div className="absolute -left-1 top-8 bg-black text-white px-4 py-1.5 rounded-r-full text-xs font-black uppercase tracking-widest shadow-xl">
                  {plan.savings}
                </div>
              )}
              <div className={`${idx === 1 ? 'bg-black/90' : 'bg-transparent'} p-10 flex-1 flex flex-col`}>
                <div className="mb-8">
                  <h3 className={`text-3xl font-black tracking-tighter mb-2 ${idx === 1 ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                  <p className={`text-xs font-black uppercase tracking-widest ${idx === 1 ? 'text-white/60' : 'text-black/50'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-black tracking-tighter leading-none ${idx === 1 ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                  </div>
                  <div className={`text-lg mt-2 font-bold ${idx === 1 ? 'text-white/60' : 'text-black/50'}`}>
                    {plan.monthlyPrice} / mnd
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  <div className={`text-xs font-black uppercase tracking-widest mb-6 ${idx === 1 ? 'text-white/40' : 'text-black/40'}`}>Wat is inbegrepen</div>
                  {plan.features.map((feature, i) => (
                    <div key={i} className={`flex items-center gap-3 text-base font-bold ${idx === 1 ? 'text-white' : 'text-black'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${idx === 1 ? 'bg-purple-500' : 'bg-black'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className={`w-full py-6 text-xl font-black rounded-3xl transition-all shadow-2xl ${idx === 1 ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-black text-white hover:bg-gray-900'} active:scale-95`}>
                  Abonneer nu
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center space-y-4">
            <p className="text-xl font-black text-white">Pauzeer of annuleer op elk moment</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm font-bold text-white/60 uppercase tracking-widest">
               <span className="flex items-center gap-2">
                 <SmallPauseIcon /> Pauzeer op elk moment
               </span>
               <span className="flex items-center gap-2">
                 <SmallCheckIcon /> Probeer het 15 dagen
               </span>
            </div>
        </div>
      </div>
    </section>
  );
};
