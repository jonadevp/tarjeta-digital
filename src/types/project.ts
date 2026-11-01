export interface Project {
    title: string;
    category: "Landing page" | "Homepage" | "Sitio informativo" | "Blog" | "Porfolio";
    description: string;
    tags: string[];
    url?: string;
    image?: string;
    kind: "conceptual" | "porfolio" | "homepage";
  }
  