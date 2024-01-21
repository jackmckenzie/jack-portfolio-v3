export type ProjectType = 'design' | 'frontend' | 'backend';

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  thumbnail: string;
  // images: Image[];
  type: ProjectType[];
}
