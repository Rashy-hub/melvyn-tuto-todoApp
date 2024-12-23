import { createContext, useState, useContext } from 'react';
import { Todos } from '../types/todos';

interface TodoContextType {
  todos: Todos[];
  setTodos: (todos: Todos[]) => void;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todos[]>([]);
  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export default TodoContext;
