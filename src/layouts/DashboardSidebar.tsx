import { LogOut } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { ReactNode } from 'react';
import { sidebarLinks } from '../constants/dashboardLinks';

function DashboardSidebar() {
  const { user, logout } = useAuthContext();

  return (
    <aside className="dashboard__sidebar">
      <Link to="/" className="dashboard__logo">
        DOORZA
      </Link>
      <nav className="dashboard__nav">
        <ul className="dashboard__nav-list">
          {sidebarLinks[user!.role].map(
            (link: { label: string; path: string; icon: ReactNode }) => (
              <li key={link.label}>
                <NavLink to={link.path} className="dashboard__nav-link">
                  {link.icon} {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
      <button onClick={logout} type="button" className="dashboard__logout">
        <LogOut /> Logout
      </button>
    </aside>
  );
}

export default DashboardSidebar;
