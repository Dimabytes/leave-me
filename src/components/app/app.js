import React from "react";
import './app.scss'
import {Route, Switch} from 'react-router'
import {HomePage, ProductPage} from '../pages'

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/product/:id?" component={ProductPage}/>
    </Switch>
  )
}

export default App