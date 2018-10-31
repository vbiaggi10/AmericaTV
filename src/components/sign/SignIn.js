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
      <div class="container col-sm-12 col-md-6 text-white d-flex flex-column mt-5 mb-3 justify-content-center align-items-center">
        <h3 class="">Conectémonos+</h3>
        <p class="">EQUIPO COMERCIAL/CLIENTES</p>
        <form class="bg-white text-black p-3 form-login needs-validation" onSubmit={this.handleSubmit.bind(this)} novalidate>
          <img src="http://www.comercial.americatv.com.pe/images/load-america.gif" class="rounded mx-auto d-block" alt="logo" />
          <div class="form-group">
            <label for="email" class="bmd-label-floating">Coreo electronico</label>
            <input type="email" class="form-control" id="email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
            <div class="invalid-feedback text-danger" id="if1">
              Email invalido
          </div>
          </div>
          <div class="form-group">
            <label for="password" class="bmd-label-floating">Contraseña</label>
            <input type="password" class="form-control" id="password" value={this.state.password} onChange={this.handleChange.bind(this)} required />
            <div class="invalid-feedback text-danger" id="if2">
              Contraseña invalida
          </div>
          </div>
          <div class="form-group m-0 d-flex justify-content-center">
            <button type="submit" class="btn btn-primary" id="submit">Ingresar</button>
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
