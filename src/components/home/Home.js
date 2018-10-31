import React, { Component } from 'react';
import SignIn from '../sign/SignIn';
import Calendar from '../calendar/Calendar';

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
        {this.state.status ? (<Calendar/>) : (<SignIn status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)}/>)}
      </div>
    );
  }

  handleChangeStatus(status){
    this.setState({status: status})
  }
}

export default Home;
