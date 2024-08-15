import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { FetchSearchMovies } from '../../components/movieList-api';
import { useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || ""); // Инициализация состояния на основе параметра в URL
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Выполняем поиск только если есть значение в query
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
        setSearchParams({ query }); // Обновляем параметр в URL
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

