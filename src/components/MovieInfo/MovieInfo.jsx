import css from './MovieInfo.module.css'

const MovieInfo = ({ poster_path, title, vote_average, overview, genres }) => {
    return (
        <div className={css.detailsTopSection}>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className={css.detailsImg}
            />
            <div className={css.detailsTextContainer}>
                <h2 className={css.detailsHeading}>{title}</h2>
                <p className={css.detailsParagraph}>User Score: {vote_average * 10}%</p>
                <h3 className={css.detailsSubheading}>Overview</h3>
                <p className={css.detailsParagraph}>{overview}</p>
                <h3 className={css.detailsSubheading}>Genres</h3>
                {genres && (
                    <ul className={css.detailsGenreList}>
                        {genres.map(genre => (
                            <li key={genre.id} className={css.detailsGenreItem}>
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MovieInfo;












