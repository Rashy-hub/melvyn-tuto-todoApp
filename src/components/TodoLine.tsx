'use client';
import React from 'react';
import { Todos } from '../types/todos';
import { Checkbox } from './ui/checkbox';

interface TodoLineProps {
  todo: Todos;
  handleCheckboxChange: () => Promise<void>;
}

const TodoLine = ({ todo, handleCheckboxChange }: TodoLineProps) => {
  return (
    <li
      key={todo.id}
      className={
        'flex flex-row justify-start items-center gap-4 w-full ' +
        `${todo.completed ? 'line-through' : ''}`
      }
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={handleCheckboxChange}
      />
      {todo.content}{' '}
    </li>
  );
};

export default TodoLine;
