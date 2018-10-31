import React, { Component } from 'react';
import Mini from './MiniCalendar'
const database = window.firebase.database();
class Form extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      productName: '',
      productPrice: 0,
      surchargeAmount: 0,
      totalAmount: 0,
      schedule:'',
      clickedTH: false
    }
    this.myRef = React.createRef();
  }
  componentDidMount() {
    database.ref('/agency').once('value').then(snapshot => {
      const arr = Object.values(snapshot.val().products);
      this.setState({
        products: arr
      })
    });
    const hour = parseInt(this.props.hour);
    if (hour >= 12 && hour < 16) {
      this.setState({ surchargeAmount: (this.props.price * 0.05) });
    } else if (hour >= 16 && hour < 20) {
      this.setState({ surchargeAmount: (this.props.price * 0.15) });
    } else {
      this.setState({ surchargeAmount: 0 });
    }
  }

  render() {
    return (
      <div>
        <form className="form-data p-4" onSubmit={this.handleSubmit.bind(this)}>
          <Mini hour={this.props.hour} handleClick={this.handleClick.bind(this)}/>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="bmd-label-floating">PRODUCTO</label>
            <select className="form-control" id="exampleSelect1" onChange={this.handleChange.bind(this)}>
              <option disabled selected>Selecciona una opción</option>
              {this.state.products.map((element, i) => {
                return (<option key={`products${i}`} value={element.price + "-" + element.name}>{element.name}</option>)
              })}
            </select>
            <div className="invalid-feedback text-danger" id="if3">
              Debes ingresar un producto
          </div>
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">PROGRAMA</label>
            <input type="text" className="form-control" value={this.props.name} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">FECHA</label>
            <input type="text" className="form-control" value={this.props.day} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">MONTO POR PRODUCTO</label>
            <input type="text" className="form-control" value={this.state.productPrice} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">MONTO POR PROGRAMA</label>
            <input type="text" className="form-control" value={this.props.price} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">MONTO POR RECARGO</label>
            <input type="text" className="form-control" value={this.state.surchargeAmount} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">MONTO TOTAL</label>
            <input type="text" className="form-control" ref={this.myRef} value={(parseInt(this.state.productPrice) + parseInt(this.props.price) + parseInt(this.state.surchargeAmount))} disabled />
          </div>
          <div className="form-check">
            <label>

              <input type="checkbox" className="form-check-input" caria-label="Checkbox for following text input" required/> ACEPTO LOS TERMINOS Y CONDICIONES

            </label>
          </div>
          <button type="submit" className="btn btn-outline-danger btn-login" name="cancel">CANCELAR</button>
          <button type="submit" className="btn btn-raised btn-success btn-login" name="submit">ENVIAR</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const newTarget = e.target.value.split('-');
    this.setState({ productPrice: parseInt(newTarget[0]), productName: newTarget[1] });
  }

  handleClick(schedule, value){
    this.setState({ schedule: schedule, clickedTH: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.productPrice !== 0) {
      database.ref('booking/').push({
        name: this.props.name,
        day: this.props.day,
        hour: this.props.hour,
        productName: this.state.productName,
        productPrice: this.state.productPrice,
        programPrice: this.props.price,
        surchargePrice: this.state.surchargeAmount,
        schedule:this.state.schedule,
        totalPrice: this.myRef.current.value,
        clickedTH: this.state.clickedTH
      });
      this.props.handleChangeStatus(false);
    } else {
      this.props.handleChangeStatus(false);
      alert("seleccionar producto")
    }
  }
}
export default Form;