// src/App.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/main.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <div>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} toggleCart={toggleCart} />
      <ProductList addToCart={addToCart} />
      <Cart
        show={showCart}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        onClose={toggleCart}
      />
    </div>
  );
}

export default App;