import React, { Component } from 'react';
import Mini from './mini'
const database = window.firebase.database();

class Form extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    database.ref('/agency').once('value').then(snapshot => {
      const arr = Object.values(snapshot.val().products);
      this.setState({
        products: arr
      })
    });
  }
  render() {
    return (
      <div>
        <form>
          <Mini hour={this.props.hour} />
          <div className="form-group">
            <label for="exampleSelect1" className="bmd-label-floating">Producto</label>
            <select className="form-control" id="exampleSelect1">
              {this.state.products.map(element => {
                return (<option>{element.name}</option>)
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="exampleSelect2" className="bmd-label-floating">Programa</label>
            <input type="name" classNameName="form-control" disabled>{this.props.name}</input>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="bmd-label-floating">Fecha</label>
            <input type="name" classNameName="form-control" disabled>{this.props.day} {this.props.hour}</input>
          </div>
          <div className="form-group">
            <label for="exampleInputFile" className="bmd-label-floating">Monto por producto</label>
            <input type="name" classNameName="form-control" disabled>---</input>
          </div>
          <div className="form-group">
            <label for="exampleInputFile" className="bmd-label-floating">Monto por programa</label>
            <input type="name" classNameName="form-control" disabled>{this.props.price}</input>
          </div>
          <div className="form-group">
            <label for="exampleInputFile" className="bmd-label-floating">Monto por recargo</label>
            <input type="name" classNameName="form-control" disabled>---</input>
          </div>
          <div className="form-group">
            <label for="exampleInputFile" className="bmd-label-floating">Monto total</label>
            <input type="name" classNameName="form-control" disabled>---</input>
          </div>
          
          
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Acepto los términos y condiciones 
            </label>
          </div>
          <button className="btn btn-default">Cancelar</button>
          <button type="submit" className="btn btn-primary btn-raised">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
