import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import logo from 'assets/logo.svg'
import './App.css'

// REDUX
// Import store and wrap app with redux provider
// import store from './store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Starter Kit</h2>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
