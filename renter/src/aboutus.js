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
import Propert from './propertcard';
import axios, { Axios } from 'axios';
import CustomizedList from './listcard';
import { useNavigate } from "react-router-dom";

const cards = [1, 2, 3,];
const theme = createTheme();
export default function Landpage() {

  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
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
            pt: 8,
            pb: 0,
          }}
        >
          <Container maxWidth="md">
            <br></br><br></br>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Rent your perfect choice  <b>With LARENTALS</b>

            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Browse a wide selection of rental properties and book your next home, office or apartment hassle-free. Start your search today!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Abakiriya</Button>
              <Button variant="outlined">Isoko</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 1 }}>

          {/* End hero unit */}
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container spacing={4}>
                {properties.map((property) => (
                  <Propert title={property.title} image={property.image1} description={property.description} price={property.price} id={property.id} />

                ))}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <CustomizedList />
            </Grid>
          </Grid>
        </Container>
        <container> <Typography
          component="h4"
          variant="h4"
          p={10}
          align="center"
          color="text.primary"
          gutterBottom
        >Select From our suggestions list</Typography></container>

        <Container sx={{ py: 10 }}>

          {/* End hero unit */}
          <Grid container spacing={4}>
            {properties.map((property) => (
              <Propert title={property.title} image={property.image1} description={property.description} location={property.location} price={property.price} id={property.id} />

            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}