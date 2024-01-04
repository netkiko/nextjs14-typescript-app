import Link from "next/link";
import styles from "./nav-bar.module.css";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className={styles.navBarWrapper}>
            <Link href="/">
                <Image src="/assets/images/next-typescript.png" height={39.98} width={193.19} alt="App Logo" />
            </Link>
            <ul className={styles.navBarSubWrapper}>
                <li>
                    <Link href="/posts" className={styles.navBarLink}>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link href="/comments" className={styles.navBarLink}>
                        Comments
                    </Link>
                </li>
                <li>
                    <Link href="/albums" className={styles.navBarLink}>
                        Albums
                    </Link>
                </li>
                <li>
                    <Link href="/photos" className={styles.navBarLink}>
                        Photos
                    </Link>
                </li>
                <li>
                    <Link href="/todos" className={styles.navBarLink}>
                        Todos
                    </Link>
                </li>
                <li>
                    <Link href="/users" className={styles.navBarLink}>
                        Users
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
