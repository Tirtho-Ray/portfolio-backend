export type TPricingPlan = {
  name: 'Basic' | 'Standard' | 'Premium'; 
  price: number;
  features: string[];
  duration: string; 
};
