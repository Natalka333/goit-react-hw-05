import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ trendMovies }) => {
    const location = useLocation();
    // console.log(location)
    return (
        <>

            <ul className={css.listContainer}>
                {trendMovies.map(({ id, title }) => (
                    <li key={id} className={css.listItem}>
                        <Link to={`/movies/${id}`} state={location} className={css.listLink}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>

    );
};

export default MovieList;







