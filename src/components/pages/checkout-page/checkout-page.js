import React, {Component} from "react";
import CheckoutForm from "./checkout-form";
import {compose} from "redux";
import withShopService from "../../hoc";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {clearCart} from "../../../actions";
import Spinner from "../../spinner";

class CheckoutPage extends Component {

  state = {
    formProcessing: false,
    error: false
  }

  render() {
    const {orderTotal, shopService, cartItems, clearCart} = this.props
    const onSubmit = (values) => {
      this.setState({formProcessing: true})
      shopService.addOrder({
        ...values,
        products:
          cartItems.map(product => {
            return {
              count: product.count,
              size: product.size,
              product: product.id,
            }
          })

      })
        .then((res) => {
          if(res.status){
            clearCart()
            this.setState({formProcessing: false})
            this.props.history.push("/success_order");
          } else {
            clearCart();
            this.setState({formProcessing: false})
            this.props.history.push("/fail-order");
          }
        })
        .catch(() => {
          clearCart();
          this.setState({formProcessing: false})
          this.props.history.push("/fail-order");
        })
    }
    if (orderTotal === 0)
      return <h1 className="alert alert-secondary">Корзина пуста!</h1>
    if (this.state.formProcessing)
      return <Spinner/>

    return (
      <main className="product-page">
        <div className="container-xl">
          <div className="row justify-content-md-center">
            <div className="col-md-8 order-md-1">
              <CheckoutForm onSubmit={onSubmit}/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


const mapStateToProps = ({shoppingCart: {orderTotal, cartItems}}) => {
  return {cartItems, orderTotal}
}

const mapDispatchToProps = {
  clearCart
}


export default compose(withShopService(), connect(mapStateToProps, mapDispatchToProps), withRouter)(CheckoutPage)