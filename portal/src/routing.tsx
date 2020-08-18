import * as React from 'react'
import { Switch, Route } from 'react-router'
import { MicroFrontend } from './micro-frontend/micro-frontend'

const {
  REACT_APP_FIRST_HOST: firstHost,
  REACT_APP_SECOND_HOST: secondHost,
} = process.env

const Home = () => <div>This is the HOME page.</div>
const First = () => <MicroFrontend name='First' host={firstHost ?? 'error'} />
const Second = () => (
  <MicroFrontend name='Second' host={secondHost ?? 'error'} />
)

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
