import fetchProducts from "./product-list";
import {productAddedToCart, allProductsRemovedFromCart, clearCart,
  productIncreaseInCart, productDecreaseInCart,
  openCartSidebar, closeCartSidebar, checkAddToCart} from "./shopping-cart";
import {fetchProduct, productChangedSize, checkSingleProduct} from "./single-product";

export {
  fetchProducts,
  productAddedToCart, allProductsRemovedFromCart, productIncreaseInCart, productDecreaseInCart,clearCart,
  openCartSidebar, closeCartSidebar,checkAddToCart,
  fetchProduct, productChangedSize, checkSingleProduct
}