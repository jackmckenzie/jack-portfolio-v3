import jackHeadshot from '@assets/jack-headshot.jpg';
import { cn } from '@utils';
import { Wrapper } from '@components/Wrapper';

export function Work() {
  return (
    <>
      <Intro />
      <Wrapper>
        <div className="prose dark:prose-invert">
          <h2 className="text-3xl">My work</h2>
          <p>I focus on creatively solving complex problems</p>
        </div>
      </Wrapper>
    </>
  );
}

function Intro() {
  return (
    <div className="py-24">
      <Wrapper className="justify-between">
        <div className="max-w-xl space-y-5 text-gray-800 dark:text-gray-100">
          <h1 className="font-jost text-5xl leading-[4rem]">
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
            'relative z-0 w-[300px] shrink-0',
            'before:rounded-4xl before:absolute before:-left-2 before:-top-2 before:z-[-1] before:h-full before:w-full before:border before:border-emerald-400 dark:before:border-emerald-600',
            'after:rounded-4xl after:absolute after:-bottom-2 after:-right-2 after:z-[-1] after:h-full after:w-full after:border after:border-orange-400 dark:after:border-orange-600'
          )}
        >
          <img
            src={jackHeadshot}
            alt="Jack McKenzie"
            className={cn('rounded-4xl relative w-full')}
          />
        </div>
      </Wrapper>
    </div>
  );
}
