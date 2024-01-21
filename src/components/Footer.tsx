import { Linkedin, Github } from 'lucide-react';
import { Wrapper } from '@components/Wrapper';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}
function SocialLink(props: SocialLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="duration-400 flex transform items-center gap-2 rounded-full bg-gray-700/25 p-3 transition-transform hover:-translate-y-0.5 dark:bg-gray-100 dark:text-gray-700"
    >
      {props.icon}
      <span className="sr-only">{props.label}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="pb-16 pt-5">
      <Wrapper>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex flex-row items-center gap-4 text-gray-800 dark:text-gray-200">
            <SocialLink
              href="https://www.linkedin.com/in/jack-mckenz"
              icon={<Linkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/jackmckenzie"
              icon={<Github />}
              label="GitHub"
            />
          </div>
          <small className="mt-4 font-medium text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Jack McKenzie
          </small>
        </div>
      </Wrapper>
    </footer>
  );
}
