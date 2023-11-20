"use client"

import { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the cart state
const CartContext = createContext();

// CartProvider component manages the cart state and provides an update function
export const CartProvider = ({ children }) => {
  // State to store cart information
  const [cart, setCart] = useState({ cartItems: [], totalQuantity: 0 });

  useEffect(() => {
    // Fetch cart data or initialize it based on your application logic
    // For simplicity, let's assume it's managed globally

    // Example: Fetch cart data from a backend API
    const fetchCartData = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/v1/cart', {
          // Include any necessary headers or credentials
        });

        if (response.ok) {
          const data = await response.json();
          setCart(data);
        } else {
          // Handle error
          console.error('Failed to fetch cart data');
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  // Function to update the cart state
  const updateCart = (newCart) => {
    setCart(newCart);
  };

  // Provide the cart state and updateCart function to all child components
  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to conveniently use the CartContext in functional components
export const useCart = () => {
  return useContext(CartContext);
};


