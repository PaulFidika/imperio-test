import React from 'react'
import logo from './logo.svg'
import './App.css'
// import { ReactComponent as Knight } from './knight.svg'
import Knight from './KnightMotion'

const animation = {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Knight className="knight" />
        {/* <img src={knight} className="knight" alt="knight" /> */}
        <p>Imperio DAO</p>
        This is written in English
      </header>
    </div>
  )
}

export default App
