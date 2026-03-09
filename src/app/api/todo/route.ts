import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { _todos } = await import("@/mocks/_todo");
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  let filteredTodos = _todos;
  if (query) {
    filteredTodos = filteredTodos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));
  }
  if (page) {
    const pageSize = 5;
    const pageNumber = parseInt(page, 10);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    filteredTodos = filteredTodos.slice(startIndex, endIndex);
  }
  return NextResponse.json(filteredTodos);
}

export async function POST(request: NextRequest) {
  const { _todos } = await import("@/mocks/_todo");
  const body = await request.json();
  const newTodo = {
    id: _todos.length + 1,
    title: body.title,
    completed: false,
  };
  _todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { _todos } = await import("@/mocks/_todo");
  const body = await request.json();
  const todoIndex = _todos.findIndex((todo) => todo.id === body.id);
  if (todoIndex === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  _todos[todoIndex].completed = body.completed;
  return NextResponse.json(_todos[todoIndex]);
}

export async function DELETE(request: NextRequest) {
  const { _todos } = await import("@/mocks/_todo");
  const body = await request.json();
  const todoIndex = _todos.findIndex((todo) => todo.id === body.id);
  if (todoIndex === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  const deletedTodo = _todos.splice(todoIndex, 1);
  return NextResponse.json(deletedTodo[0]);
}
