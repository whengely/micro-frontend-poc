import * as React from 'react'
import { Switch, Route } from 'react-router'
import { MicroFrontend } from './micro-frontend/micro-frontend'
import styled from 'styled-components'

const {
  REACT_APP_FIRST_HOST: firstHost,
  REACT_APP_SECOND_HOST: secondHost,
} = process.env

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-columns: 1fr 1fr;
`

const Home = () => <div>This is the HOME page.</div>
const First = () => <MicroFrontend name='First' host={firstHost ?? 'error'} />
const Second = () => (
  <MicroFrontend name='Second' host={secondHost ?? 'error'} />
)

const Both = () => (
  <Wrapper>
    <First />
    <Second />
  </Wrapper>
)

export const Routing = () => (
  <Switch>
    <Route path='/first'>
      <First />
    </Route>
    <Route path='/second'>
      <Second />
    </Route>
    <Route path='/both'>
      <Both />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
)
