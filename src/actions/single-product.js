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

const fetchProduct = (shopService) => (slug) => (dispatch) =>{
  dispatch(productRequested());
  shopService.getProduct(slug)
    .then(product => {
      if(!product.empty)
        product.currentSize = product.sizes[0]
      dispatch(productLoaded(product))
    })
    .catch(err => dispatch(productError(err)))
}

export {fetchProduct, productChangedSize}