
import React from 'react';
import { SERVICES, TOP_FILMS, CHANNEL_LOGOS, TOP_TVSHOWS_NL } from '../constants';

const MoviePoster: React.FC<{ title: string; posterUrl: string }> = ({ title, posterUrl }) => (
  <div className="flex-shrink-0 group cursor-pointer">
    <div className="w-[180px] lg:w-[220px] aspect-[2/3] bg-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-500 transform group-hover:-translate-y-2 relative border border-white/20">
      <img 
        src={posterUrl} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-black text-sm leading-tight">{title}</span>
      </div>
    </div>
  </div>
);

const ChannelLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div
    className="flex-shrink-0 px-6 py-4 glass-card rounded-2xl flex items-center justify-center h-20 min-w-[160px] opacity-80 hover:opacity-100 transition-all duration-500 shadow-lg hover:shadow-xl group overflow-hidden border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
  >
    <img
      src={logo}
      alt={name}
      className="max-h-12 max-w-[120px] object-contain transition-all duration-300 group-hover:scale-110 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
    />
  </div>
);

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-12 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white">
              Kanalen, films, series & <span className="text-italics">meer</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {SERVICES.map((service, i) => (
                <div 
                  key={i} 
                  className="px-6 py-3 glass-card rounded-full shadow-sm text-lg font-bold hover:bg-black hover:text-white transition-all cursor-default border-none"
                >
                  {service}
                </div>
              ))}
              <div className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-black shadow-lg shadow-pink-500/40 transform hover:scale-105 transition-transform cursor-pointer">+ meer</div>
            </div>
          </div>
          
          <div className="relative aspect-square glass-card p-3 rounded-[60px] shadow-2xl overflow-hidden border-none">
            <img 
              src="https://picsum.photos/seed/iptv/1000/1000" 
              alt="IPTV Showcase" 
              className="w-full h-full object-cover rounded-[50px] transform hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute top-10 right-10 bg-black/90 backdrop-blur-xl text-white p-6 rounded-3xl shadow-2xl transform -rotate-6 border border-white/20">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Populair Nu</div>
              <div className="text-2xl font-black tracking-tighter leading-tight">Live Sport <br/>& 4K Blockbusters</div>
            </div>
          </div>
        </div>

        {/* Channel Marquee */}
        <div className="mb-20 space-y-6">
           <div className="px-2 text-center lg:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Live TV</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Al je favoriete zenders</h3>
           </div>
           <div className="marquee-container -mx-6 overflow-hidden">
             <div className="marquee-content py-4" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
               {CHANNEL_LOGOS.map((channel, i) => (
                 <ChannelLogo key={i} name={channel.name} logo={channel.logo} />
               ))}
             </div>
             <div className="marquee-content py-4" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
               {CHANNEL_LOGOS.map((channel, i) => (
                 <ChannelLogo key={`dup-${i}`} name={channel.name} logo={channel.logo} />
               ))}
             </div>
           </div>
        </div>

        {/* Movie Marquee Section */}
        <div className="space-y-8 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-2 text-center lg:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Nu Trending</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Top Films in Nederland</h3>
            </div>
            <div className="hidden md:block text-sm font-bold text-white/50 uppercase tracking-widest mt-4 lg:mt-0">
              Direct beschikbaar in 4K
            </div>
          </div>

          <div className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '60s' }}>
              {TOP_FILMS.map((film, i) => (
                <MoviePoster key={i} title={film.title} posterUrl={film.posterUrl || `https://picsum.photos/seed/movie-${i}/400/600`} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '60s' }}>
              {TOP_FILMS.map((film, i) => (
                <MoviePoster key={`dup-${i}`} title={film.title} posterUrl={film.posterUrl || `https://picsum.photos/seed/movie-${i}/400/600`} />
              ))}
            </div>
          </div>
        </div>

        {/* Dutch TV Shows Marquee Section */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-2 text-center lg:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Nederlandse Series</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Top TV Shows in Nederland</h3>
            </div>
            <div className="hidden md:block text-sm font-bold text-white/50 uppercase tracking-widest mt-4 lg:mt-0">
              Exclusieve content
            </div>
          </div>

          <div className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
              {TOP_TVSHOWS_NL.map((show, i) => (
                <MoviePoster key={i} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
              {TOP_TVSHOWS_NL.map((show, i) => (
                <MoviePoster key={`dup-${i}`} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
