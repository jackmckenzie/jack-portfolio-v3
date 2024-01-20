import { cn } from '@utils';
interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export function Wrapper(props: WrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto my-0 flex w-full max-w-screen-lg px-4',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
