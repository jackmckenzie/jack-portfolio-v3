import { Wrapper } from '@components/Wrapper';
import { Badge } from '@components/Badge';
import { Prose } from '@components/Prose';
import type { Project } from '@types';
import { Link } from 'react-router-dom';

export function ProjectThumb(props: Project) {
  const { slug, title, blurb, thumbnail, type } = props;

  return (
    <Wrapper>
      <Link to={`/projects/${slug}`}>
        <div className="flex w-full gap-6">
          <div className="w-full max-w-xl">
            <img src={thumbnail} alt={title} className="w-full" />
          </div>
          <div className="flex flex-col">
            <Prose className="flex-1">
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Prose>
            <div className="flex items-center">
              {type.map((projectType) => (
                <Badge key={projectType} type={projectType} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}
