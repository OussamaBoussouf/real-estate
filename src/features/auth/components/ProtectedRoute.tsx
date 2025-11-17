import { ReactNode } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import { Navigate } from 'react-router';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuthContext();

  if (!user) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
