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

const updateOrder = (state, productId, productSize, quantity) => {
  let product, itemIndex, item
  const {shoppingCart: {cartItems}} = state
  itemIndex = cartItems.findIndex(({id, size}) => id === productId && size === productSize)
  item = cartItems[itemIndex]
  product = item
  const newItem = updateCartItem(product, item, quantity)
  const newItems = updateCartItems(cartItems, newItem, itemIndex)
  return {
    ...state.shoppingCart,
    orderTotal: newItems.reduce((a, b) => a + (b['total'] || 0), 0),
    cartItems: newItems
  }
}


const addFromPage = (state) => {
  const {productPage: {product}, shoppingCart: {cartItems}} = state
  const itemIndex = cartItems.findIndex(({id, size}) => id === product.id && size === product.currentSize)
  const item = cartItems[itemIndex]
  const newItem = updateCartItem(product, item, 1)
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
    }
  }
  switch (action.type) {
    case "PRODUCT_ADDED_TO_CART":
      return addFromPage(state)
    case "PRODUCT_INCREASE_IN_CART":
      return updateOrder(state, action.payload.productId, action.payload.productSize, 1)
    case "PRODUCT_DECREASE_IN_CART":
      return updateOrder(state, action.payload.productId, action.payload.productSize, -1)
    case "ALL_PRODUCTS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(({id, size}) => id === action.payload.productId && size === action.payload.productSize)
      return updateOrder(state, action.payload.productId, action.payload.productSize, -item.count)
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