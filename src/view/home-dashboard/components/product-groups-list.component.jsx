import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { ProductGroupItem } from "./product-group.component";

const useStyles = makeStyles({
    conatainer: {
        padding: "16px",
    }
})

export const ProductGroupList = () => {
    const { groups } = useSelector(state => state.productGroups);
    const classes = useStyles();

    if (!groups?.length) {
        return (
            <h1>Групп нет</h1>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.conatainer}>
                {groups.map(group => (
                    <Grid item >
                        <ProductGroupItem key={group.id} name={group.name} image={group.imageUrl} description={group.description} />
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}