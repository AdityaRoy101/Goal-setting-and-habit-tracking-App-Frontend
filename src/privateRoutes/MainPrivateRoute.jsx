import { useContext } from 'react'
import { GlobalContext } from "../context/AuthProvider"
import { Outlet } from 'react-router-dom';
import SessionOutPage from '../auth/SessionOutPage';

const MainPrivateRoute = () => {
    const {userAuth} = useContext(GlobalContext);
  
    if(userAuth !== null){
        return <Outlet />
    }else{
        return <SessionOutPage />
    }
}

export default MainPrivateRoute