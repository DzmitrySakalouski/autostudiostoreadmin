import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const InteractionWrapper = ({ children }) => {
    const state = useSelector(state => state);
    const [loaderStates, setLoaderStates] = useState([]);

    useEffect(() => {
        const loaders = [];

        for (let key in state) {
            const stateItem = state[key];
            loaders.push(stateItem.isLoading);
        }

        setLoaderStates(loaders);
    }, [state]);

    if (loaderStates.some(Boolean)) {
        return (
            <Backdrop open sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <CircularProgress size={70} color="inherit" />
            </Backdrop>
        )
    }

    return null;
}