import type { ReactNode } from 'react';

function Badge({
  type = 'primary',
  children,
}: {
  type?: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
}) {
  return <span className={`badge badge--${type}`}>{children}</span>;
}

export default Badge;
