import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import { Container, Form } from "./style";
import CompareList from '../../components/CompareList/Index';


export default class Main extends Component {
  state={
    repositories: [],
  }
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form>  
          <input type="text" placeholder="usuario/repositorio" />
          <button type="submit">ok</button>
        </Form>
        <CompareList repositories={this.state.repositories}/>
      </Container>
    );
  }
}
