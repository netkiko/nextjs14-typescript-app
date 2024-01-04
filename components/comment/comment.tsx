import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IComment } from "@/app/types/comments";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./comment.module.css";

const CommentHome = ({ commentData }: { commentData: Required<IComment> }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Comments List", href: "/comments" },
        { id: 3, label: "Comment", href: undefined },
    ];

    return (
        <section className={styles.commentWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[60%]" />
            <form className={styles.commentForm}>
                <div className={styles.commentItem}>
                    <span className={styles.commentLabel}>Comment ID:</span>
                    <span className={styles.commentValue}>{commentData.id}</span>
                </div>
                <div className={styles.commentItem}>
                    <label htmlFor="postId" className={styles.commentLabel}>
                        Post ID:
                    </label>
                    <input
                        type="text"
                        id="postId"
                        name="postId"
                        value={commentData.postId}
                        disabled
                        className={styles.commentInput}
                    />
                </div>
                <div className={styles.commentItem}>
                    <label htmlFor="name" className={styles.commentLabel}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={commentData.name}
                        disabled
                        className={styles.commentInput}
                    />
                </div>
                <div className={styles.commentItem}>
                    <label htmlFor="email" className={styles.commentLabel}>
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={commentData.email}
                        disabled
                        className={styles.commentInput}
                    />
                </div>
                <div className={styles.commentItem}>
                    <label htmlFor="body" className={styles.commentLabel}>
                        Body:
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        value={commentData.body}
                        rows={4}
                        disabled
                        className={styles.commentTextarea}
                    />
                </div>
            </form>
        </section>
    );
};

export default CommentHome;
