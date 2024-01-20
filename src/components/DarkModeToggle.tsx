import { cn } from '@utils';
import { useTheme } from '@context/ThemeProvider';
import type { Theme } from '@context/ThemeProvider';
import { Menu, Transition } from '@headlessui/react';
import { Moon, Sun } from 'lucide-react';
import { Fragment } from 'react';

const options: { label: string; value: Theme }[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
];

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Menu as="div" className="relative inline-block h-8 w-8 text-left">
      <Menu.Button className="inline-flex h-full w-full items-center justify-center rounded-full text-gray-600 transition hover:text-gray-700 focus:outline-2 focus:outline-blue-300">
        <Sun
          className={cn(
            'h-6 w-6 text-gray-700 dark:hidden',
            theme === 'light' && 'text-emerald-600'
          )}
        />
        <Moon
          className={cn(
            'hidden h-6 w-6 text-gray-300 dark:block',
            theme === 'dark' && 'text-emerald-300'
          )}
        />
        <span className="sr-only">Change theme</span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800">
          <div className="p-1">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => setTheme(option.value)}
                    className={cn(
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-200',
                      active && 'bg-gray-100  dark:bg-gray-700',
                      option.value === theme &&
                        'text-emerald-700 dark:text-emerald-300'
                    )}
                  >
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

// <Menu.Item>
//   {({ active }) => (
//     <button
//       onClick={() => setTheme('light')}
//       className={cn(active && 'text-blue-600')}
//     >
//       Light
//     </button>
//   )}
// </Menu.Item>
// <Menu.Item>
//   <button onClick={() => setTheme('dark')}>Dark</button>
// </Menu.Item>
// <Menu.Item>
//   <button onClick={() => setTheme('system')}>System</button>
// </Menu.Item>
