import React from 'react';
import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => {
  return (
    <Container>
      {repositories.map((item) => {
        return (
          <Repository key={item.id}>
            <header>
              <img src={item.owner.avatar_url} alt={item.owner.login} />
              <strong>{item.owner.login}</strong>
              <small>{item.name}</small>
            </header>

            <ul>
              <li>
                {item.startgazers_count}
                <small>star</small>{' '}
              </li>
              <li>
                {item.forks_count}
                <small>star</small>{' '}
              </li>
              <li>
                {item.open_issues_count}
                <small>star</small>{' '}
              </li>
              <li>
                {item.lastCommit} <small>star</small>{' '}
              </li>
            </ul>
          </Repository>
        );
      })}
    </Container>
  );
};

export default CompareList;
