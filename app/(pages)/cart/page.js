'use client';
import {useCart} from '@/context/cartContext';
import {useRouter} from 'next/navigation';

export default function Cart() {
 const {cartItems, removeFromCart, changeQuantity} = useCart();

 const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
 );

 const router = useRouter();
 const handleCheckout = () => {
  router.push('/checkout');
 };

 return (
  <div className="page-cart">
   <div className="cart-container">
    {cartItems.length === 0 ? (
     <p>Your cart is empty.</p>
    ) : (
     <div className="cart-grid">
      {/* LEFT - Cart Items */}
      <div className="cart-left">
       <h2 className="cart-heading">Shopping Cart</h2>
       {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
         <img src={item.image} alt={item.title} className="cart-item-img" />
         <div className="cart-item-info">
          <h3>{item.title}</h3>
          <p className="price">${item.price.toLocaleString()}</p>
          <div className="cart-actions">
           <button onClick={() => changeQuantity(item.id, -1)}>-</button>
           <span>{item.quantity}</span>
           <button onClick={() => changeQuantity(item.id, 1)}>+</button>
           <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
           >
            ✕
           </button>
          </div>
         </div>
         <div className="subtotal">
          $ {(item.price * item.quantity).toLocaleString()}
         </div>
        </div>
       ))}
      </div>

      {/* RIGHT - Summary */}
      <div className="cart-summary">
       <h2>Summary</h2>
       <div className="summary-row">
        <span>Subtotal</span>
        <span>$ {totalPrice.toLocaleString()}</span>
       </div>
       <div className="summary-row total">
        <strong>Order Total</strong>
        <strong>$ {totalPrice.toLocaleString()}</strong>
       </div>
       <button onClick={handleCheckout} className="checkout-btn">
        Go to Checkout
       </button>
       <button className="multi-address-btn">
        Check Out with Multiple Addresses
       </button>
      </div>
     </div>
    )}
   </div>
  </div>
 );
}

/*
'use client';
import {useCart} from '@/context/cartContext';

export default function Cart() {
 const {cartItems, removeFromCart, changeQuantity} = useCart();

 const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
 );

 return (
  <div className="page-cart">
   <div className="cart-container">
    <div className="shop-center">
     <h3 className="main-heading">Your Cart</h3>
     <h1>Flavor Pick</h1>
    </div>
    {cartItems.length === 0 ? (
     <p>Your cart is empty.</p>
    ) : (
     <div>
      {cartItems.map((item) => (
       <div className="cart-item" key={item.id}>
        <img src={item.image} alt={item.title} className="cart-item-img" />
        <div>
         <h2>{item.title}</h2>
         <p>${item.price.toFixed(2)}</p>
         <div className="cart-actions">
          <button onClick={() => changeQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => changeQuantity(item.id, 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
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
*/
