import React, {Component} from "react";
import ProductListItem from "../product-list-item";
import {connect} from "react-redux";
import withShopService from "../../../hoc";
import {fetchProducts} from '../../../../actions'
import Spinner from "../../../spinner";
import ErrorIndicator from "../../../error-indicator";
import compose from "../../../../utils/compose";




const ProductList = ({products}) => {
  return (
    <div className="container-xl products-grid">
      <div className="row align-items-center justify-content-center">
        {
          products.map((product) => {
            return (
              <ProductListItem key={product.id} product={product}/>
            )
          })
        }
      </div>
    </div>

  )
}


class ProductListContainer extends Component{
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const {products, loading, error} = this.props
    if(loading){
      return <Spinner/>
    }
    if(error){
      return <ErrorIndicator/>
    }
    return <ProductList products={products}/>
  }
}


const mapStateToProps = ({products, loading, error}) => {
  return {products, loading, error}
}

const mapDispatchToProps = (dispatch, {shopService}) => {
  return{
      fetchProducts: fetchProducts(shopService, dispatch)
  }
}

export default compose(withShopService(),connect(mapStateToProps, mapDispatchToProps
  ))(ProductListContainer)