import Link from "next/link";
import styles from "../styles/Movies.module.css";

export default function Movies({ data }) {
  const movieList = data.results.map((movie) => {
    return (
      <div key={movie.id} className={styles.flexContainer}>
        <div className={styles.content}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <Link href={`movies/${movie.id}`}>
            <a className={styles.link}>More Details</a>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
          />
        </div>
      </div>
    );
  });

  console.log(data);
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Top Rated Movies</h1>
        <p className={styles.pagesubtitle}>
          <small>This a statically generated page</small>
        </p>

        <div>{movieList}</div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c4ff031e09872cecb3464d0d28c1ff43&language=en-US&page=1"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
