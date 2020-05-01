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




export {productAddedToCart, productDecreaseInCart, clearCart,
  productIncreaseInCart, allProductsRemovedFromCart, openCartSidebar, closeCartSidebar}