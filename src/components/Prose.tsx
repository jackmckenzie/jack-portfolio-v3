import { ReactNode } from 'react';
import { cn } from '@utils';

interface ProseProps {
  className?: string;
  children?: ReactNode;
}

export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={cn(
        'prose prose-lg dark:prose-invert prose-headings:font-medium prose-h1:font-normal prose-li:marker:text-orange-300 prose-li:marker:dark:text-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
}
