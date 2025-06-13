import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className: string;
};

function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

export default Button;
