export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    if(state.version === process.env.REACT_APP_VERSION){
      state.shoppingCart.cartOpen = state.shoppingCart.checkRequested = false
      return state;
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    state.version = process.env.REACT_APP_VERSION
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // die
  }
}