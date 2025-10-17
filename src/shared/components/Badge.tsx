import type { ReactNode } from 'react';

function Badge({ children }: { children: ReactNode }) {
  return <span className="badge badge--primary fs-xxs">{children}</span>;
}

export default Badge;
