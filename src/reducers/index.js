import updateProductList from "./product-list";
import updateSingleProduct from "./single-product";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return{
    productList: updateProductList(state, action),
    productPage: updateSingleProduct(state, action),
    shoppingCart: updateShoppingCart(state, action),
  }
}



export default reducer
