import { Snackbar, Alert } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const ErrorToast = () => {
    const state = useSelector(state => state);
    const [errors, setErrors] = useState([]);

    console.log(errors);

    useEffect(() => {
        const errorsList = [];

        for (let key in state) {
            const stateItem = state[key];
            errorsList.push(stateItem.errorMessage);
        }

        setErrors(errorsList);
    }, [state]);

    const handleClose = useCallback(() => {
        setErrors([]);
    }, []);

    const handleSnackbarClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        handleClose(false);
    }, []);

    const shoulShowToast = useMemo(() => !!(errors.length && errors[errors.length - 1]), [errors]);

    if (errors && errors.length) {
        return (
            <Snackbar onClose={handleSnackbarClose} open={shoulShowToast} autoHideDuration={3000}>
                <div>
                    {errors.map(errorMessage => <Alert severity="error">{errorMessage}</Alert>)}
                </div>
                 {/* <Alert onClose={handleClose} severity="error">{errors[errors.length - 1]}</Alert> */}
            </Snackbar>
        );
    }

    return null;
}