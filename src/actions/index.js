
const productsLoaded = (newBooks) => {
  return {
    type: 'PRODUCTS_LOADED  ',
    payload: newBooks
  };
};

export {
  productsLoaded
};
