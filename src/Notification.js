import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (message) {
      setShowNotification(true);

      // Hide the notification after a certain time (e.g., 3 seconds)
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Notification;
