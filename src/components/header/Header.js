import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav class="navbar navbar-light bg-light nav-login">
            <a class="navbar-brand text-white" href="AmericaTV">
              <img src="../../img/logo_header.png" width="30" height="30" class="d-inline-block align-top" alt="" />
              AMÉRICA COMERCIAL
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
