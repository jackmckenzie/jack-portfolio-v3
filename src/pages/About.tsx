import { Wrapper } from '@components/Wrapper';

export function About() {
  return (
    <div className="py-24">
      <Wrapper className="flex-col">
        <h1 className="font-jost text-normal mb-24 text-5xl leading-[4rem] text-gray-700 dark:text-gray-100">
          About me
        </h1>
        <div className="prose dark:prose-invert">
          <p>
            I collaborate with clever people to build clean, creative solutions
            to complex problems, that can be used by anybody.
          </p>
          <p>
            I love being a driver for strong design, clean code and constant
            improvement within an organisation.
          </p>
          <p>
            Since joining my current company, I've helped them to become more
            design-driven and helped build exciting and challenging new
            products.
          </p>
          <h3>Tech I'm into</h3>
          <ul>
            <li>
              <strong>Front-end:</strong> React, TypeScript, Next.js, Tailwind
              CSS, Storybook, Figma
            </li>
            <li>
              <strong>Back-end:</strong> Django
            </li>
            <li>
              <strong>Other:</strong> Git, GitHub, CI/CD, Jest
            </li>
          </ul>
          <h3>Misc. stuff</h3>
          <ul>
            <li>
              I used to dabble in local theatre, acting, singing,{' '}
              <a href="http://perththeatrereviews.blogspot.com.au/2014/04/closer-koorliny-arts-centre-15-february.html">
                directing
              </a>{' '}
              and playing bass guitar.
            </li>
            <li>
              I've also played in a couple of local bands and played{' '}
              <a href="https://www.youtube.com/watch?v=oOz8L7pg2Lc">
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
        </div>
      </Wrapper>
    </div>
  );
}
