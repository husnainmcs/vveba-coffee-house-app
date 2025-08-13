'use client';

import {useEffect, useState} from 'react';

export default function Cart() {
 const [cart, setCart] = useState([]);

 useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) setCart(JSON.parse(savedCart));
 }, []);

 const handleRemove = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
 };

 const handleQuantityChange = (id, amount) => {
  const updatedCart = cart.map((item) =>
   item.id === id
    ? {...item, quantity: Math.max(1, item.quantity + amount)}
    : item
  );
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
 };

 const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
 );

 return (
  <div className="page-cart">
   <div className="cart-container">
    <h1>Your Cart</h1>
    {cart.length === 0 ? (
     <p>Your cart is empty.</p>
    ) : (
     <div>
      {cart.map((item) => (
       <div className="cart-item" key={item.id}>
        <img src={item.image} alt={item.title} className="cart-item-img" />
        <div>
         <h2>{item.title}</h2>
         <p>${item.price.toFixed(2)}</p>
         <div className="cart-actions">
          <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
         </div>
        </div>
       </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
     </div>
    )}
   </div>
  </div>
 );
}
