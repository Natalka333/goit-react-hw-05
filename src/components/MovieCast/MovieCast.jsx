import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCredits } from '../movie-Api';
import css from './MovieCast.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const FetchCredits = async () => {
            try {
                const { cast } = await FetchMovieCredits(movieId);
                setCast(cast);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }

        };
        FetchCredits();
    }, [movieId]);


    return (
        <>
            {loading && <Loader />}
            {error && <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>}
            {cast !== null && (<ul className={css.castList}>
                {cast.map(({ id, name, character, profile_path }) => (
                    <li key={id} className={css.castItem}>
                        <p className={css.castName}>{name}</p>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}?language=en-US&include_image_language=en,null`}
                            alt={name}
                            className={css.castImg}
                        />
                        <p className={css.castCharacter}> {character}</p>
                    </li>
                ))}
            </ul>)}


        </>

    );
};

export default MovieCast;

