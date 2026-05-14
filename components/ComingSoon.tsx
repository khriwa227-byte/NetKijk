
import React, { useState } from 'react';
import { PERIOD_PLANS } from '../constants';

const trackWhatsAppConversion = () => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18079057257/NWq0CLmEuZkcEOmK4qxD' });
  }
};

const WHATSAPP_BASE = 'https://api.whatsapp.com/send/?phone=447449708976&type=phone_number&app_absent=0';

const getWhatsAppUrl = (tier: 'basis' | 'premium', period: string, devices: number, price: string) => {
  const tierName = tier === 'basis' ? 'Basis' : 'Premium VIP';
  const deviceText = devices === 1 ? '1 apparaat' : `${devices} apparaten`;
  const message = `Hallo, ik wil graag het ${tierName}-pakket van NetKijk aanschaffen voor ${period} voor ${deviceText} (${price}).`;
  return `${WHATSAPP_BASE}&text=${encodeURIComponent(message)}`;
};

const BASIS_ITEMS = [
  'HD Streamingkwaliteit',
  '50.000+ zenders wereldwijd',
  '140.000+ films & series on demand',
  'Alle populaire apparaten',
  '24/7 klantenservice NL & BE',
  'AntiFreeze technologie',
  'VPN inbegrepen',
  '100% anoniem',
];

const PREMIUM_ITEMS = [
  '4K / 8K / HDR streamingkwaliteit',
  '80.000+ zenders wereldwijd',
  '200.000+ films & series on demand',
  'Alle populaire apparaten',
  'Alle sport live & PPV events',
  'Persoonlijke VIP manager',
  'Enterprise Anti-Freeze PRO',
  'VPN inbegrepen',
];

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CheckIconBlue = () => (
  <svg className="w-3.5 h-3.5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-md flex items-center justify-center shadow-lg shadow-amber-500/30">
      <div className="w-4 h-4 bg-black rotate-45"></div>
    </div>
    <span className="text-2xl font-extrabold tracking-tighter text-white">NetKijk</span>
  </div>
);

