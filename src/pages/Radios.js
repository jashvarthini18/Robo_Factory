import React, { useState, useContext } from 'react';
import ProductCard from '../pages/ProductCard';
import './Radios.css'; // Adjust the CSS import path as necessary
import { CartContext } from './CartContext'; // Adjust the import path as necessary
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const radiosProducts = [
  { 
    name: 'Vintage Radio', 
    price: 99, 
    image: 'https://via.placeholder.com/150', 
    rating: 4,
    category: 'vintage',
    description: 'Description of Vintage Radio',
    images: [
        "vintage-radio-main.jpg",
        "vintage-radio-thumb1.jpg",
        "vintage-radio-thumb2.jpg"
    ]
  },
  { 
    name: 'Portable Radio', 
    price: 49, 
    image: 'https://via.placeholder.com/150', 
    rating: 3.5,
    category: 'portable',
    description: 'Description of Portable Radio',
    images: [
        "portable-radio-main.jpg",
        "portable-radio-thumb1.jpg",
        "portable-radio-thumb2.jpg"
    ]
  },
  // Add more products as needed
];

const Radios = () => {
  const [sortingOption, setSortingOption] = useState('default');
  const [filteringOption, setFilteringOption] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product
  const { Cart } = useContext(CartContext);

  // Sorting logic
  const sortedProducts = [...radiosProducts].sort((a, b) => {
    switch (sortingOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating-high-low':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Filtering logic
  const filteredProducts = sortedProducts.filter(product => {
    if (filteringOption === 'all') {
      return true;
    } else {
      return product.category === filteringOption;
    }
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="radios">
      <h2>RADIOS</h2>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <div className="options-container">
          <div className="sorting-options">
            <label htmlFor="sortSelect">Sort By:</label>
            <select id="sortSelect" onChange={(e) => setSortingOption(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Rating: High to Low</option>
            </select>
          </div>
          <div className="filter-options">
            <label htmlFor="filterSelect">Filter By:</label>
            <select id="filterSelect" onChange={(e) => setFilteringOption(e.target.value)}>
              <option value="all">All</option>
              <option value="vintage">Vintage</option>
              <option value="portable">Portable</option>
              {/* Add more filtering options as needed */}
            </select>
          </div>
        </div>
      )}
      {!selectedProduct && (
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} onClick={() => handleProductClick(product)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radios;
