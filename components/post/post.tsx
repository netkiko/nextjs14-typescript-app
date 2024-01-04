import { IPost } from "@/app/types/posts";
import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./post.module.css";

const PostHome = ({ postData }: { postData: IPost }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Posts List", href: "/posts" },
        { id: 3, label: "Post", href: undefined },
    ];

    return (
        <section className={styles.postWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[60%]" />
            <form className={styles.postForm}>
                <div className={styles.postItem}>
                    <span className={styles.postLabel}>Post ID:</span>
                    <span className={styles.postValue}>{postData.id}</span>
                </div>
                <div className={styles.postItem}>
                    <label htmlFor="userId" className={styles.postLabel}>
                        User ID:
                    </label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        value={postData.userId}
                        disabled
                        className={styles.postInput}
                    />
                </div>
                <div className={styles.postItem}>
                    <label htmlFor="title" className={styles.postLabel}>
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={postData.title}
                        disabled
                        className={styles.postInput}
                    />
                </div>
                <div className={styles.postItem}>
                    <label htmlFor="body" className={styles.postLabel}>
                        Body:
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        value={postData.body}
                        rows={4}
                        disabled
                        className={styles.postTextarea}
                    />
                </div>
            </form>
        </section>
    );
};

export default PostHome;
