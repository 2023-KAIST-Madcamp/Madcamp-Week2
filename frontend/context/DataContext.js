import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [userData, setUserData] = useState(null)

  return (
    <DataContext.Provider value={{ selectedItem, setSelectedItem, userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};