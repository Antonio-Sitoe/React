import React from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, ButtonSubmit } from './styles';
import api from '../../services/Api';

const Main = () => {
  const [repo, setRepo] = React.useState('');
  const [reposList, setRepoList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await api.get(`${repo}`);

    const data = {
      name: response.data.full_name,
    };
    setRepoList([...reposList, data]);
    setRepo('');
    console.log(data);
    setLoading(false);
  };
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          value={repo}
          onChange={({ target }) => setRepo(target.value)}
          placeholder='Adicionar um rpositorio'
        />
        <ButtonSubmit disabled={loading} loading={loading}>
          {loading ? (
            <FaSpinner color='#fefefe' width={24} />
          ) : (
            <FaPlus color='#fefefe' width={24} />
          )}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default Main;
