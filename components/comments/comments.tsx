import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IComment } from "@/app/types/comments";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./comments.module.css";

const CommentsHome = ({ comments }: { comments: IComment[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Comments List", href: "/comments" },
    ];

    return (
        <section className={styles.commentsWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.commentsContainer}>
                <h1 className={styles.commentsHeader}>Comments List</h1>
                <table className={styles.commentsTable}>
                    <thead>
                        <tr className="text-left">
                            <th className="text-center">No.</th>
                            <th>Post ID</th>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment: IComment, i: number) => (
                            <tr key={comment.id}>
                                <td className="text-center font-semibold">{i + 1}</td>
                                <td className="text-center">{comment.postId}</td>
                                <td className="text-center">{comment.id}</td>
                                <td>
                                    <Link href={`/comments/${comment.id}`} className={styles.commentsLink}>
                                        {comment.name}
                                    </Link>
                                </td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CommentsHome;
