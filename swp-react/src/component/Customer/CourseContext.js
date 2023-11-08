// CourseContext.js
import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export function CourseProvider(props) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        updatedCart[itemId] += 1;
      } else {
        updatedCart[itemId] = 1;
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] && updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <CourseContext.Provider value={contextValue}>
      {props.children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
