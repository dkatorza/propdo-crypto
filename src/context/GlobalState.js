import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { coinsService } from '../services/coin.service';

// Initial state
const initialState = {
  coins: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function loadCoins() {
    try {
      const {
        data: { coins },
      } = await coinsService.query();
      dispatch({
        type: 'SET_COINS',
        payload: coins,
      });
    } catch (err) {
      console.log('err in loadCoins', err);
    }
  }

  function deleteCoins(id) {
    dispatch({
      type: 'DELETE_COIN',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        coins: state.coins,
        loadCoins,
        deleteCoins,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
