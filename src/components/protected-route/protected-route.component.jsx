import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}