import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


import './App.css'



const App = () => {


  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* {loading && <Loader />}
      {!loading && !trendMovies.length && (<ErrorMessage>Let`s begin search!</ErrorMessage>)} */}
      {/* {trendMovies.length > 0 && <MovieList trendMovies={trendMovies} />} */}
    </div >
  )

}
export default App


//     .container {
//     max - width: 960px;
//     margin: 0 auto;
//     padding: 0 16px;
// }
