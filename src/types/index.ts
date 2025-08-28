export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error';
}
