"use client";

import { useEffect, useState } from "react";
import cx from "classnames";
import LoadingContent from "../loading-content";
import styles from "./user-posts.module.css";
import { IPost } from "@/app/types/posts";

interface Props {
    id: number;
    name: string;
    className: string;
    closeModal: () => void;
}

const UserPostsModal = (props: Props) => {
    const { id, name, className, closeModal } = props;

    const [posts, setPosts] = useState<IPost[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserPosts = async () => {
            const res = await fetch(`/api/user-posts?id=${id}`);
            const resp: IPost[] = await res.json();
            setPosts(resp);
            setLoading(false);
        };

        fetchUserPosts();
    }, [id]);

    return (
        <dialog id={id.toString()} className={cx(styles.userPostsDialog, className)}>
            <div className={styles.userPostsModal}>
                <h3 className={styles.userPostsTitle}>User ID: {id}</h3>
                <p className={styles.userPostsSubTitle}>Name: {name}</p>
                {loading ? (
                    <LoadingContent />
                ) : (
                    <div className={styles.userPostsModalAction}>
                        <form method="dialog" className="w-full">
                            <table className={styles.userPostsTable}>
                                <thead>
                                    <tr>
                                        <th className="text-center">Post ID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts?.map((post: IPost) => (
                                        <tr key={post.id}>
                                            <td className="text-center">{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.userPostsBtnWrapper}>
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

export default UserPostsModal;
