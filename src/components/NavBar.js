import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="nav">
          <h1 className="Octodex">Octodex</h1>
          <h2 className="home">Home</h2>
          <h2 className="faq">FAQ</h2>
        </div>
        <div className="social">
          <h3 className="twitter">Follow Us On Twitter</h3>
          <h3 className="git">Back To GitHub.com</h3>
        </div>
      </section>
    )
  }
}

export default NavBar
