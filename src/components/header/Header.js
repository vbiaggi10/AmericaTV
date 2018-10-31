import React, { Component } from 'react';
import frame from '../../img/frame.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav className="navbar navbar-light bg-light nav-login">
            <a className="navbar-brand " href="AmericaTV">
              <img src={frame} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
              AMÉRICA COMERCIAL
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
