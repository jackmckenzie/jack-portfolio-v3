import { Link } from 'react-router-dom';
import { NavLink } from '@components/NavLink';
import { cn } from '@utils';
import { Monogram } from '@components/Monogram';
import { DarkModeToggle } from '@components/DarkModeToggle';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Wrapper } from './Wrapper';

type ILink = { to: string; label: string };
interface HeaderProps {
  links: ILink[];
}

function NavMenu({
  links,
  className = '',
}: {
  links: ILink[];
  className?: string;
}) {
  return (
    <Menu as="div" className="relative inline-block h-8 w-8 text-left">
      <MenuButton className="inline-flex h-full w-full items-center justify-center rounded-full text-gray-600 transition hover:text-gray-700 focus:outline-2 focus:outline-blue-300">
        Menu
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800">
          <div className="p-1">
            {links.map((link) => (
              <MenuItem key={link.to}>
                <NavLink
                  to={link.to}
                  className={cn(
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-200',
                    'data-focus:bg-gray-100 data-focus:dark:bg-gray-700'
                  )}
                >
                  {link.label}
                </NavLink>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export function Header(props: HeaderProps) {
  return (
    <header className="relative w-full py-6 sm:pt-16 sm:pb-8">
      <Wrapper>
        <div className="flex items-center gap-4 sm:flex-row">
          <Link to={'/'} className="group focus:outline-none">
            <span
              className={cn(
                'rounded-sm bg-slate-400 px-1.5 py-1 text-base font-black transition-colors group-focus:ring-3 group-focus:ring-emerald-400 hover:bg-emerald-400'
              )}
            >
              JM
            </span>
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
