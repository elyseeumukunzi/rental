import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './footer';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { AttachMoney, FavoriteOutlined, FmdGood, Hotel, Share, ShareOutlined } from '@mui/icons-material';

export default function Propert({ title, description, image, location, price, id }) {
    const navigate = useNavigate();


    return (
        <Grid item key={1} xs={12} sm={6} md={4}>
            <Card >
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={`http://127.0.0.1:8000/storage/${image}`}
                //image={require('http://127.0.0.1:8000/storage/app/public/appartment1.webp')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}


                    </Typography>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Hotel /> <Typography>4 Beds</Typography>
                        </IconButton>
                        <IconButton aria-label="share">
                            <AttachMoney /> <Typography>{price}</Typography>
                        </IconButton>

                    </CardActions>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" color="success" component={Link} href={`/booking?id=${id}`}>BOOK Now</Button>
                    <Button variant="outlined" size="small" sx={{ ml: 2 }}>Read More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
