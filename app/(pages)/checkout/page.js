'use client';
import {useCart} from '@/context/cartContext';
import {useState} from 'react';

export default function Checkout() {
 const {cartItems} = useCart();
 const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
 );

 const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  address: '',
  city: '',
  country: '',
  zip: '',
 });

 const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
 };

 const handlePlaceOrder = () => {
  alert('Order placed successfully!');
 };

 return (
  <div className="page-checkout">
   <div className="checkout-container">
     <div className="checkout-grid">
      {/* LEFT - Form */}
      <div className="checkout-form">
       <h2>Billing & Shipping</h2>
       <form>
        <label>Full Name</label>
        <input
         type="text"
         name="fullName"
         value={formData.fullName}
         onChange={handleChange}
         required
        />

        <label>Email</label>
        <input
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
        />

        <label>Address</label>
        <input
         type="text"
         name="address"
         value={formData.address}
         onChange={handleChange}
         required
        />

        <label>City</label>
        <input
         type="text"
         name="city"
         value={formData.city}
         onChange={handleChange}
         required
        />

        <label>Country</label>
        <input
         type="text"
         name="country"
         value={formData.country}
         onChange={handleChange}
         required
        />

        <label>ZIP Code</label>
        <input
         type="text"
         name="zip"
         value={formData.zip}
         onChange={handleChange}
         required
        />
       </form>
      </div>

      {/* RIGHT - Summary */}
      <div className="checkout-summary">
       <h2>Order Summary</h2>
       {cartItems.map((item) => (
        <div className="summary-item" key={item.id}>
         <span>
          {item.title} x {item.quantity}
         </span>
         <span>$ {(item.price * item.quantity).toLocaleString()}</span>
        </div>
       ))}
       <div className="summary-total">
        <strong>Total</strong>
        <strong>$ {totalPrice.toLocaleString()}</strong>
       </div>
       <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
       </button>
      </div>
     </div>
    </div>
   </div>
 );
}
