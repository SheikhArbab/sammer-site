import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <ToggleContext.Provider value={{toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
