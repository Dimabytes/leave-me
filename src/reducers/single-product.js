const updateSingleProduct = (state, action) => {
  if(state === undefined){
    return {
      loading: true,
      product: null,
      error: null,
    }
  }
  switch (action.type) {
    case 'FETCH_PRODUCT_REQUEST':
      return {
        product: null,
        error: null,
        loading: true,
      }
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        product: action.payload,
        error: null,
        loading: false
      }
    case 'FETCH_PRODUCT_FAILURE':
      return {
        product: null,
        error: action.payload,
        loading: false
      }
    case "PRODUCT_CHANGED_SIZE":
      return {
        ...state.productPage,
        product: {
          ...state.productPage.product,
          currentSize: action.payload
        }
      }
    default:
      return state.productPage
  }
}

export default updateSingleProduct