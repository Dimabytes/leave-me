import React, {Component} from "react";
import ProductListItem from "../product-list-item";
import {connect} from "react-redux";
import withShopService from "../../../hoc";
import {productsLoaded} from '../../../../actions'
import Spinner from "../../../spinner";
class ProductList extends Component{

  componentDidMount() {
    const { shopService } = this.props
    shopService.getAllProducts().then(data => {
      this.props.productsLoaded(data)
    })
  }

  render() {
    const {products, loading} = this.props
    console.log(loading)
    if(loading){
      return <Spinner/>
    }
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
}

const mapStateToProps = ({products, loading}) => {
  return {products, loading}
}

const mapDispatchToProps = {
    productsLoaded
}

export default withShopService()(connect(mapStateToProps, mapDispatchToProps)(ProductList))