import styles from "../../styles/Details.module.css"


export default function Post({ data }) {
  console.log(data);
  return (
    <div className={styles.flexContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.tagline}>{data.tagline}</p>
        <p className={styles.overview}>{data.overview}</p>
        <p className={styles.releaseDate}>Released on {data.release_date}</p>

        <p>
          The production companies are{" "} <em>{data.production_companies.map((comapany) => comapany.name + ", ")}</em>
          
        </p>
        <p>Budget: {data.budget}</p>
        <p>Revenue: {data.revenue}</p>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c4ff031e09872cecb3464d0d28c1ff43&language=en-US&page=1"
  );
  const data = await res.json();

  const paths = data.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const api_key = "c4ff031e09872cecb3464d0d28c1ff43";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}&language=en-US`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}



/*
adult: false
backdrop_path: "/hw7foD5in5YCs7qY3Pap9pdc1Vc.jpg"
belongs_to_collection: null
budget: 74000000
genres: (3) [{…}, {…}, {…}]
homepage: "https://www.thelostcity.movie/"
id: 752623
imdb_id: "tt13320622"
original_language: "en"
original_title: "The Lost City"
overview: "Follows a reclusive romance novelist who was sure nothing could be worse than getting stuck on a book tour with her cover model, until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions."
popularity: 361.017
poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
production_companies: (4) [{…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2022-03-24"
revenue: 148000000
runtime: 112
spoken_languages: [{…}]
status: "Released"
tagline: "The adventure is real. The heroes are not."
title: "The Lost City"
video: false
vote_average: 6.9
vote_count: 282



*/
