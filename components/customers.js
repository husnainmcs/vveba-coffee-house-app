import React from 'react';

const clientsData = [
 {
  id: 1,
  feedback:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos, maiores commodi sint voluptatum atque iusto itaque. Voluptates, asperiores delectus!',
  image: '/images/client1.jpg',
  name: 'John Smith',
 },
 {
  id: 2,
  feedback:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et, quam repudiandae facere nulla nobis rerum quasi commodi ratione, ducimus sapiente debitis illum similique eveniet numquam provident tempore sed architecto!',
  image: '/images/client2.jpg',
  name: 'Nick Brown',
 },
 {
  id: 3,
  feedback:
   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, illo! Architecto autem voluptatibus eum iste neque dolores vitae. Animi, eius?',
  image: '/images/client3.jpg',
  name: 'David Jones',
 },
 {
  id: 4,
  feedback:
   'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, recusandae.',
  image: '/images/client4.jpg',
  name: 'Ann Smith',
 },
 {
  id: 5,
  feedback:
   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, illo! Architecto autem voluptatibus eum iste neque dolores vitae. Animi, eius?',
  image: '/images/client5.jpg',
  name: 'Mary Brown',
 },
];

export default function Customers() {
 return (
  <section className="customers">
   <div className="customers-banner">
    <h3 className="main-heading">Testimony</h3>
    <h1>Customers Say</h1>
    <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
     doloribus qui nemo earum perspiciatis fugiat quae a numquam quibusdamas periores.
    </p>
   </div>
   <div className="clients">
    {clientsData.map((client) => (
     <div key={client.id} className="client">
      <p>{client.feedback}</p>
      <div>
       <img src={client.image} alt={client.name} />
       <span>{client.name}</span>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}
