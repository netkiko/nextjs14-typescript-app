import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import { IUser } from "@/app/types/users";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./user.module.css";

const UserHome = ({ userData }: { userData: IUser }) => {
    const breadcrumbs: IBreadcrumbs[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Users List", href: "/users" },
        { id: 3, label: "User", href: undefined },
    ];

    return (
        <section className={styles.userWrapper}>
            <Breadcrumbs breadcrumbs={breadcrumbs} className="w-[65%]" />
            <form className={styles.userForm}>
                <div className={styles.userItem}>
                    <span className={styles.userLabel}>User ID:</span>
                    <span className={styles.userId}>{userData.id}</span>
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="name" className={styles.userLabel}>
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        disabled
                        className={styles.userInput}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="username" className={styles.userLabel}>
                        User Name:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userData.username}
                        disabled
                        className={styles.userInput}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="email" className={styles.userLabel}>
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userData.email}
                        disabled
                        className={styles.userInput}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="address" className={styles.userLabel}>
                        Complete Address:
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={`${userData.address.suite}, ${userData.address.street}, ${userData.address.city}, ${userData.address.zipcode}`}
                        rows={4}
                        disabled
                        className={styles.userTextarea}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="phone" className={styles.userLabel}>
                        Phone Number:
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        disabled
                        className={styles.userInput}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="website" className={styles.userLabel}>
                        Website:
                    </label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={userData.website}
                        disabled
                        className={styles.userInput}
                    />
                </div>
                <div className={styles.userItem}>
                    <label htmlFor="company" className={styles.userLabel}>
                        Company:
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={userData.company.name}
                        disabled
                        className={styles.userInput}
                    />
                </div>
            </form>
        </section>
    );
};

export default UserHome;
