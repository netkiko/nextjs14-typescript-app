import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IPhoto } from "@/app/types/photos";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./photos.module.css";

const PhotosHome = ({ photos }: { photos: IPhoto[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Photos List", href: "/photos" },
    ];

    return (
        <section className={styles.photosWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.photosContainer}>
                <h1 className={styles.photosHeader}>Photos List</h1>
                <table className={styles.photosTable}>
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Album ID</th>
                            <th>Photo ID</th>
                            <th>Thumbnail</th>
                            <th className="text-left">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {photos.map((photo: IPhoto, i: number) => (
                            <tr key={photo.id} className="text-center">
                                <td className="font-semibold">{i + 1}</td>
                                <td>{photo.albumId}</td>
                                <td>{photo.id}</td>
                                <td className={styles.photosImage}>
                                    <Link href={`/photos/${photo.id}`} className={styles.photosLink}>
                                        <Image
                                            src={photo.thumbnailUrl}
                                            width={150}
                                            height={150}
                                            alt={photo.title}
                                            className="rounded-box"
                                        />
                                    </Link>
                                </td>
                                <td className="text-left">
                                    <Link href={`/photos/${photo.id}`} className={styles.photosLink}>
                                        {photo.title}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PhotosHome;
