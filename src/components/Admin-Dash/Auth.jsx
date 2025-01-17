import { Navigate } from 'react-router';

const Auth = ( { children }) => {
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to='/admin' />
    }
  return children;
}

export default Auth
