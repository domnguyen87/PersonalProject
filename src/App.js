import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import Login from './components/Login'
import Layout from './template/Layout'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Layout />
        </header>
      </div>
    );
  }
}

export default App;
