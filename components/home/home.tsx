import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
    return (
        <section className={styles.homeWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className="max-w-lg">
                        <h1 className={styles.heroTitle}>Next.JS + TypeScript</h1>
                        <p className="mb-5">
                            Learn TypeScript and Next.js 14 by implementing a simple post, comment, album, photo, todo
                            and user web application.
                        </p>
                        <h1 className={styles.heroSubTitle}>Let&apos;s get started!</h1>
                        <Link href="/posts" className={styles.heroAction}>
                            Posts
                        </Link>
                        &nbsp;
                        <Link href="/comments" className={styles.heroAction}>
                            Comments
                        </Link>
                        &nbsp;
                        <Link href="/albums" className={styles.heroAction}>
                            Albums
                        </Link>
                        &nbsp;
                        <Link href="/photos" className={styles.heroAction}>
                            Photos
                        </Link>
                        &nbsp;
                        <Link href="/todos" className={styles.heroAction}>
                            Todos
                        </Link>
                        &nbsp;
                        <Link href="/users" className={styles.heroAction}>
                            Users
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
