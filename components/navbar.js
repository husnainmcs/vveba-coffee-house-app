'use client';
import {useCart} from '@/context/cartContext';
import {useEffect} from 'react';
import Link from 'next/link';

export default function Navbar() {
 const {cartItems} = useCart();
 const navItems = [
  {label: 'Home', link: '/'},
  {label: 'Menu', link: '#menu'},
  {label: 'Blog', link: '#'},
  {label: 'About', link: '#'},
  {label: 'Shop', link: '/shop'},
  {label: 'Contact', link: '#'},
  {label: <i className="fa-solid fa-cart-shopping"></i>, link: '/cart'},
 ];

 useEffect(() => {
  const handleScroll = () => {
   const navbar = document.querySelector('.navbar');
   if (navbar) {
    navbar.classList.toggle('sticky', window.scrollY > 0);
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);
 // 🔹 Update CSS variable for cart count
 useEffect(() => {
  const nav = document.querySelector('.navigation a:last-child');
  if (nav) {
   nav.style.setProperty('--cart-count', `"${cartItems.length}"`);
  }
 }, [cartItems]);

 return (
  <nav className="navbar transition-all duration-300">
   <div className="logo">
    <i className="fa-solid fa-mug-saucer"></i>
    <div className="logo-text">
     <span>Coffee</span>
     <span>House</span>
    </div>
   </div>
   <div className="navigation">
    {navItems.map((item, i) => (
     <Link key={i} href={item.link}>
      {item.label}
     </Link>
    ))}
   </div>
  </nav>
 );
}


/*

{
   label: (
    <div style={{position: 'relative'}}>
     <i className="fa-solid fa-cart-shopping"></i>
     {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </div>
   ),
   link: '/cart',
  },

*/