import * as React from 'react'
import { Switch, Route } from 'react-router'

const Home = () => <div>This is the HOME page.</div>
const First = () => <div>This is the FIRST page.</div>
const Second = () => <div>This is the SECOND page.</div>

export const Routing = () => (
  <Switch>
    <Route path='/first'>
      <First />
    </Route>
    <Route path='/second'>
      <Second />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
)
