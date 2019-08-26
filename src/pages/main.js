import React, { Component } from 'react';

import logo from '../assets/img/logo.png'

export default class Main extends Component {
  render() {
    return <div>
      <img src={logo} alt="Github Compare"/>
      <form>
        <input type="text" placeholder="usuario/repositorio"/>
        <button type="submit">ok</button>
      </form>
    </div>
  }
}
