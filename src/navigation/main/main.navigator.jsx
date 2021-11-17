import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../../components/protected-route/protected-route.component";
import { authenticationSuccess } from "../../store/actions";
import { LoginView, HomeDashboardView } from "../../view";

export const MainNavigator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tokenDataString = localStorage.getItem('auth');
        if (tokenDataString) {
            const tokenData = JSON.parse(tokenDataString);
            dispatch(authenticationSuccess({token: tokenData}));
        }
    }, [dispatch]);
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
