import React from 'react';
import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const data = {
    isLoggedin: undefined,
    user: undefined,
  };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}