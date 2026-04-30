export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  category: string;
  heroMetric: string;
  tags: readonly string[];
  github?: string;
  /** Placeholder — replace with real image when available. */
  image?: string;
  /** Accent gradient for hero fallback. */
  gradient?: string;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: readonly string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Principle {
  title: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
