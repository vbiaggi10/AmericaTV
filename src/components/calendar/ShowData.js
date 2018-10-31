import React, { Component } from 'react';
import Form from './Form';
import Calendar from './Calendar';

class ShowData extends Component {
  constructor(){
    super();
    this.state = {
      status: false,
      hour: '',
      day: '',
      name: '',
      price: 0
    }
  }
  render() {
    return (
      <div className="row">
        {this.state.status ? (<Form status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)} hour={this.state.hour} day={this.state.day} name={this.state.name} price={this.state.price}/>) : (<Calendar status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)} handleGoForm={this.handleGoForm.bind(this)}/>)}
      </div>
    );
  }

  handleChangeStatus(status){
    this.setState({status: status})
  }

  handleGoForm(hour, day, name, price){
    this.setState({hour:hour , day:day, name:name, price:price})
  }
}

export default ShowData;
