import TodoContainer from "@/components/mini-projects/todo-app/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Todo App | Mini Projects",
};
export default function TodoApp() {
    return (
        <main className=" z-[1] relative text-white  min-h-screen">
            <TodoContainer />
        </main>
    );
}
