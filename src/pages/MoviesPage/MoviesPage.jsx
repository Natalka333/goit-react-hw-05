import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import { FetchSearchMovies } from '../../components/movie-Api';

import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import TitlePage from '../../components/TitlePage/TitlePage';
import SearchForm from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");


    useEffect(() => {
        if (!query) {
            return
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await FetchSearchMovies(query);
                setMovies(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }

        };
        fetchMovies();

    }, [query]);



    const handelSubmit = value => {
        setSearchParams({ query: value })
    }


    return (
        <div>
            <TitlePage text="Search Movies" />
            <SearchForm onSubmit={handelSubmit} />
            {movies.length > 0 && (<MovieList trendMovies={movies} />)}
            {loading && <Loader />}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
        </div>
    );
};

export default MoviesPage;



