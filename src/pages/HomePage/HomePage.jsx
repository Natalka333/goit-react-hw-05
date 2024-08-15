
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { FetchTrendMovieList } from '../../components/movie-Api';
import css from './HomePage.module.css'

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        const FetchTrend = async () => {
            const { results } = await FetchTrendMovieList();
            setTrendMovies(results);
        };
        FetchTrend();
    }, []);

    return (
        <div className={css.homeContainer}>
            <h1 className={css.homeHeading}>Trending Movies</h1>
            <MovieList trendMovies={trendMovies} />
        </div>
    );
};

export default HomePage;

// const HomePage = () => {
//     const [trendMovies, setTrendMovies] = useState([]);

//     useEffect(() => {
//         const FetchTrend = async () => {
//             const { results } = await FetchTrendMovieList();
//             setTrendMovies(results);


//         }
//         FetchTrend();
//     }, []);

//     return (
//         <div className={css.container}>
//             <h1 className={css.heading}>Trending Movies</h1>
//             <MovieList trendMovies={trendMovies} />
//         </div>
//     );
// };

// export default HomePage;