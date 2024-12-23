import prisma from '@/src/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}
export async function POST(request: Request) {
  const body = await request.json();

  const newData = await prisma.todo.create({
    data: {
      content: body.content,
      completed: false,
    },
  });
  return NextResponse.json(newData);
}
export async function DELETE() {
  return NextResponse.json({
    message: 'Hello World',
  });
}
export async function PUT(request: Request) {
  const body = await request.json(); // body contain already the modified data
  // Utilisez l'ID pour mettre à jour les données
  const updatedData = await prisma.todo.update({
    where: { id: parseInt(body.id) },
    data: {
      content: body.content,
      completed: body.completed,
    },
  });
  return NextResponse.json(updatedData);
}
