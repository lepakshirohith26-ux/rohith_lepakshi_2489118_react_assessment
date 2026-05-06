import React from 'react';
import { useCart } from '../CartContext';
import CartItem from './CartItem';
import './Cart.css';
import Navbar from '../Products/Navbar';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, total } = useCart();

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Shopping Cart
        </div>
        <div className="cart-header">
          <h1>Your Cart</h1>
          <p className="cart-count">{cartItems.length} items in your cart</p>
        </div>

        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <Link to="/" className="continue-shopping">← Continue Shopping</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span className="summary-label">Subtotal ({cartItems.length} items)</span>
                <span className="summary-value">${total().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Shipping</span>
                <span className="summary-value free">FREE</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Tax (estimated)</span>
                <span className="summary-value">${(total() * 0.08).toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>${(total() * 1.08).toFixed(2)}</span>
              </div>
              <input type="text" className="promo-input" placeholder="Enter code" />
              <button className="apply-btn">Apply</button>
              <button className="checkout-btn">Proceed to Checkout</button>
              <div className="security-badge">🔒 Secure checkout • 256-bit SSL</div>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <Link to="/" style={{ marginTop: '20px', display: 'block' }} className="continue-shopping">← Continue Shopping</Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
