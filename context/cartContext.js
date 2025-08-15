'use client';
import {createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
 const [cartItems, setCartItems] = useState([]);

 // Load from localStorage on mount
 useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
   setCartItems(JSON.parse(savedCart));
  }
 }, []);

 // Save to localStorage whenever cartItems change
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
 }, [cartItems]);

 const addToCart = (product) => {
  // Agar product already hai to quantity badhao
  setCartItems((prev) => {
   const existing = prev.find((item) => item.id === product.id);
   if (existing) {
    return prev.map((item) =>
     item.id === product.id ? {...item, quantity: item.quantity + 1} : item
    );
   }
   return [...prev, {...product, quantity: 1}];
  });
 };

 const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
 };

 const changeQuantity = (id, amount) => {
  setCartItems((prev) =>
   prev.map((item) =>
    item.id === id
     ? {...item, quantity: Math.max(1, item.quantity + amount)}
     : item
   )
  );
 };

 return (
  <CartContext.Provider
   value={{cartItems, addToCart, removeFromCart, changeQuantity}}
  >
   {children}
  </CartContext.Provider>
 );
}

export function useCart() {
 return useContext(CartContext);
}
