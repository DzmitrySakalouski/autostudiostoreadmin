import { Snackbar, Alert } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const ErrorToast = () => {
    const state = useSelector(state => state);
    const [errors, setErrors] = useState([]);

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
    }, [handleClose]);

    const shoulShowToast = useMemo(() => !!(errors.length && errors[errors.length - 1]), [errors]);

    if (errors && errors.length) {
        return (
            <Snackbar onClose={handleSnackbarClose} open={shoulShowToast} autoHideDuration={3000}>
                <div>
                    {errors.map((errorMessage, index) => <Alert key={errorMessage + index} severity="error">{errorMessage}</Alert>)}
                </div>
            </Snackbar>
        );
    }

    return null;
}