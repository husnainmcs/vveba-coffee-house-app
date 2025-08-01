'use client';
import {useEffect, useRef, useState} from 'react';

export default function Data() {
 const sectionRef = useRef(null);
 const [hasStarted, setHasStarted] = useState(false);

 const startCount = (el) => {
  const target = parseInt(el.dataset.val);
  let current = 0;
  const duration = 2000;
  const increment = Math.ceil(target / (duration / 20));

  const counter = setInterval(() => {
   current += increment;
   if (current >= target) {
    el.textContent = target;
    clearInterval(counter);
   } else {
    el.textContent = current;
   }
  }, 20);
 };

 useEffect(() => {
  const handleScroll = () => {
   if (!hasStarted && sectionRef.current) {
    const top = sectionRef.current.offsetTop;
    if (window.scrollY + window.innerHeight >= top) {
     const nums = sectionRef.current.querySelectorAll('.num');
     nums.forEach((num) => startCount(num));
     setHasStarted(true);
    }
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, [hasStarted]);

 return (
  <section
   ref={sectionRef}
   className="data grid grid-cols-2 md:grid-cols-4 gap-6 py-10 text-center"
  >
   {[
    {val: 350, label: 'Coffee Branches'},
    {val: 90, label: 'Number of Awards'},
    {val: 2540, label: 'Happy Customers'},
    {val: 750, label: 'Staff'},
   ].map((item, idx) => (
    <div key={idx}>
     <div className="icon-wrapper relative inline-block mb-2">
      <i className="fa-solid fa-mug-hot text-3xl z-10 relative"></i>
      <span className="icon-bg absolute inset-0 bg-orange-100 rounded-full -z-10"></span>
     </div>
     <span className="num block text-3xl font-bold" data-val={item.val}>
      0
     </span>
     <span className="info block text-sm text-gray-600">{item.label}</span>
    </div>
   ))}
  </section>
 );
}
