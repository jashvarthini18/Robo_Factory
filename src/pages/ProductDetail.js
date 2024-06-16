import React, { useState, useContext } from 'react';
import styles from './ProductDetail.module.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { CartContext } from './CartContext';

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={`full-${index}`} className={styles.star} />
            ))}
            {halfStar && <FaStarHalfAlt className={styles.star} />}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={`empty-${index}`} className={styles.star} />
            ))}
        </>
    );
};

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState(product.reviews || []);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);
    const { addToCart } = useContext(CartContext);
    const [cartButtonText, setCartButtonText] = useState('Add to Cart');
    const [message, setMessage] = useState('');

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        setCartButtonText('Added to Cart');
        setMessage(`Added ${quantity} ${product.name} to cart`);
        setTimeout(() => setCartButtonText('Add to Cart'), 3000);
    };

    const handleBuyNow = () => {
        console.log(`Buying ${quantity} ${product.name} now`);
    };

    const handleReviewChange = (e) => {
        setNewReview(e.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleAddReview = () => {
        const updatedReviews = [...reviews, { rating, review: newReview }];
        setReviews(updatedReviews);
        setNewReview('');
        setRating(0);
    };

    return (
        <div className={styles.productDetail}>
            <div className={styles.productTopSection}>
                <div className={styles.productImageAndDetails}>
                    <div className={styles.productImage}>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.productDetails}>
                        <h1>{product.name}</h1>
                        <div className={styles.quantityContainer}>
                            Quantity:
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className={styles.quantityInput}
                                min="1"
                            />
                        </div>
                        <p>{renderStars(product.rating)}</p>
                        <p>Price: ₹{(product.price * quantity).toFixed(2)}</p>
                        <button onClick={handleAddToCart} className={styles.addToCartBtn}>{cartButtonText}</button>
                        <button onClick={handleBuyNow} className={styles.buyNowBtn}>Buy Now</button>
                        {message && <p className={styles.message}>{message}</p>}
                    </div>
                </div>
            </div>
            <div className={styles.productDescription}>
                <h2>Description</h2>
                <p>{product.description}</p>
            </div>
            <div className={styles.customerReviews}>
                <h2>Customer Reviews</h2>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <p>Rating: {renderStars(review.rating)}</p>
                                <p>{review.review}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews yet.</p>
                )}
                <h3>Add Your Review</h3>
                <div className={styles.starRating}>
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`${styles.star} ${index < rating ? styles.activeStar : ''}`}
                            onClick={() => handleRatingChange(index + 1)}
                        />
                    ))}
                </div>
                <textarea
                    placeholder="Write your review here..."
                    value={newReview}
                    onChange={handleReviewChange}
                    className={styles.reviewTextarea}
                />
                <button onClick={handleAddReview}>Submit Review</button>
            </div>
        </div>
    );
}

export default ProductDetail;
