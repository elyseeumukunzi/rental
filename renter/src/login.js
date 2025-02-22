import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import { Facebook, Google } from '@mui/icons-material';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
const theme = createTheme();
export default function Login() {
  const refresh = () => window.location.reload(true)
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [resData, setResData] = React.useState('');
  const [user, setUser] = React.useState('');



  function refreshPage() {
    window.location.reload(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post('http://localhost/depot/api.php', {
      target: 'signup',
      firstName,
      lastName,
      phone,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then(
        res => {
          console.log(res.data);
          setResData(res.data);
          setMessage(resData.message);
          setShowAlert(true);
          setFirstName(''); setLastName(''); setPhone(''); setEmail(''); setUserName(''); setPassword('');
          navigate("/login");
          // console.log('the message is', message);

        }
      )
      .catch(
        error => console.log(error)
      );

  }

  //handle google login 

  const handleGoogleLogin = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded User:", decoded);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: decoded.email,
        name: decoded.name,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Store token for session
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user info
        navigate("/home"); // Redirect to home page
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 8
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN <br />
            {showAlert && <Alert severity="success">{message}</Alert>}

          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
              LOGIN
            </Button>
            {/* <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#db4437", color: "white" }}


            >
              <Google variant="sucess" />
              Login with Google
            </Button> */}

            {/* <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            /> */}

            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => console.log("Login Failed")}
              />
            </div>

           
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/signup' variant="body2">
                  Create Account
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}