import { NavLink } from 'react-router';
import { Login } from '../features/auth';
import SignUp from '../features/auth/Signup';
import { useAuthContext } from '../context/AuthContext';
import UserMenuAvatar from '../shared/components/UserMenuAvatar';

function Navbar() {

  const { user, logout } = useAuthContext();

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
              <Login className="btn btn--rounded btn--primary mx-sm">
                Login
              </Login>
              <SignUp className="btn btn--rounded btn--secondary mx-sm">
                Sign Up
              </SignUp>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
