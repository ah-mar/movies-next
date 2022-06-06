import styles from "../styles/Movies.module.css";

export default function Movies({ data }) {
  const movieList = data.results.map((movie) => {
    return (
      <div key={movie.id} className={styles.flexContainer}>
        <div className={styles.content}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
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
        <h1 className={styles.pageTitle}>Top Movies of this Week</h1>
        <p className={styles.pagesubtitle}>
          <small>This a server side generated page</small>
        </p>

        <div>{movieList}</div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const api = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

/* 
"https://api.themoviedb.org/3/trending/movie/week?api_key=c4ff031e09872cecb3464d0d28c1ff43"
adult: false
backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg"
genre_ids: (3) [14, 28, 12]
id: 453395
media_type: "movie"
original_language: "en"
original_title: "Doctor Strange in the Multiverse of Madness"
overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary."
popularity: 5846.845
poster_path: "/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
release_date: "2022-05-04"
title: "Doctor Strange in the Multiverse of Madness"
video: false
vote_average: 7.5
vote_count: 1048





*/
