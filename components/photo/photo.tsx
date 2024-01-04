import { IPhoto } from "@/app/types/photos";
import Image from "next/image";
import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./photo.module.css";

const PhotoHome = ({ photoData }: { photoData: IPhoto }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Photos List", href: "/photos" },
        { id: 3, label: "Photo", href: undefined },
    ];

    return (
        <section className={styles.photoWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[50%]" />
            <div className={styles.photoContainer}>
                <div className={styles.photoItem}>
                    <span className={styles.photoLabel}>Photo ID:</span>
                    <span className={styles.photoValue}>{photoData.id}</span>
                </div>
                <div className={styles.photoItem}>
                    <span className={styles.photoLabel}>Album ID:</span>
                    <span className={styles.photoValue}>{photoData.albumId}</span>
                </div>
                <div className={styles.photoItem}>
                    <span className={styles.photoLabel}>Title:</span>
                    <span className={styles.photoValue}>{photoData.title}</span>
                </div>
                <Image src={photoData.url} width={600} height={600} alt={photoData.title} className="rounded-box" />
            </div>
        </section>
    );
};

export default PhotoHome;
