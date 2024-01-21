import jackHeadshot from '@assets/jack-headshot.jpg';
import { cn } from '@utils';
import { Wrapper } from '@components/Wrapper';
import { Prose } from '@components/Prose';
import { ProjectThumb } from '@components/ProjectThumb';

import { projects } from '@data/projects';

export function Work() {
  return (
    <div className="space-y-16">
      <Intro />
      <Wrapper>
        <Prose>
          <h2 className="text-3xl">My work</h2>
          <p>
            Below are examples of my work. All are real-world examples tested
            and used by customers. In my career I was a full-time{' '}
            <span className="font-semibold">Product Designer</span> before
            finding a new passion as a full-stack developer, so I have examples
            for both.
          </p>
          <p>
            I test all my work rigorously to ensure it is as accessible as
            possible, using Lighthouse, WAVE and screenreaders.
          </p>
          <p>Click any for more details.</p>
        </Prose>
      </Wrapper>
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectThumb key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="sm:pt-24">
      <Wrapper className="justify-between">
        <div className="max-w-xl space-y-5 text-gray-800 dark:text-gray-200">
          <h1 className="text-center font-jost text-5xl leading-[4rem] dark:text-gray-100 sm:text-left">
            Hi, I'm{' '}
            <span className="font-medium text-emerald-600 dark:text-emerald-400">
              Jack
            </span>
            .<br />
            I'm a{' '}
            <span className="text-orange-600 dark:text-orange-500">
              full-stack developer
            </span>
            .
          </h1>
          <p className="text-lg">
            I come from a design background, with a focus on creating engaging &
            accessible web experiences.
          </p>
          <p>Currently: Software Engineer at Last Yard</p>
        </div>
        <div
          className={cn(
            'hidden sm:block',
            'relative z-0 h-min w-[300px] shrink-0',
            'before:absolute before:-left-2 before:-top-2 before:z-[-1] before:h-[calc(100%-0.5rem)] before:w-[calc(100%-0.5rem)] before:rounded-[2.5rem] before:border before:border-emerald-400 dark:before:border-emerald-600',
            'after:absolute after:-bottom-2 after:-right-2 after:z-[-1] after:h-[calc(100%-0.5rem)] after:w-[calc(100%-0.5rem)] after:rounded-[2.5rem] after:border after:border-orange-400 dark:after:border-orange-600',
            'transition-transform duration-300 hover:scale-105',
            'before:transition-all before:duration-300 hover:before:-left-1 hover:before:-top-1 hover:before:rounded-[2.25rem]',
            'after:transition-all after:duration-300 hover:after:-bottom-1 hover:after:-right-1 hover:after:rounded-[2.25rem]'
          )}
        >
          <img
            src={jackHeadshot}
            alt="Jack McKenzie"
            className={cn('relative w-full rounded-4xl')}
          />
        </div>
      </Wrapper>
    </div>
  );
}
