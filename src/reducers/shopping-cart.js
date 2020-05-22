const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0){ // no more this item in cart
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }
  if(idx === -1){ // new item
    return [
      ...cartItems,
      item
    ]
  }
  return [ // change item
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
}

const updateCartItem = (product, item = {}, quantity) => {
  const {
    title = product.title,
    size = product.currentSize,
    image = product.images[0],
    id = product.id,
    count = 0,
    total = 0,
  } = item
  return {
    cost: product.cost,
    title,
    image,
    id,
    size,
    count: count + quantity,
    total: total + quantity * product.cost
  }
}

const updateOrder = (state, productId, productSize, quantity, product) => {
  let itemIndex, item
  const {shoppingCart: {cartItems}} = state
  itemIndex = cartItems.findIndex(({id, size}) => id === productId && size.id === productSize.id)
  item = cartItems[itemIndex]
  if(!product)
    product = item
  const newItem = updateCartItem(product, item, quantity)
  const newItems = updateCartItems(cartItems, newItem, itemIndex)
  return {
    ...state.shoppingCart,
    orderTotal: newItems.reduce((a, b) => a + (b['total'] || 0), 0),
    cartItems: newItems
  }
}

const updateShoppingCart = (state, action) => {
  if(state === undefined){
    return {
      cartItems: [],
      orderTotal: 0,
      cartOpen: false,
      checkRequested: false,
    }
  }
  switch (action.type) {
    case "PRODUCT_ADDED_FROM_PAGE":
      const product = state.productPage.product
      return updateOrder(state, product.id, product.currentSize, 1, product)
    case "PRODUCT_INCREASE_IN_CART":
      return updateOrder(state, action.payload.productId, action.payload.productSize, 1)
    case "PRODUCT_DECREASE_IN_CART":
      return updateOrder(state, action.payload.productId, action.payload.productSize, -1)
    case "ALL_PRODUCTS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(({id, size}) => id === action.payload.productId && size.id === action.payload.productSize.id)
      return updateOrder(state, action.payload.productId, action.payload.productSize, -item.count)

    case "CART_CHECK_REQUEST":
      return {
        ...state.shoppingCart,
        checkRequested: true,
      }
    case "CART_CHECK_SUCCESS":
      return {
        ...state.shoppingCart,
        checkRequested: false,
      }
    case "CLOSE_CART_SIDEBAR":
      return {
        ...state.shoppingCart,
        cartOpen: false,
      }
    case "OPEN_CART_SIDEBAR":
      return {
        ...state.shoppingCart,
        cartOpen: true,
      }
    case "CLEAR_CART":
      return {
        ...state.shoppingCart,
        cartItems: [],
        orderTotal: 0,
      }
    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart