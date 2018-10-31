import React, { Component } from 'react';

const database = window.firebase.database();

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container col-sm-12 col-md-6 text-white d-flex flex-column mt-5 mb-3 justify-content-center align-items-center">
        <h3 className="">Conectémonos+</h3>
        <p className="">EQUIPO COMERCIAL/CLIENTES</p>
        <form className="bg-white text-black p-3 form-login needs-validation" onSubmit={this.handleSubmit.bind(this)} novalidate>
          <img src="http://www.comercial.americatv.com.pe/images/load-america.gif" className="rounded mx-auto d-block" alt="logo" />
          <div className="form-group">
            <label for="email" className="bmd-label-floating">Coreo electronico</label>
            <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
            <div className="invalid-feedback text-danger" id="if1">
              Email invalido
          </div>
          </div>
          <div className="form-group">
            <label for="password" className="bmd-label-floating">Contraseña</label>
            <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange.bind(this)} required />
            <div className="invalid-feedback text-danger" id="if2">
              Contraseña invalida
          </div>
          </div>
          <div className="form-group m-0 d-flex justify-content-center">
            <button type="submit" className="btn btn-raised btn-success btn-login" id="submit">Ingresar</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    database.ref('/agency').once('value').then(snapshot => {
      if (snapshot.val().email === this.state.email && snapshot.val().password === this.state.password)
        this.props.handleChangeStatus(true)
      else
        alert("Correo electrónico o contraseña invalida");
    });
  }

  handleChange(e) {
    if (e.target.id === 'email') {
      this.setState({ email: e.target.value })
    } else if (e.target.id === 'password') {
      this.setState({ password: e.target.value })
    }
  }
}

export default SignIn;
