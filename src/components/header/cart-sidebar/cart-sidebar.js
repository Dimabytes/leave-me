import React, {Component} from "react";
import CartSidebarItem from "../cart-sidebar-item";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import publicPath from "../../../utils/public-image";
import {productIncreaseInCart, productDecreaseInCart, allProductsRemovedFromCart, closeCartSidebar} from "../../../actions";

class CartSidebar extends Component {

  render() {
    const {orderTotal, cartItems, visible, closeCartSidebar, onIncrease, onDecrease, onDelete} = this.props
    const modificator = visible ? "active":"";
    return (
      <div className="sidebar-wrapper">
        <div className={`sidebar cart__sidebar ${modificator}`}>
          <div className="sidebar__header col-12">
            <p className="text-center text-uppercase">Корзина</p>
          </div>
          <div className="body__sidebar col-12">
            {
              cartItems.map((product, idx) => <CartSidebarItem key={idx}
                                                          product={product}
                                                          onIncrease={onIncrease}
                                                          onDecrease={ onDecrease}
                                                          onDelete={onDelete}/>)
            }

          </div>
          <div className="footer__sidebar col-12">
            <div className="row text-center">
              <div className="col-12">
                <p className="text">Итого: {orderTotal}р</p>
              </div>
            </div>
            <div className="mb-3"/>
            <div className="row text-center">
              <div className="col-12">
                <Link to="/checkout" className="btn btn-primary">Оформить заказ</Link>
              </div>
            </div>
          </div>
          <img className="close__sidebar justify-content-center"
               onClick={closeCartSidebar}
               src={publicPath('/img/next.svg')}
               alt="close"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({shoppingCart: {orderTotal, cartItems, cartOpen: visible}}) => {
  return {orderTotal, cartItems, visible}
}

const mapDispatchToProps = {
    onIncrease: productIncreaseInCart,
    onDecrease: productDecreaseInCart,
    onDelete: allProductsRemovedFromCart,
    closeCartSidebar
}


export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
