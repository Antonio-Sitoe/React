import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from './store/actions/todos';
import { bindActionCreators } from 'redux';

const TodoList = ({ Todo, addTodo, removeTodo }) => {
  return (
    <>
      <ul>
        {Todo.map(({ id, text }) => {
          return (
            <li key={id}>
              {text} <button onClick={() => removeTodo(id)}>Remover</button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => addTodo('Fazer cafe')}>Clic</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  Todo: state.Todo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
