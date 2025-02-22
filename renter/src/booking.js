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
import { Link, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from './footer';
import Propert from './propertcard';
import axios, { Axios } from 'axios';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { List, ListItem, ListItemIcon, ListItemText, TextareaAutosize } from '@mui/material';
import { Check, Folder } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const cards = [1, 2, 3,];
function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));



const theme = createTheme();

export default function Booking({ category }) {
    const location = useLocation();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const [property, setProperty] = React.useState();
    const [properties, setProperties] = React.useState([]);
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [features, setFeatures] = React.useState([]);
    const isLoggedIn = !!localStorage.getItem("user");
    const navigate = useNavigate();
    const [from, setFrom] = React.useState(''); 
    const queryParams = new URLSearchParams(location.search);
    const propertyId = queryParams.get("id"); // Extract 'id' from URL
    const [formData, setFormData] = React.useState({
        start_date: "",
        end_date: "",
        phone: "",
        status: "0",
        property_id: propertyId || "",
        user_id: localStorage.getItem("userid") || "",

    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('http://127.0.0.1:8000/api/createbooking', formData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(
                res => {
                    console.log(res.data);
                    navigate("/bookings");

                }
            )
            .catch(
                error => console.log(error)

            );

    };

        React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/features?id=${id}`, {


        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            res => {
                setFeatures(res.data);


            }
        );
    }, [])

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/property?id=${id}`, {


        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            res => {
                setProperty(res.data);


            }
        );
    }, [])

    React.useEffect(() => {



    }, [])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">

            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 10,

                    }}
                >
                    <Container maxWidth="md">

                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            <b>{property ? (property.title) : ("")}</b>

                        </Typography>
                    </Container>
                </Box>

                <Grid container spacing={2}>

                    {property ? (
                        <>
                            <Grid item xs={4}>
                                <Card sx={{ width: "100%", height: 250, flexGrow: 1 }}>
                                    <CardMedia
                                        component="img"
                                        src={`http://127.0.0.1:8000/storage/${property.image1}`}
                                        loading="lazy"
                                        alt="Property Image"
                                        sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Correctly applies styles
                                    />


                                </Card>
                            </Grid>

                            <Grid item xs={4}>
                                <Card sx={{ width: "100%", height: 250, flexGrow: 1 }}>
                                    <CardMedia
                                        component="img"
                                        src={`http://127.0.0.1:8000/storage/${property.image2}`}
                                        loading="lazy"
                                        alt="Property Image"
                                        sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Correctly applies styles
                                    />


                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ width: "100%", height: 250, flexGrow: 1 }}>
                                    <CardMedia
                                        component="img"
                                        src={`http://127.0.0.1:8000/storage/${property.image3}`}
                                        loading="lazy"
                                        alt="Property Image"
                                        sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Correctly applies styles
                                    />


                                </Card>
                            </Grid>
                        </>


                    ) : (
                        <p>Loading property details...</p>
                    )}
                </Grid>
                <Container sx={{ py: 5 }}>

                    <Grid container spacing={2} sx={{ mt: 2 }}>

                        <Grid item xs={8}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Here are some features of the property
                            </Typography>
                            <Demo>
                                <List dense>
                                    {features.length > 0 ? (
                                        features.map((feature, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <Check />
                                                </ListItemIcon>
                                                <ListItemText primary={feature.name} />
                                            </ListItem>
                                        ))
                                    ) : (
                                        <ListItem>
                                            <ListItemText primary="No features available" />
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                            <Typography sx={{ mt: 30, mb: 2 }} variant="h6" component="div">
                                Similar Properties
                            </Typography>
                            <Grid container spacing={4} sx={{ mt: 4 }}>

                                {properties.map((property) => (
                                    <Propert title={property.title} image={property.image1} description={property.description} price={property.price} id={property.id}  />

                                ))}
                            </Grid>


                        </Grid>
                        <Grid item xs={4}>
                            <Typography><b>Book Now a {property ? (property.title) : ("")}</b></Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>

                                        <TextField
                                            autoComplete="dates"
                                            name="start_date"
                                            required
                                            fullWidth
                                            id="start_date"
                                            label="From Dates"
                                            value={formData.from}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="end_date"
                                            label="To Dates"
                                            name="end_date"
                                            autoComplete="dates"
                                            value={formData.to}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            autoComplete="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                // onClick={refresh}
                                >
                                    BOOK NOW
                                </Button>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </ThemeProvider>
    );
}