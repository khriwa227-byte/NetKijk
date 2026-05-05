
import React from 'react';

const REVIEW_IMAGES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const row1 = REVIEW_IMAGES.slice(0, 5);
const row2 = REVIEW_IMAGES.slice(5, 10);

const MarqueeRow: React.FC<{ images: number[]; reverse?: boolean }> = ({ images, reverse }) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${reverse ? '-reverse' : ''} 30s linear infinite`,
        }}
      >
        {doubled.map((num, i) => (
          <div
            key={i}
            className="w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-white/10"
          >
            <img
              src={`/assets/reviews/ready/${num}.png`}
              alt={`Klantreview ${num}`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="text-center mb-16 space-y-4 px-6">
        <div className="inline-block px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-widest text-amber-400">
          23000+ tevreden klanten
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white">
          #1 IPTV in Nederland volgens onze klanten
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow images={row1} />
        <MarqueeRow images={row2} reverse />
      </div>
    </section>
  );
};
