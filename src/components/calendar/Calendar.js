import React, { Component } from 'react';

const database = window.firebase.database();
const arrayDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    database.ref('/calendar').once('value').then((snapshot) => {
      this.setState({ data: snapshot.val() })
    });
  }

  render() {
    return (
      <div className="container bg-white table-container d-flex justify-content-center">
        <table className="table-item table-striped">
          <thead>
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Domingo 4</th>
              <th scope="col">Lunes 5</th>
              <th scope="col">Martes 6</th>
              <th scope="col">Miércoles 7</th>
              <th scope="col">Jueves 8</th>
              <th scope="col">Viernes 9</th>
              <th scope="col">Sabado 10</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((data, i) => {
                return (
                  <tr key={`data${i}`}>
                    <th scope="row">{i < 10 ? ('0' + i) : i}:00 - {(i + 1) < 10 ? ('0' + (i + 1)) : (i + 1)}:00</th>
                    {
                      arrayDay.map((day, j) => {
                        return (<td key={`day${j}`}><a href="#" id={i + "-" + day + "-" + data[day].name + "-" + data[day].price} onClick={this.handleClick.bind(this)}>{data[day].name}</a></td>)
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleChangeStatus(true);
    const newTarget = e.target.id.split('-');
    const hour = (newTarget[0] < 10 ? ('0' + newTarget[0]) : newTarget[0]);
    
    this.props.handleGoForm(hour, newTarget[1], newTarget[2], newTarget[3]);
  }
}

export default Calendar;
