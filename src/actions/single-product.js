import {openCartSidebar, productAddedToCart} from "./shopping-cart";

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

const checkSingleProduct = (shopService) => (cartItems, product) => (dispatch) => {
    console.log(cartItems, product)
    const productInCart = cartItems.find(e => e.id === product.id)
    const quantity = productInCart ? productInCart.count : 1;
    shopService.checkProductQuantity(product.id, quantity, product.currentSize)
      .then(res => {
        if(res.allow){
          dispatch(productAddedToCart())
          dispatch(openCartSidebar())
        }
      })
}

const fetchProduct = (shopService) => (id) => (dispatch) =>{
  dispatch(productRequested());
  shopService.getProduct(id)
    .then(product => {
      if(!product.empty)
        product.currentSize = product.sizes[0]
      dispatch(productLoaded(product))
    })
    .catch(err => dispatch(productError(err)))
}

export {fetchProduct, productChangedSize, checkSingleProduct}