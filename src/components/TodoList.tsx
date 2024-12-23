'use client';
import React from 'react';

import { Todos } from '../types/todos';

import TodoLine from './TodoLine';
import fetchTodos from '../services/fetchTodos';
import { useTodoContext } from '../context/TodoContext';

interface TodoListProps {
  invalidateCache: () => void;
}

const TodoList = ({ invalidateCache }: TodoListProps) => {
  const { todos } = useTodoContext();
  const handleCheckboxChange = async (todo: Todos) => {
    await fetchTodos.updateTodo({ ...todo, completed: !todo.completed });
    invalidateCache();
  };
  return (
    <ul className="flex flex-col justify-start items-center w-full">
      {todos.map((todo) => (
        <TodoLine
          key={todo.id}
          todo={todo}
          handleCheckboxChange={() => handleCheckboxChange(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
