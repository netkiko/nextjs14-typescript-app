import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IPost } from "@/app/types/posts";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import CommentsButton from "./comments-button";
import Link from "next/link";
import styles from "./posts.module.css";

const PostsHome = ({ posts }: { posts: IPost[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Posts List", href: "/posts" },
    ];

    return (
        <section className={styles.postsWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.postsContainer}>
                <h1 className={styles.postsHeader}>Posts List</h1>
                <table className={styles.postsTable}>
                    <thead>
                        <tr className="text-left">
                            <th>No.</th>
                            <th>Posted By</th>
                            <th>Post Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th className="text-center">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post: IPost, i: number) => (
                            <tr key={post.id}>
                                <td className="text-center font-semibold">{i + 1}</td>
                                <td className="text-center">{post.userId}</td>
                                <td className="text-center">{post.id}</td>
                                <td>
                                    <Link href={`/posts/${post.id}`} className={styles.postsLink}>
                                        {post.title}
                                    </Link>
                                </td>
                                <td>{post.body}</td>
                                <td>
                                    <CommentsButton id={post.id} title={post.title} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PostsHome;
