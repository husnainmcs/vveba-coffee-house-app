import React from 'react';

export default function About() {
 const aboutData = [
  {
   id: 1,
   icon: <i className="fa-solid fa-mobile"></i>,
   title: 'Easy to Order',
   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut suscipit, quod quidem cumque rerum.',
  },
  {
   id: 2,
   icon: <i className="fa-solid fa-truck"></i>,
   title: 'Fastest Delivery',
   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut suscipit, quod quidem cumque rerum.',
  },
  {
   id: 3,
   icon: <i className="fa-solid fa-mug-hot"></i>,
   title: 'Quality Coffee',
   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut suscipit, quod quidem cumque rerum.',
  },
 ];
 return (
  <section className="about">
   {aboutData.map((data) => (
    <div key={data.id}>
     {data.icon}
     <h1>{data.title}</h1>
     <p>
     {data.des}
     </p>
    </div>
   ))}
  </section>
 );
}
