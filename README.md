# PrimeKopenTV

Premium IPTV service website for the Netherlands and Belgium, featuring high-fidelity 4K streaming subscriptions.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Google Gemini AI** for the customer support chatbot

## Features

- Responsive design with mobile-first approach
- Smooth scroll-triggered animations
- AI-powered customer support chatbot (Dutch language)
- Interactive pricing plans
- FAQ accordion section
- WhatsApp integration for customer contact

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/primekopentv.git
   cd primekopentv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Gemini API key.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
primekopentv/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Benefits.tsx     # Benefits/features section
│   ├── ServicesGrid.tsx # Services display
│   ├── Pricing.tsx      # Pricing plans
│   ├── FAQ.tsx          # FAQ accordion
│   ├── DesignAssistant.tsx # AI chatbot
│   └── Footer.tsx       # Footer
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── constants.tsx        # Data constants
├── types.ts             # TypeScript types
└── vite.config.ts       # Vite configuration
```

## License

All rights reserved.
