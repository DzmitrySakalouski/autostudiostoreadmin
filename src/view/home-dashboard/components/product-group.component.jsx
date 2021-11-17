import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProductGroupItem = ({ name, description, image }) => {
    return (
        <Card sx={{ width: 325 }} style={{}}>
            <CardMedia
                component="img"
                height="180"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Редактировать</Button>
                <Button size="small">Подробнее</Button>
            </CardActions>
        </Card>
    );
}