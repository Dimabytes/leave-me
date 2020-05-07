import React, {Component} from "react";
import ErrorIndicator from "../../../error-indicator";
import Spinner from "../../../spinner";
import {fetchProduct, openCartSidebar, productAddedToCart, productChangedSize} from "../../../../actions";
import {compose} from "redux";
import withShopService from "../../../hoc";
import {connect} from "react-redux";
import SingleProduct from "./single-product";
import NoMatch from "../../../no-match";

class SingleProductContainer extends Component{
  componentWillMount() {
    this.props.fetchProduct(this.props.itemId)
  }

  render() {
    const {product, loading, error, onAddedToCart, onRemovedToFromCart, onChangeSize, cartItems} = this.props

    if(error){
      if(error.message.indexOf('404') !== -1)
        return <NoMatch/>
      return <ErrorIndicator/>
    }
    if(loading || !product)
      return <Spinner/>
    if(product)
      return <SingleProduct product={product}
                            cartItems={cartItems}
                            onAddedToCart={onAddedToCart}
                            onRemovedToFromCart={onRemovedToFromCart}
                            onChangeSize={onChangeSize}/>
  }
}

const mapStateToProps = ({productPage:{product, loading, error}, shoppingCart: {cartItems}}) => {
  return {product, loading, error, cartItems}
}

const mapDispatchToProps = (dispatch, {shopService}) => {
  return{
    fetchProduct: fetchProduct(shopService, dispatch),
    onAddedToCart: (cartItems, product) => {
      const productInCart = cartItems.find(e => e.id === product.id)
      const quantity = productInCart ? productInCart.count : 1;
      shopService.checkProductQuantity(product.id, quantity, product.currentSize)
        .then(res => {
          if(res.allow){
            dispatch(productAddedToCart())
            dispatch(openCartSidebar())
          }
        })

    },
    onChangeSize: (productSize) => dispatch(productChangedSize(productSize)),
  }
}

export default compose(
  withShopService(),
  connect(mapStateToProps, mapDispatchToProps))(SingleProductContainer)