import React, { Component } from 'react';

const database = window.firebase.database();
const arrayDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const arrayIDCalendar = [];

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      arrayIdCalendar: []
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    database.ref('/calendar').once('value').then((snapshot) => {
      this.setState({ data: snapshot.val() })
    });
    database.ref('/booking').once('value').then(snapshot => {
      const { arrayIdCalendar } = this.state;
      Object.values(snapshot.val()).map(snap => {
        return arrayIdCalendar.push(snap.idCalendar)
      })
      this.setState({
        arrayIdCalendar: arrayIdCalendar
      })
    })
  }

  render() {
    var array1 = this.state.arrayIdCalendar;
    var array2 = arrayIDCalendar;

    array2.forEach((arr2, i) => {
      array1.forEach((arr1, j) => {
        if (arr2 === arr1) {
          console.log(i + " " + j);
          return document.getElementById(arr1).style.background = "#e8e8e8";
        }
      })
    })

    return (
      <div className="container bg-white table-container d-flex justify-content-center mt-5">
        <form className="mx-auto">
          <fieldset>
            <legend>Leyenda:</legend>
            <div><div className="squard bg-hs"></div> : Horario estelar</div>
            <div><div className="squard bg-hp"></div> : Horario premium</div>
            <div><div className="squard bg-hsp"></div> : Horario super premium</div>
            <div><div className="squard bg-nd"></div> : Algunos o todos no disponibles</div>
          </fieldset>
        </form>
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
                        const newID = i + "-" + day + "-" + data[day].name + "-" + data[day].price;
                        arrayIDCalendar.push(newID)
                        return (<td ref={this.myRef} key={`day${j}`} className={`td text-secondary hour${i}`} id={newID} onClick={this.handleClick.bind(this)}>{data[day].name}</td>)
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
    this.props.handleGoForm(e.target.id, hour, newTarget[1], newTarget[2], newTarget[3]);
  }
}

export default Calendar;
