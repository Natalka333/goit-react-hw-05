import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCredits } from '../movie-Api';
import css from './MovieCast.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const FetchCredits = async () => {
            const { cast } = await FetchMovieCredits(movieId);
            setCast(cast);
        };
        FetchCredits();
    }, [movieId]);

    return (
        <>
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
            {!cast.length && (<ErrorMessage>We do not have any images for this movie.</ErrorMessage>)}

        </>

    );
};

export default MovieCast;

