import React, {Fragment} from 'react';
import CartSidebar from "./cart-sidebar";
import './header.scss';
import {Link} from "react-router-dom";
import publicPath from "../../utils/public-image";
import {connect} from "react-redux";
import {openCartSidebar} from "../../actions";
const Header = ({openCartSidebar}) => {
    return (
      <Fragment>
        <nav className="main-nav row align-items-center flex-nowrap">
          <div className="col-4 offset-4 main-nav__logo">
            <Link to='/'><img src={publicPath('/img/logo.svg')} alt="logo"/></Link>
          </div>
          <div className="col-4">
            <img className="main-nav__cart-icon toggle-bag float-right"
                 onClick={openCartSidebar}
                 src={publicPath('/img/bag.svg')}
                 alt="bag"/>
          </div>
        </nav>
        <CartSidebar/>
      </Fragment>
    )
}

const mapDispatchToProps = {
  openCartSidebar
}


export default connect(null, mapDispatchToProps)(Header);