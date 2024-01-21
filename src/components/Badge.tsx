import { cn } from '@utils';
import type { ProjectType } from '@types';

interface BadgeProps {
  type: ProjectType;
}

const badgeTypes = {
  design: {
    bg: 'bg-lime-200 dark:bg-lime-900',
    text: 'text-lime-900 dark:text-lime-300',
    value: 'Design',
  },
  frontend: {
    bg: 'bg-teal-200 dark:bg-teal-900',
    text: 'text-teal-900 dark:text-teal-300',
    value: 'Front-end',
  },
  backend: {
    bg: 'bg-indigo-100 dark:bg-indigo-900',
    text: 'text-indigo-900 dark:text-indigo-300',
    value: 'Back-end',
  },
};

export function Badge(props: BadgeProps) {
  const { bg, text, value } = badgeTypes[props.type];

  return (
    <span
      className={cn(
        'me-2 rounded-full px-2.5 py-0.5 text-sm font-medium',
        bg,
        text
      )}
    >
      {value}
    </span>
  );
}
