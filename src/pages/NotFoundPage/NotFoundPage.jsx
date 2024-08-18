import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotPage from '../../components/NotPage/NotPage';

const NotFoundPage = () => {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            navigate('/');
        }
    }, [seconds, navigate]);

    return (
        <NotPage seconds={seconds} />
    );
};

export default NotFoundPage;