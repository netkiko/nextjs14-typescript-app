"use client";

import { useState } from "react";
import UserAlbumsModal from "../user-albums";

interface Props {
    id: number;
    name: string;
}

const UserAlbumsButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleAlbumsClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className="btn btn-sm btn-outline" onClick={handleAlbumsClick}>
                Albums
            </button>
            {showModal && <UserAlbumsModal id={props.id} name={props.name} className="" closeModal={closeModal} />}
        </div>
    );
};

export default UserAlbumsButton;
