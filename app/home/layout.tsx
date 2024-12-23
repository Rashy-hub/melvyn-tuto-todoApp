'use client';

import { TodoProvider } from '../../src/context/TodoContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TodoProvider>{children}</TodoProvider>
    </>
  );
}
