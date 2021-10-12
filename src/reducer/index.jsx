const initialState = {
  carts: [],
  productToBeAdded: {},
};

const rootReducer = (state = initialState, action = {}) => {
  if (action.type === 'SET_CARTS') {
    return { ...state, carts: action.payload };
  }
  return state;
};

export default rootReducer;
