import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "../../store/actions";

export const HomeDashboardView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDataStart());
    }, []);
    return (
        <div>Dashboard here</div>
    );
};
