import * as React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppBar } from './appbar'
import { Routing } from './routing'
import styled from 'styled-components'

const {
  REACT_APP_FIRST_HOST: firstHost,
  REACT_APP_SECOND_HOST: secondHost,
} = process.env

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: auto;
`
const LocationInfo = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div>PATHNAME: {pathname}</div>
      <div>First Host: {firstHost}</div>
      <div>Second Host: {secondHost}</div>
    </>
  )
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
