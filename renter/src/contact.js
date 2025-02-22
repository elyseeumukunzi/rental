import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, Navigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { padding } from '@mui/system';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Umunyenga
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Aboutus() {
    const navigate = useNavigate();


    const [showAlert, setShowAlert] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [contacts, setContacts] = React.useState('');





    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, message);
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost/umunyenga/api.php', {
            target: 'contactUs',
            firstName,
            lastName,
            message,
            email,
            adress,
            contacts
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            res => {
                setShowAlert(true);
                const message = res.data.message
                const value = res.data.value;
                const username = res.data.username;
                setMessage(message);
                if (value == 1) {
                    navigate("/home");
                } else {
                    //
                }


            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'whitesmoke',  
                            padding: '12',
                            height: '90%'
                        }}
                    >
                        <br></br>
                        <Typography variant='h5'>Where you can find us</Typography>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MapsHomeWorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Where you can find us" secondary="Kigali Rwanda" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="larentals123@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FacebookIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Facebook" secondary="Larentals Rwanda" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Office Contact" secondary="+250789817969" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Field contacts" secondary="+250789817969" />
      </ListItem>
    </List>
 

                    </Box>
                    </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: 'none'
                            
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <MailIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Send us your message
                            {showAlert && <Alert severity="success">{message}</Alert>}
                        </Typography>
                        <p />
                        

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Last name"                                    
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={5} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                maxRows={4}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Message"
                                type="password"
                                autoComplete="current-password"
                                multiline   
                                maxRows={4}
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}

                            />

                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Adress"
                                        fullWidth
                                        id="adress"
                                        label="Adress"
                                        
                                        value={adress}
                                        onChange={(event) => setAdress(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="Contacts"
                                        label="Contacts"
                                        name="contacts"
                                        value={contacts}
                                        onChange={(event) => setContacts(event.target.value)}
                                    />
                                </Grid>
                            </Grid>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                SEND
                                <SendIcon />

                            </Button>
                            <Grid container>

                            </Grid>
                            
                        </Box>
                    </Box>
                </Grid>
                <Grid 
                 item
                 xs={12}
                 sm={12}
                 md={12}
                 sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
                >
            <Footer />
            </Grid>
                

            </Grid>
            


        </ThemeProvider>
    );
}