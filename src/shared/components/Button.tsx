import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

function Button({ children, className, type }: ButtonProps) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
