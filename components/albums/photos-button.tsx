"use client";

import { useState } from "react";
import AlbumPhotosModal from "../album-photos/album-photos";

interface Props {
    id: number;
    title: string;
}

const PhotosButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleCommentsClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className="btn btn-sm btn-outline" onClick={handleCommentsClick}>
                Photos
            </button>
            {showModal && <AlbumPhotosModal id={props.id} title={props.title} className="" closeModal={closeModal} />}
        </div>
    );
};

export default PhotosButton;
