import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const prevDataForm = {
    name: '',
    email: '',
    tel: '',
    message: '',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [onPageScroll, setOnPageScroll] = useState(false);
  const [dataForm, setDataForm] = useState(prevDataForm);

  return (
    <StateContext.Provider
      value={{
        isOpen,
        setIsOpen,
        onPageScroll,
        setOnPageScroll,
        dataForm,
        setDataForm,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
