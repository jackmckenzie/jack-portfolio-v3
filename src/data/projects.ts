import td1 from '@assets/projects/template-design.png';
// import td2 from '@assets/projects/template-design-smartgroups-1.gif';
// import td3 from '@assets/projects/template-design-smartgroups-2.gif';
import type { Project } from '@types';

export const projects: Project[] = [
  {
    slug: 'template-design',
    title: 'Template Designer',
    blurb:
      'A full WYSIWYG design authoring tool. I created the initial designs with another UX designer and assisted with some of the front-end and styling.',
    thumbnail: td1,
    //   images: [
    //   {
    //     src: td1,
    //     alt: 'Template Designer',
    //   },
    //   {
    //     src: td2,
    //     alt: 'Smart Groups demonstration 1',
    //   },
    //   {
    //     src: td3,
    //     alt: 'Smart Groups demonstration 2',
    //   },
    // ],
    type: ['design', 'frontend'],
  },
];
