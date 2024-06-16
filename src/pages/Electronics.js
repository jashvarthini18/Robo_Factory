import React, { useState, useContext } from 'react';
import ProductCard from '../pages/ProductCard';
import './Electronics.css'; // Adjust the CSS import path as necessary
import { CartContext } from './CartContext';  // Adjust the import path as necessary
import ProductDetail from './ProductDetail'; // Import ProductDetail component

const electronicsProducts = [
  { 
    name: 'Smartphone', 
    price: 499, 
    image: 'https://via.placeholder.com/150', 
    rating: 4.5, 
    category: 'smartphones',
    description: 'Description of Smartphone',
    images: [
        "smartphone-main.jpg",
        "smartphone-thumb1.jpg",
        "smartphone-thumb2.jpg"
    ]
  },
  { 
    name: 'Laptop', 
    price: 899, 
    image: 'https://via.placeholder.com/150', 
    rating: 4, 
    category: 'laptops',
    description: 'Description of Laptop',
    images: [
        "laptop-main.jpg",
        "laptop-thumb1.jpg",
        "laptop-thumb2.jpg"
    ]
  },
  // Add more products as needed
];

const Electronics = () => {
  const [sortingOption, setSortingOption] = useState('default');
  const [filteringOption, setFilteringOption] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product
  const { Cart } = useContext(CartContext);

  // Sorting logic
  const sortedProducts = [...electronicsProducts].sort((a, b) => {
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
    <div className="electronics">
      <h2>ELECTRONICS</h2>
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
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
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

export default Electronics;
