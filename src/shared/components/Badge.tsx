import type { ReactNode } from 'react';

function Badge({
  position,
  type = 'primary',
  children,
  className,
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  type?: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`badge badge--${type} ${className || ''} ${position ? `badge--${position}` : ''}`}
    >
      {children}
    </span>
  );
}

export default Badge;
