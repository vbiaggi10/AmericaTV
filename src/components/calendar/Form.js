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
      totalAmount: 0
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
        <form className="form-data p-5" onSubmit={this.handleSubmit.bind(this)}>
          <Mini hour={this.props.hour} />
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="bmd-label-floating">Producto</label>
            <select className="form-control" id="exampleSelect1" onChange={this.handleChange.bind(this)}>
              <option disabled selected>Selecciona una opción</option>
              {this.state.products.map((element, i) => {
                return (<option key={`products${i}`} value={element.price + "-" + element.name}>{element.name}</option>)
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Programa</label>
            <input type="text" className="form-control" value={this.props.name} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Fecha</label>
            <input type="text" className="form-control" value={this.props.day} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Monto por producto</label>
            <input type="text" className="form-control" value={this.state.productPrice} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Monto por programa</label>
            <input type="text" className="form-control" value={this.props.price} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Monto por recargo</label>
            <input type="text" className="form-control" value={this.state.surchargeAmount} disabled />
          </div>
          <div className="form-group">
            <label className="bmd-label-floating">Monto total</label>
            <input type="text" className="form-control" ref={this.myRef} value={(parseInt(this.state.productPrice) + parseInt(this.props.price) + parseInt(this.state.surchargeAmount))} disabled />
          </div>
          <div className="form-check">
            <label>
              <input type="checkbox" className="form-check-input" caria-label="Checkbox for following text input" /> Acepto los términos y condiciones
            </label>
          </div>
          <button type="submit" className="btn btn-raised btn-warning btn-login" name="cancel">Cancelar</button>
          <button type="submit" className="btn btn-raised btn-success btn-login" name="submit">Enviar</button>
        </form>
      </div>
    );
  }
  handleChange(e) {
    const newTarget = e.target.value.split('-');
    this.setState({ productPrice: parseInt(newTarget[0]), productName: newTarget[1] });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.productPrice !== 0) {
      database.ref('booking/').push({
        name: this.props.name,
        productName: this.state.productName,
        productPrice: this.state.productPrice,
        programPrice: this.props.price,
        surchargePrice: this.state.surchargeAmount,
        totalPrice: this.myRef.current.value
      });
    } else {
      alert("seleccionar producto")
    }
  }
}
export default Form;