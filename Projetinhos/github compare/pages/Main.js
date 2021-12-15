import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../components/compareList';
import api from '../services/api';
import moment from 'moment';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repoError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(
        '/repos/' + this.state.repositoryInput
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repoError: false,
      });
    } catch (error) {
      this.setState({
        repoError: true,
      });
    }
  };
  render() {
    return (
      <Container>
        <img
          src={Logo}
          alt='git hb  compare
      '
        />
        <Form error={this.repoError} onSubmit={this.handleAddRepository}>
          <input
            type='text'
            placeholder='usuario/repositotio'
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button>ok</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
