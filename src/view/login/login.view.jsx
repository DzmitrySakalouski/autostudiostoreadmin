import { TextField, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useForm, Controller } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startAuthentication } from '../../store/actions';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100vh',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        height: 300,
        maxWidth: 400,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 50,
    }
});

export const LoginView = () => {
    const classes = useStyles();
    const { control, handleSubmit, formState: {errors} } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userAuthData} = useSelector(state => state.auth);

    const onSubmit = useCallback((data) => {
        const {email, password} = data;
        dispatch(startAuthentication({email, password}));
    }, [dispatch]);

    useEffect(() => {
        if (userAuthData?.token) {
            navigate('/dashboard');
        }
    }, [userAuthData, navigate]);

    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <LockOpenIcon sx={{ fontSize: 60 }} />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: {
                            value: true,
                            message: "Это поле не может быть пустым"
                        },
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Ошибка в емейле"
                        }
                    }}
                    render={({field: {value, onChange, onBlur} }) => {
                        return <TextField
                            label="Email"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={!!errors?.email}
                            helperText={errors?.email?.message} />
                    }
                    }
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: {
                            value: true,
                            message: "Это поле не может быть пустым"
                        }
                    }}
                    render={({field: { onChange, value, onBlur }}) =>
                        <TextField
                            label="Password"
                            onChange={onChange}
                            value={value}
                            type="password"
                            onBlur={onBlur}
                            error={!!errors?.password}
                            helperText={errors?.password?.message} />
                    }
                />

                <Button
                    className={classes.button}
                    onClick={handleSubmit(onSubmit)}
                    variant="contained">
                    Login
                </Button>
            </Paper>

        </div>
    );
}