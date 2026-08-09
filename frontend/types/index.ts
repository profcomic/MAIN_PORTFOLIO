export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  live_demo: string;
  image: string;

  // Optional project metadata
  project_date?: string;
  created_at?: string;
  updated_at?: string;
}