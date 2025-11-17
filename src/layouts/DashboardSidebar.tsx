import {
  CirclePlus,
  House,
  LogOut,
  MessageCircleMore,
  UserPen,
} from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

const links = [
  {
    label: 'Add Property',
    path: '/dashboard/add-property',
    icon: <CirclePlus />,
  },
  {
    label: 'My Properties',
    path: '/dashboard/my-properties',
    icon: <House />,
  },
  {
    label: 'Messages',
    path: '/dashboard/messages',
    icon: <MessageCircleMore />,
  },
  {
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <UserPen />,
  },
];

function DashboardSidebar() {
  const { logout } = useAuthContext();

  return (
    <aside className="dashboard__sidebar">
      <Link to="/" className="dashboard__logo">
        DOORZA
      </Link>
      <nav className="dashboard__nav">
        <ul className="dashboard__nav-list">
          {links.map(link => (
            <li key={link.label}>
              <NavLink to={link.path} className="dashboard__nav-link">
                {link.icon} {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={logout} type="button" className="dashboard__logout">
        <LogOut /> Logout
      </button>
    </aside>
  );
}

export default DashboardSidebar;
