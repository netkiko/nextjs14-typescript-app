"use client";

import { useEffect, useState } from "react";
import { ITodo } from "@/app/types/todos";
import cx from "classnames";
import LoadingContent from "../loading-content";
import styles from "./user-todos.module.css";

interface Props {
    id: number;
    name: string;
    className: string;
    closeModal: () => void;
}

const UserTodosModal = (props: Props) => {
    const { id, name, className, closeModal } = props;

    const [todos, setTodos] = useState<ITodo[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserTodos = async () => {
            const res = await fetch(`/api/user-todos?id=${id}`);
            const resp: ITodo[] = await res.json();
            setTodos(resp);
            setLoading(false);
        };

        fetchUserTodos();
    }, [id]);

    return (
        <dialog id={id.toString()} className={cx(styles.userTodosDialog, className)}>
            <div className={styles.userTodosModal}>
                <h3 className={styles.userTodosTitle}>User ID: {id}</h3>
                <p className={styles.userTodosSubTitle}>Name: {name}</p>
                {loading ? (
                    <LoadingContent />
                ) : (
                    <div className={styles.userTodosModalAction}>
                        <form method="dialog" className="w-full">
                            <table className={styles.userTodosTable}>
                                <thead>
                                    <tr>
                                        <th className="text-center">Todo ID</th>
                                        <th className="text-left">Title</th>
                                        <th className="text-center">Completed?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos?.map((todo: ITodo) => (
                                        <tr key={todo.id}>
                                            <td className="text-center">{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td className="text-center">{todo.completed ? "Yes" : "No"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.userTodosBtnWrapper}>
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </dialog>
    );
};

export default UserTodosModal;
