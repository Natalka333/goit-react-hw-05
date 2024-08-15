import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import { FetchSearchMovies } from '../../components/movie-Api';

import MovieList from '../../components/MovieList/MovieList';

import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            const fetchMovies = async () => {
                const data = await FetchSearchMovies(query);
                setMovies(data.results);
            };
            fetchMovies();
        }
    }, [query]);

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchParams({ query });
        const data = await FetchSearchMovies(query);
        setMovies(data.results);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={handleSearch} className={css.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className={css.input}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>
            <MovieList trendMovies={movies} />
        </div>
    );
};

export default MoviesPage;

