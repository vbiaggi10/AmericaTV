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
          <div class="form-group">
            <label for="exampleSelect1" class="bmd-label-floating">Producto</label>
            <select class="form-control" id="exampleSelect1">
              {this.state.products.map(element => {
                return (<option>{element.name}</option>)
              })}
            </select>
          </div>
          <div class="form-group">
            <label for="exampleSelect2" class="bmd-label-floating">Programa</label>
            <input type="name" className="form-control" disabled>{this.props.name}</input>
          </div>
          <div class="form-group">
            <label for="exampleTextarea" class="bmd-label-floating">Fecha</label>
            <input type="name" className="form-control" disabled>{this.props.day} {this.props.hour}</input>
          </div>
          <div class="form-group">
            <label for="exampleInputFile" class="bmd-label-floating">Monto por producto</label>
            <input type="name" className="form-control" disabled>---</input>
          </div>
          <div class="form-group">
            <label for="exampleInputFile" class="bmd-label-floating">Monto por programa</label>
            <input type="name" className="form-control" disabled>{this.props.price}</input>
          </div>
          <div class="form-group">
            <label for="exampleInputFile" class="bmd-label-floating">Monto por recargo</label>
            <input type="name" className="form-control" disabled>---</input>
          </div>
          <div class="form-group">
            <label for="exampleInputFile" class="bmd-label-floating">Monto total</label>
            <input type="name" className="form-control" disabled>---</input>
          </div>
          
          
          <div class="checkbox">
            <label>
              <input type="checkbox" /> Acepto los términos y condiciones 
            </label>
          </div>
          <button class="btn btn-default">Cancelar</button>
          <button type="submit" class="btn btn-primary btn-raised">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
