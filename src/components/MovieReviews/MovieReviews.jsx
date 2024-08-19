import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../movie-Api';
import css from './MovieReviews.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const FetchReviews = async () => {
            try {
                const data = await FetchMovieReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }


        };
        FetchReviews();
    }, [movieId]);


    return (
        <>
            {loading && <Loader />}
            {reviews !== null && (<ul className={css.reviewsList}>
                {reviews.map(({ id, author, content }) => (
                    <li key={id} className={css.reviewItem}>
                        <p className={css.reviewAuthor}>{author}: {content}</p>
                    </li>
                ))}
            </ul>)}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
        </>

    );
};

export default MovieReviews;