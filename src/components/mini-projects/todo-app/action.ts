import { ITodo, todoStatus } from "./todo";

import { v4 as uuidv4 } from "uuid";


export const handleAddTodo = (setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>, todos:ITodo[]) => {
    const todoInput = document.getElementById("todo-input") as HTMLInputElement;
    const todo = todoInput.value;
    if (todo.trim() === "") return;
    console.log("todo", todo);
    setTodos([
        {
            id: uuidv4(),
            todo,
            status: "doing",
        },
        ...todos,
    ]);
    todoInput.value = "";
};

export const handleCompleteTodo = (todo: ITodo, setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>, todos: ITodo[]) => {
    const newTodos = todos.map((t) => {
        if (t.id === todo.id) {
            return {
                ...t,
                status: (t.status === "doing" ? "completed" : "doing") as todoStatus,
            };
        }
        return t;
    });
    setTodos(newTodos);
};
export const handleRemove = (todo: ITodo, setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>, todos: ITodo[]) => { 
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
}