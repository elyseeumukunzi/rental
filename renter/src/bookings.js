import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CalendarMonth, NoteAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Propert from './propertcard';
import axios from 'axios';
import { CircularProgress } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'start_date', headerName: 'From Dates', width: 130 },
    { field: 'end_date', headerName: 'To dates', width: 130 },
    { field: 'property_title', headerName: 'Property', width: 130 },
    { field: 'comment', headerName: 'Aditional Comment', width: 130 },

    {
        field: "status",
        headerName: "Booking Status",
        width: 150,
        renderCell: (params) => {
            switch (params.value) {
                case "0":
                    return <CircularProgress size={20} color="warning" />;
                case "1":
                    return <CheckCircle style={{ color: "green" }} />;
                case "2":
                    return <Cancel style={{ color: "red" }} />;
                    default:
                        return <Typography>Unknown</Typography>;
               
            }
        }
    },
    {
        field: "cancel",
        headerName: "Action",
        width: 150,
        renderCell: (params) => (
          <Button
            variant="contained"
            color="error"
            size="small"
            disabled={params.row.status === 2} // Disable button if already cancelled
          >
            Cancel Booking
          </Button>
        ),
      },



];

const rows = [
    { id: 1, start_date: 'start dates', end_date: 'end dates', property_id: 'property', comment: 'comment', status: 'status', cancel:'cancel' },

];
const userid = localStorage.getItem('userid');


export default function Bookings() {
    const [bookings, setBookings] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/selectbookings?userid=${userid}`, {


        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            res => {
                setBookings(res.data);


            }
        );
    }, [])

    React.useEffect(() => {
    }, [])


    return (
        <>
            <Box
                sx={{
                    my: 8,
                    pt: 5,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'whitesmoke',
                    padding: '12',
                    height: '90%'
                }}
            >
                <Typography variant='h5'>My BOOKING LIST   <Link to='../items' style={{ textDecoration: 'none' }}> <Button variant="contained"> <CalendarMonth></CalendarMonth> New Booking</Button> </Link></Typography>


                <div style={{ height: 400, width: '100%' }} >
                    <DataGrid
                        rows={bookings}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />

                </div>
            </Box>



        </>
    );
}