import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import css from './MoviesList.module.css';

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  transition: color 0.2s ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: orange;
    text-decoration: underline;
  }
`;

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} >
            <StyledNavLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </StyledNavLink>
          </li>
        );
      })}
    </ul>
  );
}
