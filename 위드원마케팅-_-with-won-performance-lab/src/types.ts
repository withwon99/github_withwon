export interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  period: string;
  mainResult: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    change: string;
  }[];
  description: string;
  strategyBullets: string[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  isImportant?: boolean;
}

export interface ConsultationFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  website: string;
  budget: string;
  requirements: string;
  agreedToTerms: boolean;
}
