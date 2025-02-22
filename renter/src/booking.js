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

const cards = [1, 2, 3,];



const theme = createTheme();

export default function Booking({ category }) {
    const location = useLocation();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const [property, setProperty] = React.useState();
    const [properties, setProperties] = React.useState([]);


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
    //save booking 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('http://localhost/depot/api.php', {
            //variables to be submited            
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(
                res => {
                    console.log(res.data);
                    //   setResData(res.data);
                    //   setMessage(resData.message); 
                    //   setShowAlert(true);
                    //   setFirstName('');setLastName('');setPhone('');setEmail('');setUserName('');setPassword(''); 
                    //   navigate("/login");    
                    // console.log('the message is', message);

                }
            )
            .catch(
                error => console.log(error)
            );

    }
    const navigate = useNavigate();
    //   const history = useHistory();
    //   const toproduct = () => {
    //     history.push("/Home")
    // }
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
                            Grid 8
                        </Grid>
                        <Grid item xs={4}>
                            <Typography><b>Book Now a {property ? (property.title) : ("")}</b></Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"

                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone number"
                                            name="phone"
                                            autoComplete="phone"

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"

                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"


                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I want to receive inspiration, marketing promotions and updates via email."
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
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to='/login' variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
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