import { LogOut } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { ReactNode } from 'react';
import { sidebarLinks } from '../constants/dashboardLinks';
import { useMediaQuery } from '../shared/hooks/useMediaQuery';

function DashboardSidebar() {
  const { user, logout } = useAuthContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <aside className="mobile-menu">
        <div className="mobile-menu__logo-wrapper d-flex-center">
          <Link to="/" className="mobile-menu__logo">
            D
          </Link>
        </div>
        <div className="seprater" />
        <div className='mobile-menu__nav-container'>
          <nav>
            <ul className="mobile-menu__list">
              {sidebarLinks[user!.role].map(
                (link: { label: string; path: string; icon: ReactNode }) => (
                  <li key={link.label} className='d-flex-center'>
                    <NavLink to={link.path} className="mobile-menu__link d-flex-center">
                      {link.icon}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <button onClick={logout} type="button" className="">
            <LogOut color="red"/>
          </button>
        </div>
      </aside>
    );
  }

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
