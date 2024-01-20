import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@utils';

export function NavLink(props: NavLinkProps) {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        cn(
          'relative inline-block p-3 text-slate-700 hover:text-slate-900 focus:outline-2 focus:outline-blue-300',
          isActive && 'font-medium text-slate-900',
          isActive &&
            'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-t-[1px] after:bg-emerald-500 after:transition-all after:duration-300 after:ease-in-out'
        )
      }
      {...props}
    />
  );
}
