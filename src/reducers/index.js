import updateProductList from "./product-list";
import updateProductPage from "./product-page";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return{
    productList: updateProductList(state, action),
    productPage: updateProductPage(state, action),
    shoppingCart: updateShoppingCart(state, action),
  }
}



export default reducer
