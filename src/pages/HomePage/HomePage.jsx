import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import { FetchTrendMovieList } from '../../components/movie-Api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'


import HomeContainer from '../../components/HomeContainer/HomeContainer';
import TitlePage from '../../components/TitlePage/TitlePage';

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



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
        <HomeContainer>
            <TitlePage text="Trending Movies" />
            {trendMovies.length > 0 && (<MovieList trendMovies={trendMovies} />)}
            {loading && <Loader />}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
        </HomeContainer>
    );
};

export default HomePage;

