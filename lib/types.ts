export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface NavbarConfig {
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu: Array<{
    title: string;
    url: string;
  }>;
  auth: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

export interface ParticlesConfig {
  quantity?: number;
  staticity?: number;
  color?: string;
  size?: number;
  className?: string;
}