export const ComingSoon: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12+3');
  const [selectedDevices, setSelectedDevices] = useState(1);
  const deviceOptions = [1, 2, 3, 4];

  const currentPlan = PERIOD_PLANS.find(p => p.id === selectedPeriod) || PERIOD_PLANS[0];
  const currentDevicePricing = currentPlan.devicePricing.find(dp => dp.devices === selectedDevices) || currentPlan.devicePricing[0];

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        background: '#080808',
        backgroundImage: `
          radial-gradient(at 0% 0%, hsla(43,80%,45%,0.4) 0, transparent 50%),
          radial-gradient(at 50% 0%, hsla(36,70%,30%,0.3) 0, transparent 50%),
          radial-gradient(at 100% 0%, hsla(30,60%,25%,0.3) 0, transparent 50%),
          radial-gradient(at 0% 50%, hsla(45,90%,50%,0.15) 0, transparent 50%),
          radial-gradient(at 100% 50%, hsla(38,80%,35%,0.2) 0, transparent 50%),
          radial-gradient(at 0% 100%, hsla(30,50%,20%,0.3) 0, transparent 50%),
          radial-gradient(at 50% 100%, hsla(43,70%,40%,0.2) 0, transparent 50%),
          radial-gradient(at 100% 100%, hsla(45,80%,45%,0.3) 0, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-center py-8 px-6">
        <Logo />
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="inline-block px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 mb-8">
          Onze Abonnementen
        </div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl">
          Hier zijn onze<br />
          <span className="text-amber-400 italic font-light">beschikbare abonnementen.</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 max-w-xl mb-10 font-medium">
          Kies het pakket dat bij jou past en neem contact op via WhatsApp — wij helpen je binnen 5 minuten.
        </p>
        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppConversion}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp ons nu
        </a>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-16 max-w-5xl mx-auto w-full">
        <h2 className="text-center text-3xl font-black tracking-tighter mb-10 text-white">
          Kies jouw pakket
        </h2>

        {/* Period toggle */}
        <div className="mb-6">
          <div className="glass-card rounded-3xl p-2 flex gap-2 max-w-2xl mx-auto">
            {PERIOD_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPeriod(plan.id)}
                className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 px-4 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedPeriod === plan.id
                    ? plan.isBestDeal
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40'
                      : 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {plan.isBestDeal && (
                  <span className="absolute -top-2.5 right-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg">
                    -50%
                  </span>
                )}
                <span>{plan.label}</span>
                {plan.subtitle && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${selectedPeriod === plan.id ? 'text-yellow-300' : 'text-amber-400/70'}`}>
                    {plan.subtitle}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Device toggle */}
        <div className="mb-10">
          <div className="glass-card rounded-3xl p-3 grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-3xl mx-auto">
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDevices(d)}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedDevices === d
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                {d} {d === 1 ? 'Apparaat' : 'Apparaten'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Premium VIP */}
          <div
            className="relative rounded-[32px] overflow-hidden flex flex-col hover:scale-[1.02] transition-all duration-500"
            style={{
              background: currentPlan.isBestDeal
                ? 'linear-gradient(135deg, rgba(88,28,135,0.6) 0%, rgba(0,0,0,0.95) 40%, rgba(59,7,100,0.5) 100%)'
                : 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(0,0,0,0.98) 50%, rgba(59,7,100,0.3) 100%)',
              boxShadow: currentPlan.isBestDeal ? '0 0 60px rgba(168,85,247,0.4)' : '0 0 40px rgba(168,85,247,0.25)',
              border: currentPlan.isBestDeal ? '2px solid rgba(245,158,11,0.6)' : '1px solid rgba(168,85,247,0.3)',
            }}
          >
            {currentPlan.isBestDeal && (
              <div className="flex justify-center pt-4">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Beste Deal
                </div>
              </div>
            )}
            <div className={`absolute ${currentPlan.isBestDeal ? 'top-14' : 'top-6'} left-6`}>
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Premium VIP
                <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></span>
              </div>
            </div>
            <div className={`p-10 flex-1 flex flex-col ${currentPlan.isBestDeal ? 'pt-20' : 'pt-16'}`}>
              <div className="mb-6">
                <p className="text-base font-black uppercase tracking-widest mb-1 text-amber-400/80">{currentPlan.label}</p>
                <h3 className="text-2xl font-black tracking-tighter text-white">Premium VIP Pakket</h3>
              </div>
              <div className="mb-8">
                <span
                  className="text-6xl font-black tracking-tighter leading-none"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {currentDevicePricing.premiumPrice}
                </span>
              </div>
              <div className="space-y-2.5 mb-8 flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-amber-500/50 mb-4">Inbegrepen</p>
                {PREMIUM_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/90">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-amber-500 to-yellow-600">
                      <CheckIcon />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppUrl('premium', currentPlan.label, selectedDevices, currentDevicePricing.premiumPrice)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="w-full py-5 text-lg font-black rounded-2xl transition-all block text-center bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 active:scale-95"
                style={{ boxShadow: '0 0 30px rgba(245,158,11,0.3)' }}
              >
                Word VIP Nu
              </a>
            </div>
          </div>

          {/* Basis */}
          <div
            className="relative rounded-[32px] overflow-hidden flex flex-col hover:scale-[1.02] transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.10) 50%, rgba(59,130,246,0.05) 100%)',
              border: currentPlan.isBestDeal ? '2px solid rgba(168,85,247,0.5)' : '1px solid rgba(59,130,246,0.25)',
            }}
          >
            {currentPlan.isBestDeal && (
              <div className="flex justify-center pt-4">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Beste Deal
                </div>
              </div>
            )}
            <div className={`absolute ${currentPlan.isBestDeal ? 'top-14' : 'top-6'} left-6`}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Basis
              </div>
            </div>
            <div className={`p-10 flex-1 flex flex-col ${currentPlan.isBestDeal ? 'pt-20' : 'pt-16'}`}>
              <div className="mb-6">
                <p className="text-base font-black uppercase tracking-widest mb-1 text-blue-400/80">{currentPlan.label}</p>
                <h3 className="text-2xl font-black tracking-tighter text-white">Basis Pakket</h3>
              </div>
              <div className="mb-8">
                <span className="text-6xl font-black tracking-tighter leading-none text-blue-400">
                  {currentDevicePricing.basisPrice}
                </span>
              </div>
              <div className="space-y-2.5 mb-8 flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-blue-400/50 mb-4">Inbegrepen</p>
                {BASIS_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/90">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500">
                      <CheckIconBlue />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppUrl('basis', currentPlan.label, selectedDevices, currentDevicePricing.basisPrice)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="w-full py-5 text-lg font-black rounded-2xl transition-all block text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 active:scale-95"
              >
                Bestel Nu
              </a>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="mt-10 text-center text-sm font-bold text-white/40 uppercase tracking-widest">
          15 dagen geld-terug-garantie &nbsp;·&nbsp; Pauzeer op elk moment
        </div>
      </section>

      {/* Contact footer */}
      <footer className="border-t border-amber-900/20 py-10 px-6 text-center space-y-4">
        <Logo />
        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white/50 mt-4">
          <a href="https://api.whatsapp.com/send/?phone=447449708976&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
            WhatsApp: +44 7449 708976
          </a>
          <a href="tel:+447449708976" className="hover:text-amber-400 transition-colors">
            +44 7449 708976
          </a>
          <a href="mailto:info@pandoriptv.nl" className="hover:text-amber-400 transition-colors">
            info@pandoriptv.nl
          </a>
        </div>
        <p className="text-xs text-white/20">© 2026 NetKijk. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
};
