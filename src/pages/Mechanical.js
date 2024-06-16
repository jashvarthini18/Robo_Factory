import React, { useState } from 'react';
import ProductCard from '../pages/ProductCard';
import './Mechanical.css'; // Adjust the CSS import path as necessary
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const mechanicalProducts = [
  { 
    name: 'Wrench Set', 
    price: 29.99, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.8, 
    category: 'wrench-set',
    description: 'Description of Wrench Set',
    images: [
        "wrenchset-main.jpg",
        "wrenchset-thumb1.jpg",
        "wrenchset-thumb2.jpg"
    ]
  },
  { 
    name: 'Drill Machine', 
    price: 149.99, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.5, 
    category: 'drill-machines',
    description: 'Description of Drill Machine',
    images: [
        "drillmachine-main.jpg",
        "drillmachine-thumb1.jpg",
        "drillmachine-thumb2.jpg"
    ]
  },
  // Add more products as needed
];

const Mechanical = () => {
  const [sortingOption, setSortingOption] = useState('default');
  const [filteringOption, setFilteringOption] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

  // Sorting logic
  const sortedProducts = [...mechanicalProducts].sort((a, b) => {
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
    <div className="mechanical">
      <h2>Mechanical</h2>
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
              <option value="wrench-set">Wrench Set</option>
              <option value="drill-machines">Drill Machines</option>
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

export default Mechanical;
