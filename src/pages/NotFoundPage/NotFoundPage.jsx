import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    const [seconds, setSeconds] = useState(5); // начальное значение таймера
    const navigate = useNavigate();

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            navigate('/'); // перенаправление на главную страницу
        }
    }, [seconds, navigate]);

    return (
        <div className={css.container}>
            <div className={css.message}>
                <span className={css.emoji}>😢</span>
                <h1 className={css.heading}> 404 NOT FOUND</h1>
            </div>
            <p className={css.timer}>You will be redirected to the homepage in {seconds} second{seconds !== 1 ? 's' : ''}...</p>

        </div>
    );
};

export default NotFoundPage;