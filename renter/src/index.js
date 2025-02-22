import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./appbar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = "9553638573-svntf460r32kvn0j4fugt9fm6564rh7v.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/login";

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="9553638573-svntf460r32kvn0j4fugt9fm6564rh7v.apps.googleusercontent.com" CLIENT_SECRET={CLIENT_SECRET} REDIRECT_URI={REDIRECT_URI} >
            
    <App />
    </GoogleOAuthProvider>   

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
