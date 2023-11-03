import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the cart
const initialCartState = {
  items: [],
  total: 0,
};

// Create the context for the cart
const CartContext = createContext();

// Create a custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Define action types for cart manipulation
const ADD_TO_CART = 'ADD_TO_CART';

// Define the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add an item to the cart
      const newItem = action.payload.item;
      return {
        ...state,
        items: [...state.items, newItem],
        total: state.total + newItem.price,
      };
    default:
      return state;
  }
};

// Create a CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addItemToCart = (item, quantity) => {
    // Dispatch an action to add an item to the cart
    dispatch({
      type: ADD_TO_CART,
      payload: {
        item: { ...item, quantity },
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        total: cartState.total,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
