import React from 'react';
import '../styles/main.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card h-100 product-card">
      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="price">${product.price.toLocaleString()} CLP</span>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            <i className="bi bi-cart-plus"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
