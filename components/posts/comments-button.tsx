"use client";

import { useState } from "react";
import PostCommentsModal from "../post-comments";

interface Props {
    id: number;
    title: string;
}

const CommentsButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleCommentsClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className="btn btn-sm btn-outline" onClick={handleCommentsClick}>
                Comments
            </button>
            {showModal && <PostCommentsModal id={props.id} title={props.title} className="" closeModal={closeModal} />}
        </div>
    );
};

export default CommentsButton;
