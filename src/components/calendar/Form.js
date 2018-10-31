import React, { Component } from "react";
import Mini from "./MiniCalendar";
const database = window.firebase.database();
class Form extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      booking: [],
      productName: '',
      productPrice: 0,
      surchargeAmount: 0,
      totalAmount: 0,
      schedule: '',
      clickedTH: false
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    database.ref('/agency').once('value').then(snapshot => {
      const arr = Object.values(snapshot.val().products);
      this.setState({
        products: arr
      })
    });

    database.ref('/booking').once('value').then(snapshot => {
      Object.values(snapshot.val()).map(snap => {
        if (snap.day === this.props.day) {
          this.setState({
            booking: snap
          })
        }
      })
    });

    const hour = parseInt(this.props.hour);
    if (hour >= 12 && hour < 16) {
      this.setState({ surchargeAmount: this.props.price * 0.05 });
    } else if (hour >= 16 && hour < 20) {
      this.setState({ surchargeAmount: this.props.price * 0.15 });
    } else {
      this.setState({ surchargeAmount: 0 });
    }
  }

  render() {
    return (
      <div>
        <form className="form-data p-5" onSubmit={this.handleSubmit.bind(this)}>
          <Mini hour={this.props.hour} handleClick={this.handleClick.bind(this)} booking={this.state.booking} handleGetLength={this.handleGetLength.bind(this)}/>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="bmd-label-floating mb-0">
              Producto
            </label>
            <select
              className="form-control pt-0"
              id="exampleSelect1"
              onChange={this.handleChange.bind(this)}
            >
              <option disabled selected>
                Selecciona una opción
              </option>
              {this.state.products.map((element, i) => {
                return (
                  <option
                    key={`products${i}`}
                    value={element.price + "-" + element.name}
                  >
                    {element.name}
                  </option>
                );
              })}
            </select>
            <div className="invalid-feedback text-danger" id="if3">
              Debes ingresar un producto
            </div>
          </div>
          <section className="section-disabled">
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">Programa: </label>
            <input
              type="text"
              className="form-control"
              value={this.props.name}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">Fecha:</label>
            <input
              type="text"
              className="form-control"
              value={this.props.day}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">
              Monto por producto:{" "}
            </label>
            <div className="input-group-prepend">
              <p className="input-group-text">$</p>
            </div>
            <input
              type="text"
              className="form-control in-nop"
              value={this.state.productPrice}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">
              Monto por programa:{" "}
            </label>
            <div className="input-group-prepend">
              <p className="input-group-text">$</p>
            </div>
            <input
              type="text"
              className="form-control in-nop"
              value={this.props.price}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">
              Monto por recargo:{" "}
            </label>
            <div className="input-group-prepend">
              <p className="input-group-text">$</p>
            </div>
            <input
              type="text"
              className="form-control in-nop"
              value={this.state.surchargeAmount}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <label className="bmd-label-floating lb-nop">Monto total: </label>
            <div className="input-group-prepend">
              <p className="input-group-text">$</p>
            </div>
            <input
              type="text"
              className="form-control in-nop"
              ref={this.myRef}
              value={
                parseInt(this.state.productPrice) +
                parseInt(this.props.price) +
                parseInt(this.state.surchargeAmount)
              }
              disabled
            />
          </div>
          </section>
          <div className="form-check">
            <label>
              <input
                type="checkbox"
                className="form-check-input"
                caria-label="Checkbox for following text input"
                required
              />{" "}
              ACEPTO LOS TERMINOS Y CONDICIONES
            </label>
          </div>
          <button type="submit" className="btn btn-raised btn-warning btn-login" name="cancel" onClick={this.handleCancel.bind(this)}>Cancelar</button>
          <button type="submit" className="btn btn-raised btn-success btn-login" name="submit">Enviar</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const newTarget = e.target.value.split("-");
    this.setState({
      productPrice: parseInt(newTarget[0]),
      productName: newTarget[1]
    });
    const if3 = document.querySelector("#if3");
    if3.style.display = "none";
  }

  handleClick(schedule, value) {
    this.setState({ schedule: schedule, clickedTH: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (Object.values(e.target)[9].name === 'submit') {
      if (this.state.productPrice !== 0) {
        database.ref('booking/').push({
          name: this.props.name,
          day: this.props.day,
          hour: this.props.hour,
          productName: this.state.productName,
          productPrice: this.state.productPrice,
          programPrice: this.props.price,
          surchargePrice: this.state.surchargeAmount,
          schedule: this.state.schedule,
          totalPrice: this.myRef.current.value,
          clickedTH: this.state.clickedTH,
          idCalendar: this.props.idCalendar
        });
        this.props.handleChangeStatus(false);
      } else {
        const if3 = document.querySelector("#if3");
        if3.style.display = "block";
      }
    }
  }

  handleCancel(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.handleChangeStatus(false);
  }

  handleGetLength(length){
    console.log(length)
    if(length === 6){
      this.props.handleGetLength(true)
    }
  }
}
export default Form;
