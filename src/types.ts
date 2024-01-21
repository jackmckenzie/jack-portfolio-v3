export type ProjectType = 'design' | 'frontend' | 'backend';

export interface Project {
  id: number;
  title: string;
  blurb: string;
  description: string;
  thumbnail: string;
  images: string[];
  type: ProjectType[];
}
