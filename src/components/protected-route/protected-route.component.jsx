import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const {userAuthData} = useSelector(state => state.auth);
    console.log("userAuthData", userAuthData);
    let location = useLocation();

    if (!userAuthData) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return <Outlet />
}
