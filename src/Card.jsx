import React from 'react';
import { useCart } from './CartContext'; // Import your CartContext
import { useState } from 'react';
import './style.css'; 

function Card({ title, price, imgsrc }) {
  const { addItemToCart } = useCart();
  const [notification, setNotification] = useState('');

  const handleAddToCart = () => {
    addItemToCart({ title, price }, 1);
    setNotification(`${title} has been added to your cart`);

    // Hide the notification after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card card-zoom">
        <img className="card-img-top" src={imgsrc} alt={imgsrc} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {notification && <div className="notification">{notification}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
