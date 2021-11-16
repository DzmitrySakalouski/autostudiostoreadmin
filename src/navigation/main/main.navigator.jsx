import { useSelector } from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ProtectedRoute } from "../../components/protected-route/protected-route.component";
import { LoginView, HomeDashboardView } from "../../view";

export const MainNavigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ProtectedRoute />}>
                    <Route exact path="/dashboard" element={<HomeDashboardView />} />
                </Route>
                <Route path="/login" element={<LoginView />} />
            </Routes>
        </BrowserRouter>
    );
}
