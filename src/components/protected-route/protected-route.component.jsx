import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const auth = useSelector(state => state.auth);
    let location = useLocation();

    if (!auth?.userAuthData) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return <Outlet />
}
