import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <DataContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};