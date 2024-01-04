"use client";

import { useEffect, useState } from "react";
import { IAlbum } from "@/app/types/albums";
import cx from "classnames";
import LoadingContent from "../loading-content";
import styles from "./user-albums.module.css";

interface Props {
    id: number;
    name: string;
    className: string;
    closeModal: () => void;
}

const UserAlbumsModal = (props: Props) => {
    const { id, name, className, closeModal } = props;

    const [albums, setAlbums] = useState<IAlbum[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserAlbums = async () => {
            const res = await fetch(`/api/user-albums?id=${id}`);
            const resp: IAlbum[] = await res.json();
            setAlbums(resp);
            setLoading(false);
        };

        fetchUserAlbums();
    }, [id]);

    return (
        <dialog id={id.toString()} className={cx(styles.userAlbumsDialog, className)}>
            <div className={styles.userAlbumsModal}>
                <h3 className={styles.userAlbumsTitle}>User ID: {id}</h3>
                <p className={styles.userAlbumsSubTitle}>Name: {name}</p>
                {loading ? (
                    <LoadingContent />
                ) : (
                    <div className={styles.userAlbumsModalAction}>
                        <form method="dialog" className="w-full">
                            <table className={styles.userAlbumsTable}>
                                <thead>
                                    <tr>
                                        <th className="text-center">Album ID</th>
                                        <th className="text-left">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {albums?.map((album: IAlbum) => (
                                        <tr key={album.id}>
                                            <td className="text-center">{album.id}</td>
                                            <td>{album.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.userAlbumsBtnWrapper}>
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

export default UserAlbumsModal;
