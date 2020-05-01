import fetchProducts from "./product-list";
import {productAddedToCart, allProductsRemovedFromCart, clearCart,
  productIncreaseInCart, productDecreaseInCart,
  openCartSidebar, closeCartSidebar} from "./shopping-cart";
import {fetchProduct, productChangedSize} from "./single-product";

export {
  fetchProducts,
  productAddedToCart, allProductsRemovedFromCart, productIncreaseInCart, productDecreaseInCart,clearCart,
  openCartSidebar, closeCartSidebar,
  fetchProduct, productChangedSize
}