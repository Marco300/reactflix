import React, { Component } from 'react';
import Header from './components/headers/Header';
import Home from './components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        {/* <Header/> */}
        <Home/>
      </div>
    );
  }
}

export default App;
