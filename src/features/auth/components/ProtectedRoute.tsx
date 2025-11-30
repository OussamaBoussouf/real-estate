import { Role } from '../../../types/user';
import { useAuthContext } from '../../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({roles}: { roles ?: Role[]}) {
  
  const {user} = useAuthContext();

  if(!user) {
    return <Navigate to='/' replace/>;
  }

  if(roles && !roles.includes(user.role)) {
    return <Navigate to='/not-authorized' replace/>
  }

  return <Outlet/>;
}

export default ProtectedRoute;
