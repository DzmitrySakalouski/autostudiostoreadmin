import { Backdrop, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useCallback, useMemo, useState } from "react";

const useStyles = makeStyles({
    containerTooltip: {
        width: '90%',
    }
})

export const AddItemMenuComponent = ({actions}) => {
    const [isMenuOpened, setMenuOpened] = useState(false);
    const handleClose = useCallback(() => setMenuOpened(false), []);
    const handleOpen = useCallback(() => setMenuOpened(true), []);
    const classes = useStyles();

    return (
        <>
            <Backdrop open={isMenuOpened} />
            <SpeedDial 
                ariaLabel="menu"
                sx={{position: 'fixed', top: 16, right: 16}}
                onOpen={handleOpen}
                onClose={handleClose}
                open={isMenuOpened}
                icon={<SpeedDialIcon color="red" />}
                direction="down"
            >
                {actions?.map(action => (
                    <SpeedDialAction 
                        key={action.name}
                        className={classes.containerTooltip}
                        tooltipTitle={action.name}
                        icon={action.icon}
                        onClick={action.actionHandler}
                    />
                ))}
            </SpeedDial>
        </>
    )
}