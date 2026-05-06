import React from 'react';
import { useCart } from '../CartContext';

function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  const handleQuantityChange = (newQty) => {
    updateQty(item.id, newQty);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-meta">{item.category}</div>
        <div className="cart-item-price">${item.price.toFixed(2)}</div>
        <button onClick={handleRemove} className="remove-btn">Remove</button>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={() => handleQuantityChange(item.quantity - 1)}>−</button>
          <input type="text" className="quantity-input" value={item.quantity} readOnly />
          <button className="quantity-btn" onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
        </div>
        <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartItem;