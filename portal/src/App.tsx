import * as React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppBar } from './appbar'
import { Routing } from './routing'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: auto;
`
const LocationInfo = () => {
  const { pathname } = useLocation()
  return <div>The current path is {pathname}</div>
}

export const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <AppBar />
        <LocationInfo />
        <Routing />
      </Wrapper>
    </BrowserRouter>
  )
}
