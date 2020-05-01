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

const productChangedSize = (productSize) => {
  return {
    type: "PRODUCT_CHANGED_SIZE",
    payload: productSize
  }
}


const fetchProduct = (shopService, dispatch) => (id) => {
  dispatch(productRequested());
  shopService.getProduct(id)
    .then(data => dispatch(productLoaded(data)))
    .catch(err => dispatch(productError(err)))
}

export {fetchProduct, productChangedSize}