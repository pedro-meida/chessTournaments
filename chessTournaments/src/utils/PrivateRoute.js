import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext';

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/Login' />
    )
}

export default PrivateRoute