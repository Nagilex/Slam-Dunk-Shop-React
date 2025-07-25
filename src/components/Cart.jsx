// src/components/Cart.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Cart({ show, cart, removeFromCart, clearCart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePurchase = () => {
    alert('¡Gracias por tu compra!');
    clearCart();
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong><br />
                  <small>Cantidad: {item.quantity}</small>
                </div>
                <div>
                  <span className="text-success">${(item.price * item.quantity).toLocaleString()}</span>
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <h5>Total: <span className="text-success">${total.toLocaleString()}</span></h5>
        <div>
          <Button variant="secondary" onClick={onClose}>Cerrar</Button>
          <Button variant="primary" onClick={handlePurchase} disabled={cart.length === 0}>Comprar</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;