import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'



const Navigation = () => {

    const buildLinkClass = ({ isActive }) => {
        return isActive ? `${css.NavLink} ${css.active}` : css.NavLink;
    };

    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
            </nav>
        </div>

    )
}

export default Navigation

