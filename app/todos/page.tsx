import { ITodo } from "../types/todos";
import TodosHome from "@/components/todos/todos";

const TodosPage = async () => {
    // Server Side Rendering (SSR) because of { cache: "no-store" }
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", { cache: "no-store" });
    const todos: ITodo[] = await res.json();

    return <TodosHome todos={todos} />;
};

export default TodosPage;
