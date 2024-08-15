import { Link } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ trendMovies }) => {
    return (
        <ul className={css.listContainer}>
            {trendMovies.map(({ id, title }) => (
                <li key={id} className={css.listItem}>
                    <Link to={`/movies/${id}`} className={css.listLink}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;







