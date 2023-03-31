import { useState } from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Myrouter from './router'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Myrouter />
      </BrowserRouter>
    </div>
  )
}

export default App
