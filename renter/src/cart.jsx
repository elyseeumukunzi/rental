import React, { useState } from 'react';
import { TextField, Button, IconButton, Grid, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = (products) => {
  // Static products data for testing and customization

  const staticProducts = [
    { id: 1, clientname: 'iPhone 12', companyname: '5.4-inch mini display', price: 699, image: '/iphone12.jpg', quantity: 1 },
    { id: 2, clientname: 'Samsung Galaxy S21', companyname: '6.2-inch display', price: 799, image: '/samsungs21.jpg', quantity: 1 },
    { id: 3, clientname: 'Google Pixel 6', companyname: '6.4-inch display', price: 599, image: '/pixel6.jpg', quantity: 1 },
  ];

  //const selectedproducts = localStorage.getItem('products');


  // State for the selected product, they are going to be in local storage
  


  // State for the cartItems (initialized with static products)
  const [cartItems, setCartItems] = useState(staticProducts);

  // Handle quantity change (increment or decrement)
  const handleQuantityChange = (productId, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Typography variant="h5">Shopping Cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={2}>
                {/* Image */}
                <img src={item.image} alt={item.clientname} width="100%" />
              </Grid>
              <Grid item xs={4}>
                {/* Product Name */}
                <Typography variant="body1">{item.clientname}</Typography>
                <Typography variant="caption">{item.companyname}</Typography>
              </Grid>
              <Grid item xs={2}>
                {/* Price */}
                <Typography variant="body2">${item.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                {/* Quantity Control */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                    <AddIcon />
                  </IconButton>
                </div>
              </Grid>
              <Grid item xs={2}>
                {/* Total Price for item */}
                <Typography variant="body1">${item.price * item.quantity}</Typography>
              </Grid>
              <Grid item xs={1}>
                {/* Remove Button */}
                <IconButton onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Total Section */}
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6">Subtotal: ${calculateTotal()}</Typography>
        <Button variant="contained" color="primary">
          Check out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
