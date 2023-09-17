import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext) // aita holo main bepar private route er ta holo private route dia jake jake atkate chao take banate hobe children i mean private route k agey e banate hobe then pore muria dao bass
    if (loading) {
        return <div>loading ...</div>
    }
    if (user && user.uid) {
        return children // private route er shorto manle tahole children hishabe j component ta ashbe takei dekhia dao bass
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate> // aikhan a akta bepar acey ta holo jei loctation a jaoar try oi location pete hole state a set kore uselocation dia pete hobe
};

export default PrivateRoute;