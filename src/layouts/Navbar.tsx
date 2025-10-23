import { NavLink, useLocation } from 'react-router';
import Button from '../shared/components/Button';
import { useToggle } from '../shared/hooks/useToggle';
import { useEffect } from 'react';

function Navbar() {
  const { isOpen, toggleOpen } = useToggle();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) {
      handleToggle();
    }
  }, [pathname]);

  const handleToggle = () => {
    toggleOpen();
  };

  return (
    <header className="navigation">
      <div className="container navigation__wrapper">
        <div className="logo">
          <NavLink to="/">DOORZA</NavLink>
        </div>
        <div className="navigation__auth-group">
          <Button className="btn btn--rounded btn--primary mx-sm">
            Log in
          </Button>
          <Button className="btn btn--rounded btn--secondary mx-sm">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
