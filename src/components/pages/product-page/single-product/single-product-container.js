import React, {Component} from "react";
import ErrorIndicator from "../../../error-indicator";
import Spinner from "../../../spinner";
import {
  fetchProduct,
  productChangedSize, checkAddToCart
} from "../../../../actions";
import {bindActionCreators, compose} from "redux";
import withShopService from "../../../hoc";
import {connect} from "react-redux";
import SingleProduct from "./single-product";
import NoMatch from "../../no-match";
import SimplePage from "../../simple-page";

class SingleProductContainer extends Component{
  constructor(props) {
    super(props);
    props.fetchProduct(props.itemSlug);
  }

  render() {
    const {
      product, loading, error, onAddedToCart,
      onRemovedToFromCart, onChangeSize, cartItems, checkRequested} = this.props
    if(error){
      if(error.message){
        if(error.message.indexOf('404') !== -1)
          return <NoMatch/>
      }
      return <ErrorIndicator/>
    }
    if(loading || !product)
      return <Spinner/>
    if (product.empty){
      return (
        <SimplePage pageClass="out-of-stock" containerClasses="text-center">
          OUT OF STOCK!!!
        </SimplePage>
      )
    }
    const addToCartBtn = (
      <div className={`btn btn-primary btn-product ${checkRequested ? 'disabled': ''}`} onClick={() => {
        if(!checkRequested){
          onAddedToCart(product.id, product.currentSize, cartItems, true);
        }
      }}>В корзину</div>
    )
    return <SingleProduct product={product}
                          cartItems={cartItems}
                          addToCartBtn={addToCartBtn}
                          onRemovedToFromCart={onRemovedToFromCart}
                          onChangeSize={onChangeSize}/>
  }
}

const mapStateToProps = ({productPage:{product, loading, error}, shoppingCart: {cartItems, checkRequested}}) => {
  return {product, loading, error, cartItems, checkRequested}
}

const mapDispatchToProps = (dispatch, {shopService}) => {
  return bindActionCreators({
    fetchProduct: fetchProduct(shopService),
    onAddedToCart: checkAddToCart(shopService),
    onChangeSize: productChangedSize
  }, dispatch);
}

export default compose(
  withShopService(),
  connect(mapStateToProps, mapDispatchToProps))(SingleProductContainer)