export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[]; // This matches the JSONField in Django
  github_url: string;
  live_demo: string;
  image: string;
}