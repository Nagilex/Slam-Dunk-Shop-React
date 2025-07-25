// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList({ addToCart }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;