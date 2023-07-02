import { FC } from 'react';
import cn from 'classnames';

interface Props {
  burgerState: boolean;
  handleClick: () => void;
}

export const BurgerMenu: FC<Props> = ({ burgerState, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-8 h-8 mr-6 flex flex-col lg:hidden items-center gap-[6px] z-10 cursor-pointer">
      <div
        className={cn('w-6 h-0.5 bg-blue-primary', {
          'rotate-45 origin-top-left transition-all duration-200': burgerState
        })}
      />
      <div
        className={cn('w-6 h-0.5 bg-blue-primary transition-all duration-200', {
          '-translate-x-4 opacity-0': burgerState
        })}
      />
      <div
        className={cn('w-6 h-0.5 bg-blue-primary transition-all duration-200', {
          '-translate-x-px -rotate-45 origin-bottom-left relative left-px':
            burgerState
        })}
      />
    </div>
  );
};
