

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


const productRequested = () => {
  return {
    type: 'FETCH_PRODUCT_REQUEST',
  };
};


const productLoaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: newProducts
  };
};



const productError = (err) => {
  return {
    type: 'FETCH_PRODUCT_FAILURE',
    payload: err,
  };
};


const fetchProducts = (shopService, dispatch) => () => {
  dispatch(productsRequested());
  shopService.getAllProducts()
    .then(data => dispatch(productsLoaded(data)))
    .catch(err => dispatch(productsError(err)))
}

const fetchProduct = (shopService, dispatch) => (id) => {
  dispatch(productRequested());
  shopService.getProduct(id)
    .then(data => dispatch(productLoaded(data)))
    .catch(err => dispatch(productError(err)))
}


export {
  fetchProducts, fetchProduct
};
