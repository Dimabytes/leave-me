import React, {Fragment} from "react";
import './app.scss'
import {Route, Switch} from 'react-router'
import {HomePage, ProductPage} from '../pages'
import Footer from "../footer";
import Header from "../header";
import './style/base.scss'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/product/:id?" component={ProductPage}/>
      </Switch>
      <Footer/>
    </Fragment>

  )
}

export default App