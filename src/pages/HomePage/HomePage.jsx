import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import { FetchTrendMovieList } from '../../components/movie-Api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import css from './HomePage.module.css'

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        setLoading(true);
        setError(null);

        const FetchTrend = async () => {
            try {
                const { results } = await FetchTrendMovieList();
                setTrendMovies(results);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        FetchTrend();
    }, []);

    return (
        <div className={css.homeContainer}>
            <h1 className={css.homeHeading}>Trending Movies</h1>
            <MovieList trendMovies={trendMovies} />
            {loading && <Loader />}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
        </div>
    );
};

export default HomePage;

