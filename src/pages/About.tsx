import { Wrapper } from '@components/Wrapper';
import { Prose } from '@components/Prose';

export function About() {
  return (
    <div className="sm:pt-24">
      <Wrapper className="flex-col">
        <h1 className="text-normal mb-24 font-jost text-5xl leading-[4rem] text-gray-700 dark:text-gray-100">
          About me
        </h1>
        <Prose>
          <p>
            I love collaborating with clever people to build clean, creative
            solutions to complex problems, that can be used by anybody.
          </p>
          <p>
            I love being a driver for strong design, maintable and well-tested
            code and constant improvement within an organisation.
          </p>
          <p>
            Since joining my current company, I've helped them to become more
            design-driven and helped build exciting and challenging new
            products.
          </p>
          <p>
            I keep accessibility at the forefront of all my work and have been
            instrumental in helping Last Yard attain WCAG compliance in 2023.
          </p>
          <p>
            If you'd like to reach out, feel free to contact me via LinkedIn
            below.
          </p>
          <h3>Tech I'm into</h3>
          <ul>
            <li>
              <strong>Front-end:</strong> React, TypeScript, Next.js, Tailwind
              CSS, Storybook, Figma
            </li>
            <li>
              <strong>Back-end:</strong> Django, Celery, AWS
            </li>
            <li>
              <strong>Other:</strong> Git, GitHub, CI/CD, Jest
            </li>
          </ul>
          <h3>Misc. stuff</h3>
          <ul>
            <li>
              I used to dabble in local theatre, acting, singing,{' '}
              <a
                href="http://perththeatrereviews.blogspot.com.au/2014/04/closer-koorliny-arts-centre-15-february.html"
                target="_blank"
              >
                directing
              </a>{' '}
              and playing bass guitar.
            </li>
            <li>
              I've also played in a couple of local bands and performed{' '}
              <a
                href="https://www.youtube.com/watch?v=oOz8L7pg2Lc"
                target="_blank"
              >
                plenty of gigs
              </a>
              .
            </li>
            <li>
              Award-winning sense of humour: I won "The Comedian" award at Last
              Yard's end of year wrap 2021.
            </li>
            <li>I love cooking and rock climbing</li>
            <li>
              I'm currenty listening to a lot of Frank Ocean, Godspeed You!
              Black Emperor and Joanna Newsom.
            </li>
            <li>
              My absolute favourite thing to do is spend time with my wife and
              two young boys.
            </li>
          </ul>
        </Prose>
      </Wrapper>
    </div>
  );
}
