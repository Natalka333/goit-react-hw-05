import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../movie-Api';
import css from './MovieReviews.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const FetchReviews = async () => {
            const data = await FetchMovieReviews(movieId);
            setReviews(data.results);
        };
        FetchReviews();
    }, [movieId]);

    return (
        <>
            {reviews !== null && (<ul className={css.reviewsList}>
                {reviews.map(({ id, author, content }) => (
                    <li key={id} className={css.reviewItem}>
                        <p className={css.reviewAuthor}>{author}: {content}</p>
                    </li>
                ))}
            </ul>)}
            {!reviews.length && (<ErrorMessage>We do not have any reviews for this movie.</ErrorMessage>)}
        </>

    );
};

export default MovieReviews;