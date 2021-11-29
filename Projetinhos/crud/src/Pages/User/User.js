import React from 'react';
import { Link } from 'react-router-dom';
import { handleDeleteUser, handleUpdate } from '../handleDeleteUser';

const User = () => {
  const [usuarios, setUsuarios] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:1337/usuarios')
      .then((response) => response.json())
      .then((json) => {
        setUsuarios(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  async function delet(id) {
    await handleDeleteUser(id);
    const data = await handleUpdate();
    setUsuarios(data);
  }
  if (usuarios)
    return (
      <div>
        <ul className='tab'>
          {usuarios.map(
            ({ id, nome, sobrenome, email, endereco: { rua, numero } }) => {
              return (
                <table key={id}>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Sobrenome</th>
                      <th>email</th>
                      <th>Rua</th>
                      <th>numero</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{nome}</td>
                      <td>{sobrenome}</td>
                      <td>{email}</td>
                      <td>{rua}</td>
                      <td>{numero}</td>
                      <td>
                        <Link to={`/update/${id}`} className='link'>
                          Editar
                        </Link>
                      </td>
                      <td>
                        <button onClick={() => delet(id)}>Deletar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            }
          )}
        </ul>

        <Link to='/register' className='link'>
          Registar novo usuario
        </Link>
      </div>
    );
  return <p>Ligue o servidor</p>;
};

export default User;
