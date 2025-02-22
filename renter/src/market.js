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
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from './footer';
import Propert from './propertcard';
import axios, { Axios } from 'axios';
const cards = [1, 2, 3,];


const theme = createTheme();

export default function Market({ category }) {

  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/properties', {


    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      res => {
        setProperties(res.data);


      }
    );




  }, [])
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
              component="h5"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              RALENTALS is helping you in Rwanda to find the best or cheapest properties for rent, both from private or real estate brokers and agents. LARENTALS uses high level algolithms finding and offer your the best rents in the country
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Dukoresha ikoranabuhanga ryumurongo mugari wa internet guhuza ndetse no kubika amakuru kuba client nubuguzi
            </Typography> */}
          </Container>
        </Box>
        <Container sx={{ py: 10 }}>

          {/* End hero unit */}
          <Grid container spacing={4}>
            {properties.map((property) => (
              <Propert title={property.title} image={property.image1} description={property.description} location={property.location} price={property.price} id={property.id}/>

            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}