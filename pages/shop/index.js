'use client';

import {useEffect, useState} from 'react';

export default function Shop() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const productsPerPage = 6;
 const [cart, setCart] = useState([]);

 // Load cart from localStorage when page loads
 useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) setCart(JSON.parse(savedCart));
 }, []);

 // Save cart to localStorage whenever it changes
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
 }, [cart]);

 // Fetch products
 useEffect(() => {
  async function fetchProducts() {
   try {
    const res = await fetch(
     'https://coffee-shop-api-sandy.vercel.app/api/v1/products'
    );
    const data = await res.json();
    setProducts(data);
   } catch (error) {
    console.error('Error fetching products:', error);
   } finally {
    setLoading(false);
   }
  }
  fetchProducts();
 }, []);

 const indexOfLastProduct = currentPage * productsPerPage;
 const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
 const currentProducts = products.slice(
  indexOfFirstProduct,
  indexOfLastProduct
 );
 const totalPages = Math.ceil(products.length / productsPerPage);

 const handleAddToCart = (product) => {
  const alreadyInCart = cart.find((item) => item.id === product.id);
  if (alreadyInCart) {
   setCart(
    cart.map((item) =>
     item.id === product.id ? {...item, quantity: item.quantity + 1} : item
    )
   );
  } else {
   setCart([...cart, {...product, quantity: 1}]);
  }
 };

 if (loading) {
  return (
   <div className="page-shop">
    <div className="shop-container">
     <div className="shop-center">
      <h3 className="main-heading">Shop</h3>
      <h1>Loading...</h1>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className="page-shop">
   <div className="shop-container">
    <div className="shop-center">
     <h3 className="main-heading">Shop</h3>
     <h1>Flavor Pick</h1>
    </div>
    <div className="products-grid">
     {currentProducts.map((product) => (
      <div className="product-card" key={product.id}>
       <img src={product.image} alt={product.title} className="product-image" />
       <h2 className="product-title">{product.title}</h2>
       <p className="product-price">${product.price.toFixed(2)}</p>
       <p className="product-description">{product.description}</p>
       <div className="product-rating">⭐ {product.rating.rate}</div>

       <button
        className="add-to-cart-btn"
        onClick={() => handleAddToCart(product)}
       >
        Add to Cart
       </button>
      </div>
     ))}
    </div>

    {/* Pagination */}
    <div className="pagination">
     {Array.from({length: totalPages}, (_, index) => (
      <button
       key={index}
       className={currentPage === index + 1 ? 'active' : ''}
       onClick={() => setCurrentPage(index + 1)}
      >
       {index + 1}
      </button>
     ))}
    </div>
   </div>
  </div>
 );
}
