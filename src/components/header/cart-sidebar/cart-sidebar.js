import React, {Component} from "react";
import CartSidebarItem from "../cart-sidebar-item";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import publicPath from "../../../utils/public-image";

class CartSidebar extends Component {

  render() {
    const {orderTotal, cartItems, visible, toggleSidebar, onIncrease, onDecrease} = this.props
    const modificator = visible ? "active":"";
    return (
      <div className="sidebar-wrapper">
        <div className={`sidebar cart__sidebar ${modificator}`}>
          <div className="sidebar__header col-12">
            <p className="text-center text-uppercase">Корзина</p>
          </div>
          <div className="body__sidebar col-12">
            {
              cartItems.map((product) => <CartSidebarItem key={product.id}
                                                          product={product}
                                                          onIncrease={onIncrease}
                                                          onDecrease={ onDecrease}/>)
            }

          </div>
          <div className="footer__sidebar col-12">
            <div className="row text-center">
              <div className="col-12">
                <p className="text">Итого: {orderTotal}р</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <Link to="/" className="btn btn-primary">Оформить заказ</Link>
              </div>
            </div>
          </div>
          <img className="close__sidebar justify-content-center"
               onClick={toggleSidebar}
               src={publicPath('/img/next.svg')}
               alt="close"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({orderTotal, cartItems}) => {
  return {orderTotal, cartItems}
}

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => console.log(`Increase ${id}`),
    onDecrease: (id) => console.log(`Decrease ${id}`)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
