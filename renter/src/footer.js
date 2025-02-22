import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
           UMUKUNZI Elysee
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    return (
        <ThemeProvider>

       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
       <Typography variant="h6" align="center" gutterBottom>
         LARENTALS
       </Typography>
       <Typography
         variant="subtitle1"
         align="center"
         color="text.secondary"
         component="p"
       >
         Innovate Solve Excel
       </Typography>
       <Copyright />
     </Box>
     {/* End footer */}
   </ThemeProvider>
    );
  }