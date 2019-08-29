import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import { Container, Form } from "./style";
import CompareList from '../../components/CompareList/Index';
import api from '../../services/api'


export default class Main extends Component {
  state={
    repositoryInput: '',
    repositories: [],
  }

  handleAddRepository = async (e) =>{
    e.preventDefault();
    try {
        const response = await api.get(`/repos/${this.state.repositoryInput}`);
        this.setState({repositoryInput: '',
        repositories: [...this.state.repositories, response.data]})
    } catch (error) {
      console.log(error)
      
    }
  }
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={(e)=>this.handleAddRepository(e)}>  
          <input type="text" placeholder="usuario/repositorio" 
          value={this.state.repositoryInput}
          onChange={e => this.setState({repositoryInput: e.target.value})}/>
          <button type="submit">ok</button>
        </Form>
        <CompareList repositories={this.state.repositories}/>
      </Container>
    );
  }
}
