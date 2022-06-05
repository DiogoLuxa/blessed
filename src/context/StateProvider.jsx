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
  const [navItems, setNavItems] = useState([
    { id: 0, title: 'home', active: true },
    { id: 1, title: 'sobre', active: false },
    { id: 2, title: 'atuação', active: false },
    { id: 3, title: 'cases', active: false },
    { id: 4, title: 'contato', active: false },
  ]);
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
        navItems,
        setNavItems,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
