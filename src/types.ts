export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
  role: string;
  type: 'software' | 'sales' | 'admin';
  icon: string;
  bullets: string[];
  techStack?: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  isCurrent?: boolean;
  degree?: string;
  details?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  percentage: number;
  badgeColor: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
