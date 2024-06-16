import React, { useState } from 'react';
import ProductCard from '../pages/ProductCard';
import './Tools.css'; // Adjust the CSS import path as necessary
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const toolsProducts = [
  { 
    name: 'Drill Set', 
    price: 79, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.8,
    category: 'drills',
    description: 'Description of Drill Set',
    images: [
        "drillset-main.jpg",
        "drillset-thumb1.jpg",
        "drillset-thumb2.jpg"
    ]
  },
  { 
    name: 'Toolbox', 
    price: 39, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.5,
    category: 'toolbox',
    description: 'Description of Toolbox',
    images: [
        "toolbox-main.jpg",
        "toolbox-thumb1.jpg",
        "toolbox-thumb2.jpg"
    ]
  },
  // Add more products as needed
];

const Tools = () => {
  const [sortingOption, setSortingOption] = useState('default');
  const [filteringOption, setFilteringOption] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

  // Sorting logic
  const sortedProducts = [...toolsProducts].sort((a, b) => {
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
    <div className="tools">
      <h2>Tools</h2>
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
              <option value="drills">Drills</option>
              <option value="toolbox">Toolbox</option>
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

export default Tools;
