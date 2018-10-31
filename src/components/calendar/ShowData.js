import React, { Component } from 'react';
import Form from './Form';
import Calendar from './Calendar';

class ShowData extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      id: '',
      hour: '',
      day: '',
      name: '',
      price: 0,
      statusCalendar: false
    }
  }
  render() {
    console.log(this.state.statusCalendar)
    return (
      <div className="row row-table">
        {this.state.status ? (<Form idCalendar={this.state.id} status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)} hour={this.state.hour} day={this.state.day} name={this.state.name} price={this.state.price} />) : (<Calendar status={this.state.status} handleChangeStatus={this.handleChangeStatus.bind(this)} handleGoForm={this.handleGoForm.bind(this)} hour={this.state.hour} day={this.state.day} />)}
      </div>
    );
  }

  handleChangeStatus(status) {
    this.setState({ status: status });
  }

  handleGoForm(id, hour, day, name, price) {
    this.setState({ id: id, hour: hour, day: day, name: name, price: price });
  }
}

export default ShowData;
