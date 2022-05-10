import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Showcase</title>
        <meta name="description" content="top rated movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Movie site created with{" "}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This site showcases top movies of all time and the most poupular
          movies this week.
        </p>

        <div className={styles.grid}>
          <Link href="/top-movies">
            <a className={styles.card}>
              <h2>All Time &rarr;</h2>
              <p>Find the highest rated movies of all time</p>
            </a>
          </Link>

          <Link href="/top-movies-week">
            <a className={styles.card}>
              <h2>Popular Now &rarr;</h2>
              <p>Find the most popular movies this week</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
