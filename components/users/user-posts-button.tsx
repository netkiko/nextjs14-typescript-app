"use client";

import { useState } from "react";
import PostCommentsModal from "../post-comments";
import UserPostsModal from "../user-posts/user-posts";

interface Props {
    id: number;
    name: string;
}

const UserPostsButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleCommentsClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className="btn btn-sm btn-outline" onClick={handleCommentsClick}>
                Posts
            </button>
            {showModal && <UserPostsModal id={props.id} name={props.name} className="" closeModal={closeModal} />}
        </div>
    );
};

export default UserPostsButton;
