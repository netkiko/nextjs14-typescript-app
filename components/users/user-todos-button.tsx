"use client";

import { useState } from "react";
import UserTodosModal from "../user-todos";

interface Props {
    id: number;
    name: string;
}

const UserTodosButton = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleCommentsClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className="btn btn-sm btn-outline" onClick={handleCommentsClick}>
                Todos
            </button>
            {showModal && <UserTodosModal id={props.id} name={props.name} className="" closeModal={closeModal} />}
        </div>
    );
};

export default UserTodosButton;
