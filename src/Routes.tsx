import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={CreatePoint} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
