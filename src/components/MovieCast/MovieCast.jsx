import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCredits } from '../movie-Api';
import css from './MovieCast.module.css'

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const FetchCredits = async () => {
            const { cast } = await FetchMovieCredits(movieId);
            setCast(cast);
        }
        FetchCredits()
    }, [movieId]);

    return (
        <ul className={css.ul}>
            {cast.map(({ id, name, character, profile_path }) => (
                <li key={id} className={css.li}>
                    <p className={css.p}>{name}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}?language=en-US&include_image_language=en,null`} alt={name} className={css.img} />
                    <p className={css.p}> {character}</p>
                </li>
            ))
            }
        </ul >
    );
};

export default MovieCast;