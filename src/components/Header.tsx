import { Link } from 'react-router-dom';
import { NavLink } from '@components/NavLink';

interface HeaderProps {
  links: { to: string; label: string }[];
}

export function Header(props: HeaderProps) {
  return (
    <header className="relative w-full bg-white shadow-header">
      <div className="mx-auto my-0 w-full max-w-screen-lg px-4">
        <div className="flex flex-col items-center sm:flex-row">
          {/* <Link to={'/'} className="text-slate-700">
            Jack McKenzie
          </Link> */}
          <nav className="gap-6">
            <ul className="flex">
              {props.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
