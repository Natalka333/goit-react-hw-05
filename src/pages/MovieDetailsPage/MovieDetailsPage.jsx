import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieDetails } from '../../components/movie-Api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const backHome = location.state ?? '/';

    useEffect(() => {
        const FetchDetails = async () => {
            const data = await FetchMovieDetails(movieId);
            setMovieDetails(data);
        };
        FetchDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className={css.detailsContainer}>
            <Link to={backHome} className={css.backHome}>Go back</Link>
            {movieDetails !== null && (
                <div className={css.detailsTopSection}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        className={css.detailsImg}
                    />
                    <div className={css.detailsTextContainer}>
                        <h2 className={css.detailsHeading}>{movieDetails.title}</h2>
                        <p className={css.detailsParagraph}>User Score: {movieDetails.vote_average * 10}%</p>
                        <h3 className={css.detailsSubheading}>Overview</h3>
                        <p className={css.detailsParagraph}>{movieDetails.overview}</p>
                        <h3 className={css.detailsSubheading}>Genres</h3>
                        {movieDetails.genres && (
                            <ul className={css.detailsGenreList}>
                                {movieDetails.genres.map(genre => (
                                    <li key={genre.id} className={css.detailsGenreItem}>
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            <div className={css.detailsAdditionalInfo}>
                <p className={css.detailsParagraph}>Additional information</p>
                <Link to="cast" className={css.detailsLink}>Cast</Link>
                <Link to="reviews" className={css.detailsLink}>Reviews</Link>
            </div>

            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;





// const MovieDetailsPage = () => {
//     const { movieId } = useParams();
//     const [movieDetails, setMovieDetails] = useState(null);
//     const location = useLocation();
//     const backHome = location.state ?? '/';

//     useEffect(() => {
//         const FetchDetails = async () => {
//             const data = await FetchMovieDetails(movieId);
//             setMovieDetails(data);
//         }
//         FetchDetails();
//     }, [movieId]);

//     if (!movieDetails) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className={css.container}>
//             <Link to={backHome}>Go back</Link>
//             {movieDetails !== null && (
//                 <div className={css.top_section}>
//                     <img
//                         src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
//                         alt={movieDetails.title}
//                         className={css.img}
//                     />
//                     <div className={css.text_container}>
//                         <h2 className={css.h2}>{movieDetails.title}</h2>
//                         <p className={css.p}>User Score: {movieDetails.vote_average * 10}%</p>
//                         <h3 className={css.h3}>Overview</h3>
//                         <p className={css.p}>{movieDetails.overview}</p>
//                         <h3 className={css.h3}>Genres</h3>
//                         {movieDetails.genres && (
//                             <ul className={css.genre_list}>
//                                 {movieDetails.genres.map(genre => (
//                                     <li key={genre.id}>
//                                         {genre.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <div className={css.additional_info}>
//                 <p className={css.p}>Additional information</p>
//                 <Link to="cast">Cast</Link>
//                 <Link to="reviews">Reviews</Link>
//             </div>

//             <Outlet />
//         </div>
//     );
// };

// export default MovieDetailsPage;