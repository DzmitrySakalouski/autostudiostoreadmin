import { TextField, Paper, Button } from '@mui/material';
import {makeStyles} from '@mui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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
    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <LockOpenIcon sx={{fontSize: 60}} />
                <TextField label="Email" />
                <TextField label="Password" />
                <Button className={classes.button} variant="contained">Login</Button>
            </Paper>

        </div>
    );
}