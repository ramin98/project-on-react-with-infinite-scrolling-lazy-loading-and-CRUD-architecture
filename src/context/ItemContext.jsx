import React, { createContext, useReducer, useContext } from 'react';
import { itemReducer, initialState } from './itemReducer';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
