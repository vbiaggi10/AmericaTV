import React, { Component } from 'react';

class TrData extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <th className={this.props.isActive ? 'th clicked' : 'th'} scope="row" id={this.props.id} onClick={this.handleClick.bind(this)}>{this.props.name}</th>
    );
  }

  handleClick(e) {
    this.props.onClick(this.props.index, e.target.id);
  }
}

export default TrData;