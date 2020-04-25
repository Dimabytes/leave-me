import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import {Route, Switch} from 'react-router'
import {HomePage, ProductPage} from '../pages'
import Footer from "../footer";
import Header from "../header";
import './style/base.scss'
import noMatch from "../no-match";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/product/:id?" render={({match}) => {
        const {id} = match.params;
        return <ProductPage itemId={id}/>
      }}/>
        <Route component={noMatch} />
      </Switch>
      <Footer/>
    </Fragment>

  )
}

export default App