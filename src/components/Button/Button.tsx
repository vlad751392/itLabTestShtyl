import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import cn from 'classnames';

import { BUTTON_STYLES, ButtonVariants } from './constants';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = ButtonVariants.PRIMARY,
      className,
      onClick,
      ...props
    }: Props,
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={cn(BUTTON_STYLES[variant], className)}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
