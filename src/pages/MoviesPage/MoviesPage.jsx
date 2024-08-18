import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';

import { FetchSearchMovies } from '../../components/movie-Api';

import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

import css from './MoviesPage.module.css'
import TitlePage from '../../components/TitlePage/TitlePage';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if (!query) {
            return
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await FetchSearchMovies(query);
                if (!query.length) {
                    return setIsEmpty(true);
                }
                setMovies(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }

        };
        fetchMovies();

    }, [query]);

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchParams({ query });
        const data = await FetchSearchMovies(query);
        if (!query.trim()) {
            return toast.error("Please enter search term!");
        }
        setMovies(data.results);
        setIsEmpty(false);
        setError(null);
        setQuery('')
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <TitlePage text="Search Movies" />
            {/* <form onSubmit={handleSearch} className={css.moviesForm}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    autoFocus
                    required
                    className={css.moviesInput}
                />
                <button type="submit" className={css.moviesButton}>Search</button>
            </form> */}
            <MovieList trendMovies={movies} />
            {loading && <Loader />}
            {/* {!query.length && (<ErrorMessage>Sorry.There are no movies...😒</ErrorMessage>)} */}
            {/* {!loading && !query.length && (<ErrorMessage>Let`s begin search!</ErrorMessage >)} */}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default MoviesPage;



