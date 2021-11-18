import { Snackbar, Alert } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const ErrorToast = () => {
    const { auth, user, productGroups } = useSelector(state => state);
    const [errors, setErrors] = useState([]);
    const [isOpened, setOpened] = useState(false);

    useEffect(() => {
        const errorsList = [auth, user, productGroups];

        if (errorsList.some(item => Boolean(item.errorMessage))) {
            setOpened(true);
        }

        setErrors(errorsList);
    }, [auth, user, productGroups]);

    const handleClose = useCallback(() => {
        setErrors([]);
    }, []);

    const handleSnackbarClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpened(false);
    }, [handleClose]);

    const shoulShowToast = useMemo(() => !!(errors.length && errors[errors.length - 1]), [errors]);

    console.log(
        "ERRORS", errors
    );

    if (errors && errors.length) {
        return (
            <Snackbar onClose={handleSnackbarClose} open={isOpened} autoHideDuration={3000}>
                <div>
                    {
                        [auth, user, productGroups].map((item, index) =>
                        item.errorMessage ? <Alert key={item.errorMessage + index} severity="error">{item.errorMessage}</Alert> : null)}
                </div>
            </Snackbar>
        );
    }

    return null;
}