import { NavLink, useLocation } from 'react-router';
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';
import Button from '../shared/components/Button';
import { useToggle } from '../shared/hooks/useToggle';
import Overlay from '../shared/components/Overlay';
import { useEffect } from 'react';
import { useMediaQuery } from '../shared/hooks/useMediaQuery';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const { isOpen, toggleOpen } = useToggle();
  const { pathname } = useLocation();

  const isMobile = useMediaQuery('(max-width: 64rem)');

  useEffect(() => {
    if (isOpen) {
      handleToggle();
    }
  }, [pathname]);

  const handleToggle = () => {
    toggleOpen();
  };

  return (
    <header>
      <div className="container navigation">
        <div className="logo grow-1">
          <img src={logo} alt="logo" />
        </div>
        <nav className="grow-1">
          <ul className="navigation__links">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navigation__auth-group grow-1">
          <Button className="btn btn--rounded btn--primary m-x-sm">
            Login
          </Button>
          <Button className="btn btn--rounded m-x-sm">Sign in</Button>
        </div>
        {/* mobile */}
        {isMobile && (
          <>
            <button
              onClick={handleToggle}
              type="button"
              className="navigation__menu-btn"
            >
              <Menu />
            </button>
            <ul
              className={`${
                isOpen ? 'navigation__menu show-menu' : 'navigation__menu'
              }`}
            >
              {links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button className="btn btn--primary btn--rounded w-100">
                  Login
                </Button>
              </li>
              <li>
                <Button className="btn btn--rounded w-100">Sign in</Button>
              </li>
            </ul>
            <Overlay isVisible={isOpen} onClick={handleToggle} />
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
