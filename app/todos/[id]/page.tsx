import { IPageProps } from "@/app/types/global";
import { ITodo } from "@/app/types/todos";
import TodoHome from "@/components/todo/todo";

const TodoPage = async ({ params }: IPageProps) => {
    // Incremental Static Generation (ISR) - combination of SSR and SSG, as it refreshes the data every 10 seconds
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`, { next: { revalidate: 10 } });
    const todoData: ITodo = await res.json();

    return <TodoHome todoData={todoData} />;
};

export default TodoPage;
