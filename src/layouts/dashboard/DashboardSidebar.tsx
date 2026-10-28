import { Link, NavLink } from 'react-router';
import { useAuthContext } from '../../context/AuthContext';
import { useMediaQuery } from '../../shared/hooks/useMediaQuery';
import SIDEBAR_LINKS from './sidebar-links';
import DashboardUserAvatar from '../../shared/components/DashboardUserAvatar';

function DashboardSidebar() {
  const { user, logout } = useAuthContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!user) {
    return null;
  }

  if (isMobile) {
    return (
      <aside className="mobile-menu">
        <div className="logo px-md">
          <Link to="/">.D</Link>
        </div>
        <div className="separator" />
        
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {SIDEBAR_LINKS[user!.role].map(link => (
                <li key={link.label} className="d-flex-center">
                  <NavLink
                    to={link.path}
                    className="mobile-menu__link d-flex-center"
                  >
                    <link.icon />
                  </NavLink>
                </li>
              ))}
            </ul>
            <DashboardUserAvatar user={user} logout={logout} />
          </nav>
      </aside>
    );
  }

  return (
    <aside className="dashboard__sidebar">
      <div className="logo px-md py-sm">
        <Link to="/">.Doorza</Link>
      </div>
      <div className="separator"></div>
      <nav className="dashboard__nav px-md">
        <ul className="dashboard__nav-list">
          {SIDEBAR_LINKS[user!.role].map(link => (
            <li key={link.label}>
              <NavLink to={link.path} className="dashboard__nav-link">
                <link.icon /> {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <DashboardUserAvatar user={user} logout={logout} />
      </nav>
    </aside>
  );
}

export default DashboardSidebar;
