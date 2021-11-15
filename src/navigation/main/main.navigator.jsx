import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { LoginView, HomeDashboardView } from "../../view";

export const MainNavigator = () => {
    const isAuthenticated = false;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" render={() => {
                    return isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
                }} />
                <Route path="/login" element={LoginView} />
                <Route path="/home" element={HomeDashboardView} />
            </Routes>
        </BrowserRouter>
    );
}
