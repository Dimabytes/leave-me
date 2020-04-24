
const initialState = {
  products: [],
  loading: true,
  orderTotal: 300,
  error: null,
  cartItems: [{
    title: "123456",
    image: "https://majeste.pythonanywhere.com/media/product.png",
    cost: "123456",
    id: "123456",
    count: "23456",
  }],
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        products: [],
        error: null,
        loading: true,
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      console.log(action.payload)
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false
      }
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        products: [],
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer