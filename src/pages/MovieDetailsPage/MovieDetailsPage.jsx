import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { FetchMovieDetails } from '../../components/movie-Api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


import css from './MovieDetailsPage.module.css';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backHome = useRef(location?.state ?? '/');

    useEffect(() => {
        setLoading(true);
        setError(null);

        const FetchDetails = async () => {
            try {
                const data = await FetchMovieDetails(movieId);
                setMovieDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        FetchDetails();
    }, [movieId]);

    return (
        <div className={css.detailsContainer}>
            <GoBackBtn path={backHome.current}>🚶‍♀️Go back</GoBackBtn>
            {movieDetails && (
                <MovieInfo {...movieDetails} />)}
            <AdditionalInfo />

            {loading && <Loader />}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
        </div>
    );
};

export default MovieDetailsPage;








