import { Link } from 'react-router-dom';
import { NavLink } from '@components/NavLink';
import { Monogram } from '@components/Monogram';
import { DarkModeToggle } from '@components/DarkModeToggle';

interface HeaderProps {
  links: { to: string; label: string }[];
}

export function Header(props: HeaderProps) {
  return (
    <header className="relative z-10 w-full py-6">
      <div className="mx-auto my-0 w-full max-w-screen-lg px-4">
        <div className="flex flex-col items-center sm:flex-row">
          <Link to={'/'}>
            <Monogram />
          </Link>
          <div className="ml-auto flex items-center gap-16">
            <nav>
              <ul className="flex gap-16">
                {props.links.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
