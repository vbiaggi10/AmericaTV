import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav className="navbar navbar-light bg-light nav-login">
            <a className="navbar-brand " href="AmericaTV">
              <img src="../../img/logo_header.png" width="30" height="30" className="d-inline-block align-top" alt="" />
              AMÉRICA COMERCIAL
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
