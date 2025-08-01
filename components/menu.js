import React from 'react'

export default function Menu() {
  return (
   <section className="menu">
    <div className="menu-left">
     <h3 className="main-heading">Discover</h3>
     <h1>Our Menu</h1>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      accusantium vitae fugiat perferendis. Inventore rem debitis consequatur
      dolorum voluptatum. Repudiandae?
     </p>
     <button type="button" className="menu-btn">
      View Full Menu
     </button>
    </div>
    <div className="menu-right">
     <div className="menu-right-images">
      <div className="menu-img-wrapper">
       <img src="/images/image4.jpg" />
      </div>
      <div className="menu-img-wrapper">
       <img src="/images/image5.jpg" />
      </div>
      <div className="menu-img-wrapper">
       <img src="/images/image6.jpg" />
      </div>
      <div className="menu-img-wrapper">
       <img src="/images/image7.jpg" />
      </div>
     </div>
    </div>
   </section>
  );
}
