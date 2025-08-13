export default function Menu() {

  const menuImg = [
   '/images/image4.jpg',
   '/images/image6.jpg',
   '/images/image7.jpg',
   '/images/image5.jpg',
  ];

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
          {
            menuImg.map((img, idx) => (
               <div key={idx} className="menu-img-wrapper">
                <img src={img} />
               </div>
              ))
          }      
     </div>
    </div>
   </section>
  );
}
