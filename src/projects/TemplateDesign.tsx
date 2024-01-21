import md from '@assets/projects/template-design.md';
import img1 from '@assets/projects/template-design.png';
import img2 from '@assets/projects/template-design-smartgroups-1.gif';
import img3 from '@assets/projects/template-design-smartgroups-2.gif';
import { ProjectWrapper } from '../projects/ProjectWrapper';

const images = [
  {
    src: img1,
    alt: 'Template Designer',
  },
  {
    src: img2,
    alt: 'Template Designer Smart groups demonstration 1',
  },
  {
    src: img3,
    alt: 'Template Designer Smart groups demonstration 2',
  },
];

export function TemplateDesign() {
  const { markdown } = JSON.parse(JSON.stringify(md));
  return <ProjectWrapper images={images} markdown={markdown} />;
}
