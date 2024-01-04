import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IAlbum } from "@/app/types/albums";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./albums.module.css";
import PhotosButton from "./photos-button";

const AlbumsHome = ({ albums }: { albums: IAlbum[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Albums List", href: "/albums" },
    ];

    return (
        <section className={styles.albumsWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.albumsContainer}>
                <h1 className={styles.albumsHeader}>Albums List</h1>
                <table className={styles.albumsTable}>
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Album ID</th>
                            <th>User ID</th>
                            <th className="text-left">Album Title</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albums.map((album: IAlbum, i: number) => (
                            <tr key={album.id} className="text-center">
                                <td className="font-semibold">{i + 1}</td>
                                <td>{album.id}</td>
                                <td>{album.userId}</td>
                                <td className="text-left">
                                    <Link href={`/albums/${album.id}`} className={styles.albumsLink}>
                                        {album.title}
                                    </Link>
                                </td>
                                <td>
                                    <PhotosButton id={album.id} title={album.title} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AlbumsHome;
