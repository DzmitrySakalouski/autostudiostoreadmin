import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

export const ProductGroupItem = ({ name, description, image, onDelete }) => {
    return (
        <Card sx={{ width: 325 }} style={{}}>
            <CardHeader
                action={
                    <IconButton onClick={onDelete} aria-label="settings">
                        <DeleteForeverOutlined />
                    </IconButton>
                }
                title={name}
            />
            <CardMedia
                component="img"
                height="180"
                image={image}
                alt="green iguana"
            />
            <CardContent>
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