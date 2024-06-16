import React, { useContext, useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import './ProductCard.css';
import { CartContext } from './CartContext';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-₹{index}`} className="star" />
      ))}
      {halfStar && <FaStarHalfAlt className="star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-₹{index}`} className="star" />
      ))}
    </>
  );
};

const ProductCard = ({ product, onClick }) => {
  const { name, price, image, rating } = product;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ ...product, quantity });
    console.log("Added to cart:", product, "Quantity:", quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    console.log("Buy now:", product);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">₹{price}</p>
        <div className="rating">{renderStars(rating)}</div>
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
        <div className="buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={addedToCart}>
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button className="buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
        {addedToCart && <p className="confirmation-message">The product has been added to the cart</p>}
      </div>
    </div>
  );
};

export default ProductCard;
