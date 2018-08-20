import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <Link to="/about">About me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/cv">CV</Link>
          <a href="https://github.com/vesakivisto">GitHub</a>
          <a href="https://www.linkedin.com/in/vesakivisto">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default Header;
