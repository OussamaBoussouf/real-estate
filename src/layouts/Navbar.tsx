import { NavLink } from 'react-router';
import { Login } from '../features/auth';
import SignUp from '../features/auth/components/Signup';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserMenuAvatar from '../features/auth/components/UserMenuAvatar';

function Navbar() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [open, setOpen] = useState(false);
  const { user, logout} = useAuthContext();

  const handleModeChange = (newMode: 'login' | 'signup') => {
    setMode(newMode);
  };

  const handleDialogChange = (mode: 'login' | 'signup') => {
    setMode(mode);
    setOpen(!open);
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
                onClick={() => handleDialogChange('login')}
                type="button"
                className="btn btn--rounded btn--primary mx-sm"
              >
                Login
              </button>
              <button
                onClick={() => handleDialogChange('signup')}
                type="button"
                className="btn btn--rounded btn--secondary mx-sm"
              >
                Sign up
              </button>
            </>
          )}
          {mode === 'login' ? (
            <Login
              open={open}
              onDialogChange={handleDialogChange}
              onModeChange={handleModeChange}
            />
          ) : (
            <SignUp
              open={open}
              onDialogChange={handleDialogChange}
              onModeChange={handleModeChange}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
