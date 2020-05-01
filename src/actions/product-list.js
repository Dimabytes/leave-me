const productsRequested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST',
  };
};


const productsLoaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  };
};



const productsError = (err) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: err,
  };
};

const fetchProducts = (shopService, dispatch) => () => {
  dispatch(productsRequested());
  shopService.getAllProducts()
    .then(data => dispatch(productsLoaded(data)))
    .catch(err => dispatch(productsError(err)))
}

export default fetchProducts