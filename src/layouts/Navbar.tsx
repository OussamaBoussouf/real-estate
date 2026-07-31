import { NavLink, useSearchParams } from 'react-router';
import { Login } from '../features/auth';
import SignUp from '../features/auth/Signup';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserMenuAvatar from '../shared/components/UserMenuAvatar';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDialogOpen = (mode: 'login' | 'signup') => {
    setSearchParams({ auth: mode });
    if (!open) setOpen(true);
  };

  const handleDialogClose = () => {
    setSearchParams('');
    setOpen(false);
  };

  //Keep the dialog open while changing from login to sign up and vice versa
  const handleDialogChange = (mode: 'login' | 'signup') => {
    setSearchParams({ auth: mode });
  };

  return (
    <header className="navigation">
      <div className="container navigation__wrapper">
        <div className="logo">
          <NavLink to="/">DOORZA</NavLink>
        </div>
        <div className="navigation__auth-group">
          {user && <UserMenuAvatar user={user} onLogout={logout} />}
          {!user && (
            <>
              <button
                onClick={() => handleDialogOpen('login')}
                type="button"
                className="btn btn--rounded btn--primary mx-sm"
              >
                Login
              </button>
              <button
                onClick={() => handleDialogOpen('signup')}
                type="button"
                className="btn btn--rounded btn--secondary mx-sm"
              >
                Sign up
              </button>
            </>
          )}
          {searchParams.get('auth') === 'login' ? (
            <Login
              open={open}
              onClose={handleDialogClose}
              onChange={handleDialogChange}
            />
          ) : null}
          {searchParams.get('auth') === 'signup' ? (
            <SignUp
              open={open}
              onClose={handleDialogClose}
              onChange={handleDialogChange}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
