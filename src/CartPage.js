import React from 'react';
import { useCart } from './CartContext'; // Import the cart context

function CartPage() {
  const { cart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Color</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.amount}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
