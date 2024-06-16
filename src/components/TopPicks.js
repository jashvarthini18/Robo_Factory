import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './TopPicks.css';
import Electronics from './electronics.jpg';
import { CartContext } from '../pages/CartContext'; // Assuming you have a CartContext for managing cart state

const topPicks = [
  { name: 'SmartPhone', path: '/shop/electronics', image: Electronics, price: '₹10.99', rating: 4 },
  { name: 'Product 2', path: '/product-2', image: 'https://via.placeholder.com/300', price: '₹15.99', rating: 3.5 },
  { name: 'Product 3', path: '/product-3', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  { name: 'Product 4', path: '/product-4', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  { name: 'Product 5', path: '/product-5', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  { name: 'Product 6', path: '/product-6', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  { name: 'Product 7', path: '/product-7', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  { name: 'Product 8', path: '/product-8', image: 'https://via.placeholder.com/300', price: '₹19.99', rating: 4.5 },
  // Add more featured products as needed
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="star" />
      ))}
      {halfStar && <FaStarHalfAlt className="star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="star" />
      ))}
    </div>
  );
};

const TopPicks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useContext(CartContext); // Assuming addToCart function is provided by CartContext

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? topPicks.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === topPicks.length - 1 ? 0 : prevIndex + 1));
  };

  const handleAddToCart = (product, quantity) => {
    addToCart({ ...product, quantity });
    console.log("Added to cart:", product, "Quantity:", quantity);
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
    // Implement your logic for buying now, e.g., redirect to checkout page
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="top-picks">
      <h2 className="section-title">OUR TOP PICKS</h2>
      <div className="products-container">
        <button className="nav-button prev" onClick={goToPrevious}>&#10094;</button>
        <div className="products">
          {topPicks.map((product, index) => (
            <div key={index} className={`product-card ${index === currentIndex ? 'active' : ''}`}>
              <Link to={product.path} className="product-link">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  {renderStars(product.rating)}
                  <div className="quantity-input">
                    <label htmlFor="quantity">Quantity: </label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              </Link>
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
                <button className="buy-now-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={goToNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default TopPicks;
