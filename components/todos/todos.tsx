import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { ITodo } from "@/app/types/todos";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Link from "next/link";
import styles from "./todos.module.css";

const TodosHome = ({ todos }: { todos: ITodo[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Todos List", href: "/todos" },
    ];

    return (
        <section className={styles.todosWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.todosContainer}>
                <h1 className={styles.todosHeader}>Todos List</h1>
                <table className={styles.todosTable}>
                    <thead>
                        <tr className="text-center">
                            <th>Todo ID</th>
                            <th>User ID</th>
                            <th className="text-left">Title</th>
                            <th>Completed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo: ITodo) => (
                            <tr key={todo.id} className="text-center">
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td className="text-left">
                                    <Link href={`/todos/${todo.id}`} className={styles.todosLink}>
                                        {todo.title}
                                    </Link>
                                </td>
                                <td>{todo.completed ? "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TodosHome;
