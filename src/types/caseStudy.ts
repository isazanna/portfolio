export interface CaseStudy {
  id: string;
  title: string;
  overview: string;
  approach: string;
  results: {
    text: string;
    stats: string[];
  };
  technologies: string[];
  cta: string;
}