import axios from "axios";
import { useEffect } from "react";
import { USER } from "../../constants";

export const HomeDashboardView = () => {
    useEffect(() => axios.get(USER.DATA()), [])
    return (
        <div>Dashboard here</div>
    );
};
