import { Link } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ trendMovies }) => {
    return (
        <ul className={css.ul}>
            {trendMovies.map(({ id, title }) => (
                <li key={id} className={css.li}>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;







