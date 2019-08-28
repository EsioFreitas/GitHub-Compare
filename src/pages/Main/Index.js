import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import { Container, Form } from "./style";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form>
          <input type="text" placeholder="usuario/repositorio" />
          <button type="submit">ok</button>
        </Form>
      </Container>
    );
  }
}
