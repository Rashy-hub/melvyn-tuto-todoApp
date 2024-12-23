import { Todos } from '../types/todos';

const fetchTodos = {
  getTodos: async () => {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();

    return data as Todos[];
  },
  postTodo: async (data: Todos) => {
    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
  updateTodo: async (data: Todos) => {
    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
};
export default fetchTodos;
