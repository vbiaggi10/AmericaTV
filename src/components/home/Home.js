import React, { Component } from 'react';
import SignIn from '../sign/SignIn';
import ShowData from '../calendar/ShowData';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      status: false
    }
  }
  render() {
    return (
      <div className="row">
        {this.state.status ? (<ShowData/>) : (<SignIn status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)}/>)}
      </div>
    );
  }

  handleChangeStatus(status){
    this.setState({status: status})
  }
}

export default Home;
