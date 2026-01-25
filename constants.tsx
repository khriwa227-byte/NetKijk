
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
  { name: "NPO 1", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/NPO_1_logo_2014.svg/1200px-NPO_1_logo_2014.svg.png" },
  { name: "RTL 4", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/RTL4_logo_2023.svg/1200px-RTL4_logo_2023.svg.png" },
  { name: "Ziggo Sport", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ziggo_Sport_logo_2021.svg/1200px-Ziggo_Sport_logo_2021.svg.png" },
  { name: "ESPN", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1200px-ESPN_wordmark.svg.png" },
  { name: "Viaplay", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Viaplay_logo.svg/1200px-Viaplay_logo.svg.png" },
  { name: "SBS 6", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/SBS6_logo_2013.svg/1200px-SBS6_logo_2013.svg.png" },
  { name: "Eurosport", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Eurosport_logo_2015.svg/1200px-Eurosport_logo_2015.svg.png" }
];

export const TOP_FILMS = [
  { title: "Gladiator II", posterUrl: "https://image.tmdb.org/t/p/w500/uS9mY7o97Sdn69I99Eu97QnBpST.jpg" },
  { title: "Wicked", posterUrl: "https://image.tmdb.org/t/p/w500/xDGbeZ0qzZ7bbzLq2Bdf6zdxtS8.jpg" },
  { title: "Moana 2", posterUrl: "https://image.tmdb.org/t/p/w500/m0Sbw96YPf6YpS7vL9YvS9YvS9Y.jpg" },
  { title: "Red One", posterUrl: "https://image.tmdb.org/t/p/w500/cdqLn6uQp0Z6fSNo9p6m9D69S3h.jpg" },
  { title: "Dune: Part Two", posterUrl: "https://image.tmdb.org/t/p/w500/czembS0RhiERakv79jEBgh69Sdn.jpg" },
  { title: "Deadpool & Wolverine", posterUrl: "https://image.tmdb.org/t/p/w500/8cdWjvZQUmOZpAF4W95buAf7S5z.jpg" },
  { title: "The Substance", posterUrl: "https://image.tmdb.org/t/p/w500/lqoMzCcS6U7pB44q3m9Eq9t7iR5.jpg" },
  { title: "Inside Out 2", posterUrl: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZfwZpL9OV1cn.jpg" },
  { title: "Joker: Folie à Deux", posterUrl: "https://image.tmdb.org/t/p/w500/jL6M7G6yq4W96e2y3Z1M9o7k9o7.jpg" },
  { title: "Beetlejuice 2", posterUrl: "https://image.tmdb.org/t/p/w500/kKgQbiSnkTu9p7AnuYvYmU6S6S9.jpg" },
  { title: "Alien: Romulus", posterUrl: "https://image.tmdb.org/t/p/w500/b33S7vzRSTCores9pZpST6pP9pI.jpg" },
  { title: "Twisters", posterUrl: "https://image.tmdb.org/t/p/w500/pjnD0S79Csi0mgsQkg9oBhXmUCj.jpg" },
  { title: "Longlegs", posterUrl: "https://image.tmdb.org/t/p/w500/5aj8vVGFwA3STpT7C2C2FWBL2v8.jpg" },
  { title: "Despicable Me 4", posterUrl: "https://image.tmdb.org/t/p/w500/wWba3TaoCIBnjZjn9UUNUpaVvL5.jpg" },
  { title: "Anora", posterUrl: "https://image.tmdb.org/t/p/w500/798VfLInyYV3S3pP8uVz3W9S3V8.jpg" },
  { title: "Conclave", posterUrl: "https://image.tmdb.org/t/p/w500/m996f9S3P8uVz3W9S3V8uVz3W9S.jpg" },
  { title: "Heretic", posterUrl: "https://image.tmdb.org/t/p/w500/1EwX9S3P8uVz3W9S3V8uVz3W9S8.jpg" },
  { title: "Paddington in Peru", posterUrl: "https://image.tmdb.org/t/p/w500/2EewuTrIB4X1ZpsCO3SBpS2x9n6.jpg" },
  { title: "Smile 2", posterUrl: "https://image.tmdb.org/t/p/w500/a89VfLInyYV3S3pP8uVz3W9S3V8.jpg" },
  { title: "Nosferatu", posterUrl: "https://image.tmdb.org/t/p/w500/3U9VfLInyYV3S3pP8uVz3W9S3V8.jpg" }
];
