import { Snackbar, Alert } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ErrorToast = ({ errorMessage }) => {
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

    if (errors && errors.length) {
        return (
            <Snackbar open={errors.length && errors[errors.length - 1]} autoHideDuration={300}>
                <Alert onClose={handleClose} severity="error">{errors[errors.length - 1]}</Alert>
            </Snackbar>
        );
    }

    return null;
}