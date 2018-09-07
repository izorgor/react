import React, { Component } from 'react';
import mainLogo from '../logo.png';

class Navigation extends Component {
  render () {
    return (
      <div>
        <nav>
          <h1>
            <span>Native</span> Roller <sup>v1.0</sup>
            <img className="mainLogo" src={mainLogo} alt=""/>
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navigation;


