import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IUsers } from "@/app/types/users";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./users.module.css";
import UserAlbumsButton from "./user-albums-button";
import UserTodosButton from "./user-todos-button";
import UserPostsButton from "./user-posts-button";

const UsersHome = ({ users }: { users: IUsers[] }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Users List", href: "/posts" },
    ];

    return (
        <section className={styles.usersWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[96%]" />
            <div className={styles.usersContainer}>
                <h1 className={styles.usersHeader}>Users List</h1>
                <table className={styles.usersTable}>
                    <thead>
                        <tr className="text-left">
                            <th className="text-center">No.</th>
                            <th>User Name</th>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Address</th>
                            <th className="text-center">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: IUsers, i: number) => (
                            <tr key={user.id}>
                                <td className={styles.usersTableCol1}>{i + 1}</td>
                                <td>
                                    <Link href={`/users/${user.id}`} className={styles.usersLink}>
                                        {user.username}
                                    </Link>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
                                <td className={styles.usersViewGroup}>
                                    <UserAlbumsButton id={user.id} name={user.name} />
                                    <UserTodosButton id={user.id} name={user.name} />
                                    <UserPostsButton id={user.id} name={user.name} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UsersHome;
