"use client";

import { IPhoto } from "@/app/types/photos";
import { useEffect, useState } from "react";
import cx from "classnames";
import LoadingContent from "../loading-content";
import styles from "./album-photos.module.css";
import Image from "next/image";

interface Props {
    id: number;
    title: string;
    className: string;
    closeModal: () => void;
}

const AlbumPhotosModal = (props: Props) => {
    const { id, title, className, closeModal } = props;

    const [photos, setPhotos] = useState<IPhoto[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAlbumPhotos = async () => {
            const res = await fetch(`/api/album-photos?id=${id}`);
            const resp: IPhoto[] = await res.json();
            setPhotos(resp);
            setLoading(false);
        };

        fetchAlbumPhotos();
    }, [id]);

    return (
        <dialog id={id.toString()} className={cx(styles.albumPhotosDialog, className)}>
            <div className={styles.albumPhotosModal}>
                <h3 className={styles.albumPhotosTitle}>Album ID: {id}</h3>
                <p className={styles.albumPhotosSubTitle}>Title: {title}</p>
                {loading ? (
                    <LoadingContent />
                ) : (
                    <div className={styles.albumPhotosModalAction}>
                        <form method="dialog" className="w-full">
                            <table className={styles.albumPhotosTable}>
                                <thead>
                                    <tr className="text-center">
                                        <th>Photo ID</th>
                                        <th className="text-left">Title</th>
                                        <th>Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {photos?.map((photo: IPhoto, i: number) => (
                                        <tr key={photo.id}>
                                            <td className="text-center">{photo.id}</td>
                                            <td>{photo.title}</td>
                                            <td className={styles.albumPhotosThumbnail}>
                                                <Image
                                                    className="rounded-box"
                                                    src={photo.thumbnailUrl}
                                                    width={150}
                                                    height={150}
                                                    alt={photo.title}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.albumPhotosBtnWrapper}>
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

export default AlbumPhotosModal;
