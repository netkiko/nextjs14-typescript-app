import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./todo.module.css";
import { ITodo } from "@/app/types/todos";

const TodoHome = ({ todoData }: { todoData: Required<ITodo> }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Todos List", href: "/todos" },
        { id: 3, label: "Todo", href: undefined },
    ];

    return (
        <section className={styles.todoWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[60%]" />
            <form className={styles.todoForm}>
                <div className={styles.todoItem}>
                    <span className={styles.todoLabel}>Todo ID:</span>
                    <span className={styles.todoValue}>{todoData.id}</span>
                </div>
                <div className={styles.todoItem}>
                    <label htmlFor="userId" className={styles.todoLabel}>
                        User ID:
                    </label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        value={todoData.userId}
                        disabled
                        className={styles.todoInput}
                    />
                </div>
                <div className={styles.todoItem}>
                    <label htmlFor="title" className={styles.todoLabel}>
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={todoData.title}
                        disabled
                        className={styles.todoInput}
                    />
                </div>
                <div className={styles.todoItem}>
                    <label htmlFor="completed" className={styles.todoLabel}>
                        Completed?
                    </label>
                    <input
                        id="completed"
                        type="checkbox"
                        checked={todoData.completed}
                        className="checkbox checkbox-primary"
                        disabled
                    />
                </div>
            </form>
        </section>
    );
};

export default TodoHome;
