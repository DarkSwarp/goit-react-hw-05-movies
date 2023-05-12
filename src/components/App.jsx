import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';
import css from './App.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
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

const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home />
              </main>
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
