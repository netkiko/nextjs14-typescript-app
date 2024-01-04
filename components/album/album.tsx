import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IAlbum } from "@/app/types/albums";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./album.module.css";

const AlbumHome = ({ albumData }: { albumData: Required<IAlbum> }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Albums List", href: "/albums" },
        { id: 3, label: "Album", href: undefined },
    ];

    return (
        <section className={styles.albumWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[60%]" />
            <form className={styles.albumForm}>
                <div className={styles.albumItem}>
                    <span className={styles.albumLabel}>Album ID:</span>
                    <span className={styles.albumValue}>{albumData.id}</span>
                </div>
                <div className={styles.albumItem}>
                    <label htmlFor="postId" className={styles.albumLabel}>
                        User ID:
                    </label>
                    <input
                        type="text"
                        id="postId"
                        name="postId"
                        value={albumData.userId}
                        disabled
                        className={styles.albumInput}
                    />
                </div>
                <div className={styles.albumItem}>
                    <label htmlFor="title" className={styles.albumLabel}>
                        Album Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={albumData.title}
                        disabled
                        className={styles.albumInput}
                    />
                </div>
            </form>
        </section>
    );
};

export default AlbumHome;
