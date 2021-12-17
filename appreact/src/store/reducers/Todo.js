const InicialState = [
  {
    id: 1,
    text: 'Estudar 1',
  },
  {
    id: 2,
    text: 'Estudar 2',
  },
];

const Todo = (state = InicialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo=>todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default Todo;
