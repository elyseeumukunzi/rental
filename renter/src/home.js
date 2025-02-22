import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/system';
import { Typography } from '@mui/system';
import Box from '@mui/material/Box';
import { Unstable_Grid2, Grid, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ActionAreaCard from './card';
import axios from 'axios';
import Landpage from './aboutus';


export default function Home() {
  const [message, setMessage] = React.useState('');

  return (
    <>
   
       <Landpage />
     
    </>
  );
}