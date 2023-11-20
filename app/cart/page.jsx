"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [userId, setUserId] = useState(/* obtain user ID after authentication */);
  const [cart, setCart] = useState({ cartItems: [], totalQuantity: 0 });

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const fetchCart = () => {
    axios.get(`http://localhost:3030/api/v1/cart?userId=${userId}`)
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  };

  const removeFromCart = (productId) => {
    axios.delete(`http://localhost:3030/api/v1/cart/remove?userId=${userId}&productId=${productId}`)
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error removing from cart:', error));
  };

  const updateQuantity = (productId, newQuantity) => {
    axios.put(`http://localhost:3030/api/v1/cart/update?userId=${userId}&productId=${productId}&quantity=${newQuantity}`)
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error updating quantity:', error));
  };

  return (
    <div className="bg-green-50 p-4 flex min-h-screen flex-col items-center justify-between ml-52 mt-20">
      <h1>Your Shopping Cart</h1>

      <div>
        <h2>Total Quantity: {cart.totalQuantity}</h2>

        <ul>
          {cart.cartItems.map((item, index) => (
            <li key={index}>
              <p>{`Product ID: ${item.productId}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
              
              {/* Remove from Cart button */}
              <button onClick={() => removeFromCart(item.productId)}>Remove from Cart</button>
              
              {/* Update Quantity input */}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.productId, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => console.log('Proceed to Checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;


