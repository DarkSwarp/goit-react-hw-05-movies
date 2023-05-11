import { Link } from "react-router-dom";

export default function MoviesList({movies}) {
    // console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}