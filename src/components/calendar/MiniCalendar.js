import React, { Component } from 'react';
import TrData from './TrData';
class MiniCalendar extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
      clicked: null
    }
    this.myRef = React.createRef();

  }

  componentDidMount() {
  }

  render() {
    if (this.props.booking.clickedTH) {
      Object.values(this.myRef.current.children).forEach(ref => {
        if (ref.textContent === this.props.booking.schedule) {
          ref.className = "desactive";
          ref.innerHTML = "<th>No disponible</th>";
        }
      })
    }
    return (
      <table className="table table-striped ">
        <tbody ref={this.myRef}>
          <tr>
            <TrData index={0} isActive={this.state.activeIndex === 0} id={`${this.props.hour}:00 - ${this.props.hour}:10`} onClick={this.click.bind(this)} name={`${this.props.hour}:00 - ${this.props.hour}:10`} />
          </tr>
          <tr>
            <TrData index={1} isActive={this.state.activeIndex === 1} id={`${this.props.hour}:10 - ${this.props.hour}:20`} onClick={this.click.bind(this)} name={`${this.props.hour}:10 - ${this.props.hour}:20`} />
          </tr>
          <tr>
            <TrData index={2} isActive={this.state.activeIndex === 2} id={`${this.props.hour}:20 - ${this.props.hour}:30`} onClick={this.click.bind(this)} name={`${this.props.hour}:20 - ${this.props.hour}:30`} />
          </tr>
          <tr>
            <TrData index={3} isActive={this.state.activeIndex === 3} id={`${this.props.hour}:30 - ${this.props.hour}:40`} onClick={this.click.bind(this)} name={`${this.props.hour}:30 - ${this.props.hour}:40`} />
          </tr>
          <tr>
            <TrData index={4} isActive={this.state.activeIndex === 4} id={`${this.props.hour}:40 - ${this.props.hour}:50`} onClick={this.click.bind(this)} name={`${this.props.hour}:40 - ${this.props.hour}:50`} />
          </tr>
          <tr>
            <TrData index={5} isActive={this.state.activeIndex === 5} id={`${this.props.hour}:50 - ${((parseInt(this.props.hour) + 1) < 10 ? "0" : "") + (parseInt(this.props.hour) + 1)}:00`} onClick={this.click.bind(this)} name={`${this.props.hour}:50 - ${((parseInt(this.props.hour) + 1) < 10 ? "0" : "") + (parseInt(this.props.hour) + 1)}:00`} />
          </tr>
        </tbody>

      </table>
    );
  }



  click(index, targetID) {
    this.props.handleClick(targetID, true);
    this.setState({ activeIndex: index });
  }


}

export default MiniCalendar;