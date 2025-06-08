import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@utils';

export function NavLink(props: NavLinkProps) {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        cn(
          'relative inline-block p-3 text-gray-700 transition-colors hover:text-slate-900 focus:outline-2 focus:outline-blue-300 dark:text-gray-200 hover:dark:text-white',
          isActive && 'font-semibold text-gray-900 dark:text-white'
        )
      }
      {...props}
    />
  );
}
