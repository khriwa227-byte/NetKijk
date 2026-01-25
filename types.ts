
import React from 'react';

// Fix: Added missing React import to resolve 'Cannot find namespace React' error when using React.ReactNode
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  description: string;
}
