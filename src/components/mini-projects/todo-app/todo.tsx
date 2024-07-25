"use client";
import React, { useEffect } from "react";
import { CircleCheckIcon, TrashIcon } from "../../../../public/assets/svg";
import { handleAddTodo, handleCompleteTodo, handleRemove } from "./action";
import { AnimatePresence } from "framer-motion";
import { motion, Reorder } from "framer-motion";
import "./style.css";
import useLocalStorage from "@/hooks/useLocalStorage";
export type todoStatus = "doing" | "completed";
export interface ITodo {
    todo: string;
    status: todoStatus;
    id: string;
}
const Todo = () => {
    // const [todos, setTodos] = React.useState<ITodo[]>([]);
    const [todos, setTodos] = useLocalStorage("k-todo", []);
    const [loading, setLoading] = React.useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
    }, []);
    if (!loading) return null;
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                },
            }}
            className="max-w-[700px] flex-1 overflow-hidden space-y-5 mx-auto w-full"
        >
            <div className="flex gap-2 sm:gap-5 pr-2">
                <input
                    id="todo-input"
                    type="text"
                    name="todo-input"
                    maxLength={200}
                    className={"border mb-1 rounded outline-none w-full h-10 p-2 bg-transparent relative "}
                    placeholder="Enter your todo here."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddTodo(setTodos, todos);
                        }
                    }}
                />
                <button
                    onClick={() => handleAddTodo(setTodos, todos)}
                    className="bg-transparent rounded  h-10 outline-none  group text-sm  overflow-hidden gradient-border  relative after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-full  after:h-full after:bg-main-gradient  "
                >
                    <p className="mx-auto px-4 flex justify-center relative z-10 font-bold transition-all duration-300 group-disabled:text-transparent group-hover:text-black bg-main-gradient text-transparent bg-clip-text ">
                        Add
                    </p>
                </button>
            </div>
            <Reorder.Group axis="y" values={todos} onReorder={setTodos} className="h-full overflow-auto CustomScrollBar pr-2 ">
                <AnimatePresence mode={"sync"}>
                    <ul className="flex flex-col gap-2 text-sm sm:text-base">
                        {todos.map((todo: ITodo) => (
                            <Reorder.Item key={todo.id} className="cursor-grabbing	" value={todo}>
                                <motion.li
                                    className="flex gap-1 p-3 rounded w-full hover:bg-white/5 transition-colors duration-300 items-center justify-between "
                                    layout
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring" }}
                                    key={todo.id}
                                >
                                    <p className={todo.status === "completed" ? " line-through text-white/70" : "text-white "}>{todo.todo}</p>
                                    <button
                                        onClick={() => handleRemove(todo, setTodos, todos)}
                                        className="hover:bg-red-500 ml-auto text-sm bg-transparent transition-colors duration-300  text-white font-bold p-2 rounded"
                                    >
                                        <TrashIcon className="size-4" />
                                    </button>
                                    <button
                                        onClick={() => handleCompleteTodo(todo, setTodos, todos)}
                                        className="hover:bg-green-500 text-sm bg-transparent transition-colors duration-300  text-white font-bold p-2 rounded"
                                    >
                                        <CircleCheckIcon className="size-4" />
                                    </button>
                                </motion.li>
                            </Reorder.Item>
                        ))}
                    </ul>
                </AnimatePresence>
            </Reorder.Group>
        </motion.div>
    );
};

export default Todo;
