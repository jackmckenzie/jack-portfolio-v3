import tdImg from '@assets/projects/template-design.png';
import msImg from '@assets/projects/mobile-scanner.png';
import promotionsImg from '@assets/projects/promotions.png';
import blogImg from '@assets/projects/blog-list.png';
import runtimeImg from '@assets/projects/runtime-log.png';
import rbacImg from '@assets/projects/rbac-permission-control.png';
import type { Project } from '@types';

export const projects: Project[] = [
  {
    slug: 'template-design',
    title: 'Template Designer',
    blurb:
      'A full WYSIWYG design authoring tool. I created the initial designs with another UX designer and assisted with some of the front-end and styling.',
    thumbnail: tdImg,
    type: ['frontend', 'design'],
  },
  {
    slug: 'promotions',
    title: 'In-store Promotions app',
    blurb:
      'An upgrade to one of our existing systems. I updated the very dated design with the help of our designer and wrote new APIs to replace existing slow ones. The app is also now fully accessible.',
    thumbnail: promotionsImg,
    type: ['frontend', 'backend'],
  },
  {
    slug: 'last-yard-blog',
    title: 'Last Yard Blog',
    blurb:
      'A blog I designed and hand-wrote for Last Yard using Storyblok and NextJS.',
    thumbnail: blogImg,
    type: ['frontend', 'design'],
  },
  {
    slug: 'runtime-log',
    title: 'Runtime logs',
    blurb:
      'Error logs for complex business rule functions. Power users of our product needed highly detailed, easy-to-share error logs. I created and coded a simple design for this that attempts to "stay out of the way". Users of this tool have found it invaluable in their day to day work.',
    thumbnail: runtimeImg,
    type: ['frontend', 'backend', 'design'],
  },
  {
    slug: 'rbac',
    title: 'Roles-based user access control',
    blurb:
      'A system to allow our customers to control what their users can and cannot do. I designed this project and collaborated with a talented co-worker for the front and back end development. This project has greatly improved how fast our customers can get things done in Last Yard.',
    thumbnail: rbacImg,
    type: ['frontend', 'backend', 'design'],
  },
  {
    slug: 'mobile-scanner',
    title: 'Mobile Scanner',
    blurb:
      'Scanning software to allow retail floor staff to quickly find and replace missing tickets. This project helped improve internal processes by a considerable amount. I also built a promotional product landing page (pictured)',
    thumbnail: msImg,
    type: ['design'],
  },
];
