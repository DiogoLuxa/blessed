import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onPageScroll, setOnPageScroll] = useState(false);

  return (
    <StateContext.Provider
      value={{ isOpen, setIsOpen, onPageScroll, setOnPageScroll }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
