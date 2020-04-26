

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

const productChangedSize = (productSize) => {
  return {
    type: "PRODUCT_CHANGED_SIZE",
    payload: productSize
  }
}

const productAddedToCart = () => {
  return {
    type: "PRODUCT_ADDED_TO_CART",
  }
}

const productIncreaseInCart = (productId, productSize) => {
  return {
    type: "PRODUCT_INCREASE_IN_CART",
    payload: {productId, productSize}
  }
}


const productDecreaseInCart = (productId, productSize) => {
  return {
    type: "PRODUCT_DECREASE_IN_CART",
    payload: {productId, productSize},
  }
}

const allProductsRemovedFromCart = (productId, productSize) => {
  return {
    type: "ALL_PRODUCTS_REMOVED_FROM_CART",
    payload: {productId, productSize},
  }
}

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
  fetchProducts, fetchProduct, productAddedToCart, allProductsRemovedFromCart, productDecreaseInCart, productChangedSize, productIncreaseInCart
};
