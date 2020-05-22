const productAddedFromPage = () => {
  return {
    type: "PRODUCT_ADDED_FROM_PAGE",
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

const clearCart = () => {
  return {
    type: "CLEAR_CART",
  }
}

const closeCartSidebar = () => {
  return {
    type: "CLOSE_CART_SIDEBAR",
  }
}

const openCartSidebar = () => {
  return {
    type: "OPEN_CART_SIDEBAR",
  }
}

const checkRequested = () => {
  return {
    type: 'CART_CHECK_REQUEST',
  };
};

const checkSuccess = () => {
  return {
    type: 'CART_CHECK_SUCCESS',
  };
};

const checkAddToCart = (shopService) => (id, size, cartItems, product) => (dispatch) => {
  dispatch(checkRequested())
  const productInCart = cartItems.find(e => e.id === id && e.size.id === size.id)
  const quantity = productInCart ? productInCart.count : 0;
  shopService.checkProductQuantity(id, quantity + 1, size.id)
    .then(res => {
      dispatch(checkSuccess())
      if(res.allow){
        if(product){
          dispatch(productAddedFromPage())
          dispatch(openCartSidebar())
        } else {
          dispatch(productIncreaseInCart(id, size))
        }
      }
    }).catch(() => {
    dispatch(checkSuccess())
  })
}
export {productDecreaseInCart, clearCart,
  productIncreaseInCart, allProductsRemovedFromCart, openCartSidebar, closeCartSidebar, checkAddToCart}