import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={CreatePoint} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
