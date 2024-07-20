import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log('Adding to cart:', item);
    setCart((prevCart) => [...prevCart, item]);
  };
  
  const removeFromCart = (item) => {
    console.log('Removing from cart:', item);
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.Name !== item.Name));
  };

  const removeAll = () => {
    console.log("Removing all");
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};
