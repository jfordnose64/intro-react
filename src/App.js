import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Funny from './components/Funny'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Funny />
        <Footer />
      </main>
    )
  }
}

export default App
