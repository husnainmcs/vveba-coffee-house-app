'use client';
import {useEffect} from 'react';
import Link from 'next/link';

export default function Navbar() {
 const navItems = [
  {label: 'Home', link: '#'},
  {label: 'Menu', link: '#'},
  {label: 'Blog', link: '#'},
  {label: 'About', link: '#'},
  {label: 'Shop', link: '#'},
  {label: 'Contact', link: '#'},
  {label: <i className="fa-solid fa-cart-shopping"></i>, link: '#'},
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
