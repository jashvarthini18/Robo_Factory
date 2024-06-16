import React, { useState } from 'react';
import ProductCard from '../pages/ProductCard';
import './WiresCablesConnections.css'; // Adjust the CSS import path as necessary
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const wiresCablesConnectionsProducts = [
  { 
    name: 'Ethernet Cable', 
    price: 9.99, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.5,
    category: 'ethernet-cables',
    description: 'Description of Ethernet Cable',
    images: [
        "ethernet-main.jpg",
        "ethernet-thumb1.jpg",
        "ethernet-thumb2.jpg"
    ]
  },
  { 
    name: 'Power Extension Cord', 
    price: 12.99, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.7,
    category: 'power-cords',
    description: 'Description of Power Extension Cord',
    images: [
        "powercord-main.jpg",
        "powercord-thumb1.jpg",
        "powercord-thumb2.jpg"
    ]
  },
  // Add more products as needed
];

const WiresCablesConnections = () => {
  const [sortingOption, setSortingOption] = useState('default');
  const [filteringOption, setFilteringOption] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

  // Sorting logic
  const sortedProducts = [...wiresCablesConnectionsProducts].sort((a, b) => {
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
    <div className="wires-cables-connections">
      <h2>Wires, Cables and Connections</h2>
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
              <option value="ethernet-cables">Ethernet Cables</option>
              <option value="power-cords">Power Extension Cords</option>
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

export default WiresCablesConnections;
