import React from "react";
import './app.scss'
import {Route, Switch} from 'react-router'
import {HomePage, ProductPage} from '../pages'

const App = () => {
  return (
    <Switch>
      <Route path="/leave-me/" component={HomePage} exact/>
      <Route path="/leave-me/product/:id?" component={ProductPage}/>
    </Switch>
  )
}

export default App