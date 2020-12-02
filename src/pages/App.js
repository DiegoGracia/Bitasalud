import React, { Component } from 'react';
import './styles.scss';

//COMPONENTS
import Header from './components/Header';
import Home from './components/Home';

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default class App extends Component{

  render() {
    return (
      <>
        <Header />
        <main className="main">     
            <Home />
        </main>
      </>
    )
  }
}