import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loader from '../components/Loader';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loader></Loader>
    }
    
    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;