import { UserAuth } from '../context/AuthContext';
import { useNavigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
    // Context
    const {session, loading} = UserAuth()

    // Hooks
    const navigate = useNavigate()

    // Loading screen
    if(loading){
        return<>Loading...</>
    }

    // if not logged in, redirect the user to "/".
    if(!session) return navigate("/");

  return (
    <Outlet />
  )
}
