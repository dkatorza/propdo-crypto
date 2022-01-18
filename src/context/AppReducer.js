export default (state, action) => {
  switch (action.type) {
    case 'SET_COINS':
      return {
        ...state,
        coins: action.payload,
      };
    case 'DELETE_COIN':
      return {
        ...state,
        coins: state.coins.filter((coin) => coin.id !== action.payload),
      };
    default:
      return state;
  }
};
