import React, {Component} from "react";
import ErrorIndicator from "../../../error-indicator";
import Spinner from "../../../spinner";
import {
  fetchProduct,
  productChangedSize,
  checkSingleProduct
} from "../../../../actions";
import {bindActionCreators, compose} from "redux";
import withShopService from "../../../hoc";
import {connect} from "react-redux";
import SingleProduct from "./single-product";
import NoMatch from "../../no-match";
import SimplePage from "../../simple-page";

class SingleProductContainer extends Component{
  componentWillMount() {
    this.props.fetchProduct(this.props.itemId)
  }

  render() {
    const {product, loading, error, onAddedToCart, onRemovedToFromCart, onChangeSize, cartItems} = this.props
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
  return bindActionCreators({
    fetchProduct: fetchProduct(shopService),
    onAddedToCart: checkSingleProduct(shopService),
    onChangeSize: productChangedSize
  }, dispatch);
}

export default compose(
  withShopService(),
  connect(mapStateToProps, mapDispatchToProps))(SingleProductContainer)