"use client";

import { IComment } from "@/app/types/comments";
import { useEffect, useState } from "react";
import cx from "classnames";
import LoadingContent from "../loading-content/loading-content";
import styles from "./post-comments.module.css";

interface Props {
    id: number;
    title: string;
    className: string;
    closeModal: () => void;
}

const PostCommentsModal = (props: Props) => {
    const { id, title, className, closeModal } = props;

    const [comments, setComments] = useState<IComment[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPostComments = async () => {
            const res = await fetch(`/api/post-comments?id=${id}`);
            const resp: IComment[] = await res.json();
            setComments(resp);
            setLoading(false);
        };

        fetchPostComments();
    }, [id]);

    return (
        <dialog id={id.toString()} className={cx(styles.postCommentsDialog, className)}>
            <div className={styles.postCommentsModal}>
                <h3 className={styles.postCommentsTitle}>Post ID: {id}</h3>
                <p className={styles.postCommentsSubTitle}>Title: {title}</p>
                {loading ? (
                    <LoadingContent />
                ) : (
                    <div className={styles.postCommentsModalAction}>
                        <form method="dialog">
                            <table className={styles.postCommentsTable}>
                                <thead>
                                    <tr className="text-left">
                                        <th>Comment ID</th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments?.map((comment: IComment, i: number) => (
                                        <tr key={comment.id}>
                                            <td className="text-center">{comment.id}</td>
                                            <td>{comment.name}</td>
                                            <td>{comment.email}</td>
                                            <td>{comment.body}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.postCommentsBtnWrapper}>
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

export default PostCommentsModal;
