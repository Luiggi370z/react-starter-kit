import React from 'react'
import logo from 'assets/logo.svg'
import './App.css'
import store from './store'

const a = store

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Starter Kit</h2>
        <p>
          <span>Edit </span>
          <code>src/App.js </code>
          <span>and save to reload.</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
