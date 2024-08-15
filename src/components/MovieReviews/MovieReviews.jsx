import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../movie-Api';
import css from './MovieReviews.module.css'

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const FetchReviews = async () => {
            const data = await FetchMovieReviews(movieId);
            setReviews(data.results);
        }
        FetchReviews()
    }, [movieId]);



    return (
        <ul className={css.ul}>
            {reviews.map(({ id, author, content }) => (
                <li key={id} className={css.li}>
                    <p className={css.p}>{author}: {content}</p>
                </li>
            ))}
        </ul>
    );
};

export default MovieReviews;