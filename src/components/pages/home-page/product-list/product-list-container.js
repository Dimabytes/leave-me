import React, {Component} from "react";
import ErrorIndicator from "../../../error-indicator";
import Spinner from "../../../spinner";
import {fetchProducts} from "../../../../actions";
import {bindActionCreators, compose} from "redux";
import withShopService from "../../../hoc";
import {connect} from "react-redux";
import ProductList from "./product-list";

class ProductListContainer extends Component{
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const {products, loading, error} = this.props
    console.log(loading)
    if(error)
      return <ErrorIndicator/>
    if(loading)
      return <Spinner/>
    return <ProductList products={products}/>
  }
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
  console.log(loading)
  return {products, loading, error}
}

const mapDispatchToProps = (dispatch, { shopService }) => {
  return bindActionCreators({
    fetchProducts: fetchProducts(shopService),
  }, dispatch);
};

export default compose(withShopService(),connect(mapStateToProps, mapDispatchToProps
))(ProductListContainer)