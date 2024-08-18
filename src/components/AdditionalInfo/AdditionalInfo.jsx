import { Link, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css'; // Подключаем стили

const AdditionalInfo = () => {
    return (
        <div>
            <div className={css.detailsAdditionalInfo}>
                <p className={css.detailsParagraph}>Additional information</p>
                <Link to="cast" className={css.detailsLink}>Cast</Link>
                <Link to="reviews" className={css.detailsLink}>Reviews</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default AdditionalInfo;