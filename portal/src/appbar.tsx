import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-auto-flow: column;
  justify-content: end;
`

export const AppBar = () => (
  <Wrapper>
    <Link to='/'>Home</Link>
    <Link to='/first'>First</Link>
    <Link to='/second'>Second</Link>
  </Wrapper>
)
