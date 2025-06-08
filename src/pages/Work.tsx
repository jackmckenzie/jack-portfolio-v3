import { Wrapper } from '@components/Wrapper';
import { Prose } from '@components/Prose';
import { ProjectThumb } from '@components/ProjectThumb';

import { projects } from '@data/projects';
import { Header } from '@/components/Header';

export function Work() {
  return (
    <div className="flex flex-col gap-16">
      <Header
        links={[
          { to: '/', label: 'Work' },
          { to: '/about', label: 'About' },
        ]}
      />
      <Intro />
      <About />
      <Wrapper>
        <Prose>
          <h2>My work</h2>
          <p className="text-slate-300">
            Below are examples of my work — thoughtfully designed, carefully
            built, and rigorously tested in production environments.
            Accessibility is a priority in everything I create, and I regularly
            use tools like Lighthouse, WAVE, and screen readers to ensure an
            inclusive experience for all users.
          </p>
        </Prose>
      </Wrapper>
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectThumb key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="">
      <Wrapper className="justify-between">
        <div className="my-12 flex max-w-xl flex-col gap-5 text-gray-800 dark:text-gray-200">
          {/* <h1 className="text-4xl font-bold">Jack McKenzie</h1> */}
          {/* <h2 className="text-2xl text-slate-300">Full-stack developer</h2> */}
          <h1 className="text-center text-4xl sm:text-left sm:text-5xl sm:leading-[4rem] dark:text-gray-100">
            Hi, I'm{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              Jack
            </span>
            .
          </h1>
          {/* .<br /> */}
          {/* I'm a{' '} */}
          {/* <span className="text-orange-600 dark:text-orange-500"> */}
          {/* full-stack developer */}
          {/* </span> */}
          {/* . */}
          {/* </h1> */}
          <Prose>
            <h2 className="mb-8 text-center text-2xl sm:text-left">
              I'm a full-stack developer.
            </h2>
            <p className="text-gray-300 sm:text-lg">
              I build accessible and user-focused enterprise web experiences.
            </p>
          </Prose>
          {/* <p> */}
          {/* Previously, I was a product designer, and I bring that same eye for detail and love for good UX into every line of code. */}
          {/* </p> */}
          {/* <p>Currently, I'm a Software Engineer at <span className="font-medium">Last Yard</span>, where I build production-grade tools used by enterprise clients across retail industries.</p> */}
        </div>
        {/* <div
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
        </div> */}
      </Wrapper>
    </div>
  );
}

const About = () => (
  <Wrapper>
    <Prose>
      <h2>A bit about me</h2>
      <p>
        I started out as a Product Designer, and I bring that same attention to
        detail into every line of code. I love collaborating with smart people
        to solve complex problems, using design thinking to craft beautiful
        interfaces with thoughtful, delightful interactions. I especially enjoy
        building reusable components and systems that make life easier for other
        developers.
      </p>
      <p>
        I’m currently a Software Engineer at{' '}
        <span className="font-bold">Last Yard</span>, where I’ve helped shift
        the culture to be more design-led—championing accessible front-end
        practices and contributing to ambitious new products. I created and
        continue to maintain our design system, playing a key role in achieving
        WCAG compliance and helping us secure large-scale enterprise clients.
      </p>
      <p>
        Outside of work, you’ll find me bouldering, playing music, obsessing
        over fonts and turtles, or spending time with my wonderful wife and two
        boys.
      </p>
    </Prose>
  </Wrapper>
);
