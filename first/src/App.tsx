import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={`${process.env.REACT_APP_MY_HOSTNAME}${logo}`}
          className='App-logo'
          alt='logo'
        />
        <div>This is the FIRST microfrontend</div>
      </header>
    </div>
  )
}

export default App
