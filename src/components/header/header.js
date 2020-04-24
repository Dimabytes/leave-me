import React, {Fragment, Component} from 'react';
import CartSidebar from "./cart-sidebar";
import './header.scss';
import {Link} from "react-router-dom";
import publicPath from "../../utils/public-image";
class Header extends Component{

  state = {
    sidebarVisible: false
  };

  toggleSidebar = () => {
    this.setState({sidebarVisible: !this.state.sidebarVisible})
  }

  render (){
    return (
      <Fragment>
        <nav className="main-nav row align-items-center flex-nowrap">
          <div className="col-4 offset-4 main-nav__logo">
            <Link to='/'><img src={publicPath('/img/logo.svg')} alt="logo"/></Link>
          </div>
          <div className="col-4">
            <img className="main-nav__cart-icon toggle-bag float-right"
                 onClick={this.toggleSidebar}
                 src={publicPath('/img/bag.svg')}
                 alt="bag"/>
          </div>
        </nav>
        <CartSidebar toggleSidebar={this.toggleSidebar} visible={this.state.sidebarVisible}/>
      </Fragment>
    )
  }


};

export default Header;