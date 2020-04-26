const updateProductList = (state, action) => {
  if(state === undefined){
    return {
      products: [],
      loading: true,
    }
  }
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        products: [],
        error: null,
        loading: true,
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        error: null,
        loading: false
      }
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        error: action.payload,
        loading: false
      }
    default:
      return state.productList
  }

}

export default updateProductList