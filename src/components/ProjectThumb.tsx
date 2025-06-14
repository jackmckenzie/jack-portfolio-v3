import { Wrapper } from '@components/Wrapper';
import { Badge } from '@components/Badge';
import { Prose } from '@components/Prose';
import type { Project } from '@types';
import { Link } from 'react-router-dom';

export function ProjectThumb(props: Project) {
  const { slug, title, blurb, thumbnail, type } = props;

  return (
    <Wrapper>
      <Link
        to={`/projects/${slug}`}
        className="group -mx-8 rounded-lg p-6 focus:ring-3 focus:ring-emerald-400 focus:outline-none"
      >
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full max-w-xl sm:flex-1">
            <img
              src={thumbnail}
              alt={title}
              className="w-full rounded-lg drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col sm:min-w-[240px] sm:flex-1 md:min-w-[420px]">
            <Prose className="flex-1">
              <h3 className="underline-offset-4 group-hover:underline">
                {title}
              </h3>
              <p>{blurb}</p>
            </Prose>
            <div className="mt-4 flex items-center">
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
