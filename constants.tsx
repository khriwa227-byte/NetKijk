
import { FAQItem, PricingPlan } from './types';

export const FAQS: FAQItem[] = [
  {
    question: "Hoe snel ontvang ik mijn toegang?",
    answer: "Direct na betaling ontvang je binnen 5 minuten je logingegevens via WhatsApp. Setup duurt nog eens 5 minuten. Je kunt binnen 10 minuten al kijken."
  },
  {
    question: "Hoe werkt de onboarding?",
    answer: "Abonneer op een pakket en we sturen je direct je logingegevens via WhatsApp. Dit proces duurt ongeveer 5 minuten vanaf het moment dat je betaalt. Je krijgt ook een setup-handleiding meegestuurd."
  },
  {
    question: "Is IPTV legaal in Nederland?",
    answer: "Ja, het gebruik van IPTV-diensten is legaal in Nederland. PrimeKopenTV is een legitieme IPTV-aanbieder met premium infrastructuur en 24/7 support."
  },
  {
    question: "Zijn er beperkingen op aanvragen?",
    answer: "Nee! Met je abonnement krijg je onbeperkte toegang tot alle 65.000+ kanalen en 175.000+ films & series. Stream zoveel je wilt."
  },
  {
    question: "Hoe werkt de pauze-functie?",
    answer: "We begrijpen dat je niet altijd actief kijkt. Als je je abonnement pauzeert, wordt de factureringsperiode bevroren. Bijvoorbeeld: gebruik je 21 dagen en pauzeer je daarna, dan heb je nog 10 dagen over voor later."
  },
  {
    question: "Krijg ik een gratis proefperiode?",
    answer: "We bieden geen gratis proefperiodes aan. In plaats daarvan krijg je een 15-dagen geld-terug-garantie. Dit is beter omdat je volledige toegang hebt (niet beperkt) en meer tijd om alles grondig te testen."
  },
  {
    question: "Welke apparaten worden ondersteund?",
    answer: "PrimeKopenTV werkt op vrijwel alle apparaten: Smart TV's (Samsung, LG, Sony), Fire Stick, Apple TV, Android/iOS telefoons en tablets, PC/Mac, Android TV boxes, en meer."
  },
  {
    question: "Buffer de stream?",
    answer: "Nee! We gebruiken premium servers met 99.9% uptime garantie. Geen buffering, geen lag, geen onderbrekingen. Prime kwaliteit, altijd."
  },
  {
    question: "Krijg ik Nederlandse kanalen?",
    answer: "Ja! Alle Nederlandse kanalen zijn inbegrepen: NPO 1/2/3, RTL 4/5/7/8, SBS6/9, Veronica, NET5, en meer. Plus Belgische en internationale kanalen."
  }
];

export interface ExtendedPricingPlan extends PricingPlan {
  monthlyPrice: string;
  savings?: string;
}

export const PRICING_PLANS: ExtendedPricingPlan[] = [
  {
    name: "Starter",
    price: "€34,99",
    monthlyPrice: "€11,66",
    description: "3 MAANDEN TOEGANG",
    features: [
      "65.000+ kanalen",
      "175.000+ films & series",
      "HD & 4K streaming",
      "Alle apparaten",
      "15 dagen geld-terug",
      "WhatsApp support"
    ]
  },
  {
    name: "Prime",
    price: "€69,99",
    monthlyPrice: "€5,83",
    savings: "Bespaar 50%",
    description: "12 MAANDEN TOEGANG",
    features: [
      "65.000+ kanalen",
      "175.000+ films & series",
      "HD & 4K streaming",
      "Alle apparaten",
      "15 dagen geld-terug",
      "WhatsApp support",
      "Beste prijs/kwaliteit"
    ]
  },
  {
    name: "Popular",
    price: "€44,99",
    monthlyPrice: "€7,49",
    savings: "Bespaar 35%",
    description: "6 MAANDEN TOEGANG",
    features: [
      "65.000+ kanalen",
      "175.000+ films & series",
      "HD & 4K streaming",
      "Alle apparaten",
      "15 dagen geld-terug",
      "WhatsApp support",
      "Pauzeer of annuleer"
    ]
  }
];

export const SERVICES = [
  "Nederlandse kanalen", "Belgische kanalen", "Sport live", "Films & Series", "Internationale kanalen", 
  "VOD", "Catch-up TV", "EPG", "Multi-screen", "99.9% uptime", "HD & 4K", "Formule 1", "Eredivisie"
];

export const CHANNEL_LOGOS = [
  { name: "ESPN", logo: "/assets/channels/espn.png" },
  { name: "Viaplay", logo: "/assets/channels/viaplay.png" },
  { name: "Ziggo Sport", logo: "/assets/channels/ziggo-sport.png" },
  { name: "Eurosport", logo: "/assets/channels/eurosport.png" },
  { name: "Sky Sports", logo: "/assets/channels/sky-sports.png" },
  { name: "DAZN", logo: "/assets/channels/dazn.png" },
  { name: "F1", logo: "/assets/channels/f1.png" }
];

export const TOP_FILMS = [
  { title: "Gladiator II", posterUrl: "/assets/posters/gladiator-2.jpg" },
  { title: "Wicked", posterUrl: "/assets/posters/wicked.jpg" },
  { title: "Moana 2", posterUrl: "/assets/posters/moana-2.jpg" },
  { title: "Red One", posterUrl: "/assets/posters/red-one.jpg" },
  { title: "Dune: Part Two", posterUrl: "/assets/posters/dune-2.jpg" },
  { title: "Deadpool & Wolverine", posterUrl: "/assets/posters/deadpool-wolverine.jpg" },
  { title: "The Substance", posterUrl: "/assets/posters/the-substance.jpg" },
  { title: "Inside Out 2", posterUrl: "/assets/posters/inside-out-2.jpg" },
  { title: "Joker: Folie à Deux", posterUrl: "/assets/posters/joker-folie-a-deux.jpg" },
  { title: "Beetlejuice Beetlejuice", posterUrl: "/assets/posters/beetlejuice-2.jpg" },
  { title: "Alien: Romulus", posterUrl: "/assets/posters/alien-romulus.jpg" },
  { title: "Despicable Me 4", posterUrl: "/assets/posters/despicable-me-4.jpg" },
  { title: "Conclave", posterUrl: "/assets/posters/conclave.jpg" },
  { title: "Heretic", posterUrl: "/assets/posters/heretic.jpg" },
  { title: "F1", posterUrl: "/assets/posters/f1.jpg" }
];
