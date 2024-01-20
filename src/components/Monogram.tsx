import LogoLight from '@assets/jack-monogram-light.svg';
import LogoDark from '@assets/jack-monogram-dark.svg';

export function Monogram() {
  return (
    <div className="inline-flex items-center justify-center">
      <img src={LogoLight} className="mr-2 h-10 w-10 dark:hidden" />
      <img src={LogoDark} className="hidden h-10 w-10 dark:block" />
    </div>
  );
}
