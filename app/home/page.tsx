'use client';

import TodoList from '@/src/components/TodoList';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { useTodoContext } from '@/src/context/TodoContext';
import fetchTodos from '@/src/services/fetchTodos';

import React, { useEffect, useState } from 'react';

function Home() {
  const [todoDataForm, setTodoDataForm] = useState<string>('');
  const { todos, setTodos } = useTodoContext(); //useState<Todos[]>([]);

  const addTodoHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = await fetchTodos.postTodo({ content: todoDataForm });
    setTodos([...todos, newTodo]);
    setTodoDataForm('');
  };

  const getTodos = async () => {
    const data = await fetchTodos.getTodos();
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="font-sans  h-full w-full flex flex-col justify-start items-center mt-4 p-4 border-2 rounded-2xl ">
      {' '}
      <div className="w-[30%]  mb-4  ">
        <form
          className="flex flex-row  justify-center items-center gap-2"
          onSubmit={addTodoHandler}
        >
          <Input
            name="task"
            value={todoDataForm}
            onChange={(e) => setTodoDataForm(e.target.value)}
            placeholder="Enter a task"
            className="w-[300px] mb-5"
          />

          <Button type="submit">Add</Button>
        </form>
        <TodoList invalidateCache={getTodos} />
      </div>{' '}
    </div>
  );
}

export default Home;
