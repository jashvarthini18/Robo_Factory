// Parent component where the ProductCard components are rendered dynamically
import React from 'react';
import ProductCard from './ProductCard';

const ParentComponent = ({ products }) => {
  return (
    <div>
      {/* Render each ProductCard component dynamically */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ParentComponent;
