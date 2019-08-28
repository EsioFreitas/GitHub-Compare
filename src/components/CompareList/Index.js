import React from "react";

import { Container, Repository } from "./style";

const CompareList = ({repositories}) => (
  <Container>
    {
      repositories.map(repository=>(
      <Repository>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.owner.login}</strong>
          <strong>facebook</strong>
        </header>
        <ul>  
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>stars</small>
          </li>
          <li>
            {repository.open_issues_count} <small>stars</small>
          </li>
          <li>
            {repository.pushed_at} <small>stars</small>
          </li>
          
        </ul>
      </Repository  >
      ))
    }
    
  </Container>
);

export default CompareList;
