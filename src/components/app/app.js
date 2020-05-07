import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import {Route, Switch, withRouter} from 'react-router-dom'
import {compose} from "redux";
import {CheckoutPage, HomePage, ProductPage} from '../pages'
import Footer from "../footer";
import Header from "../header";
import NoMatch from "../pages/no-match";
import SuccessOrder from "../pages/success-order";
import FailOrder from "../pages/fail-order";
import {connect} from "react-redux";
import {closeCartSidebar} from "../../actions";

class App extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.closeCartSidebar()
    }
  }
  render() {


    return (
      <Fragment>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/checkout" component={CheckoutPage} exact/>
          <Route path="/success_order" component={SuccessOrder} exact/>
          <Route path="/fail-order" component={FailOrder} exact/>
          <Route path="/product/:id?" render={({match}) => {
            const {id} = match.params;
            return <ProductPage itemId={id}/>
          }}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </Fragment>

    )
  }
}



const mapDispatchToProps = {
  closeCartSidebar
}


export default compose(withRouter, connect(null, mapDispatchToProps))(App)