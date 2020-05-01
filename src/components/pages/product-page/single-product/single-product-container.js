import React, {Component} from "react";
import ErrorIndicator from "../../../error-indicator";
import Spinner from "../../../spinner";
import {fetchProduct, openCartSidebar, productAddedToCart, productChangedSize} from "../../../../actions";
import {compose} from "redux";
import withShopService from "../../../hoc";
import {connect} from "react-redux";
import SingleProduct from "./single-product";

class SingleProductContainer extends Component{
  componentWillMount() {
    this.props.fetchProduct(this.props.itemId)
  }

  render() {
    const {product, loading, error, onAddedToCart, onRemovedToFromCart, onChangeSize} = this.props
    if(error){
      return <ErrorIndicator/>
    }
    if(loading || !product){
      return <Spinner/>
    }
    if(product)
      return <SingleProduct product={product}
                            onAddedToCart={onAddedToCart}
                            onRemovedToFromCart={onRemovedToFromCart}
                            onChangeSize={onChangeSize}/>
  }
}

const mapStateToProps = ({productPage:{product, loading, error}}) => {
  return {product, loading, error}
}

const mapDispatchToProps = (dispatch, {shopService}) => {
  return{
    fetchProduct: fetchProduct(shopService, dispatch),
    onAddedToCart: () => {
      dispatch(productAddedToCart())
      dispatch(openCartSidebar())
    },
    onChangeSize: (productSize) => dispatch(productChangedSize(productSize)),
  }
}

export default compose(
  withShopService(),
  connect(mapStateToProps, mapDispatchToProps))(SingleProductContainer)