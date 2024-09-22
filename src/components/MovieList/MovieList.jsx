import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ trendMovies }) => {
    // console.log(trendMovies);
    const location = useLocation();
    return (
        <>

            <ul className={css.listContainer}>
                {trendMovies.map(({ id, title, poster_path }) => (
                    <li key={id} className={css.listItem}>
                        <Link to={`/movies/${id}`} state={location} className={css.listLink}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}?language=en-US&include_image_language=en,null`}
                                alt={name}
                                className={css.listImg}
                            />
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>

    );
};

export default MovieList;







