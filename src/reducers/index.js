
const initialState = {
  products: [],
  loading: true,
  orderTotal: 300,
  cartItems: [{
    title: "123456",
    image: "12345",
    cost: "123456",
    id: "123456",
    count: "23456",
  }],
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_LOADED':
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer