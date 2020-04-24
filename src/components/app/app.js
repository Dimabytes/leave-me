import React from "react";
import './app.scss'
import {Route, Switch} from 'react-router'
import {HomePage, ProductPage} from '../pages'
import Header from "../header";
import './style/base.scss'

const App = () => {
  return (
    <Switch>
      <Header/>
      <Route path="/" component={HomePage} exact/>
      <Route path="/product/:id?" component={ProductPage}/>
    </Switch>
  )
}

export default App