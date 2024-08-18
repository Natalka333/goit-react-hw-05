import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'



const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;
    };

    return (
        <>
            <header>
                <div className={css.navContainer}>
                    <nav className={css.nav}>
                        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                        <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
                    </nav>
                </div>

            </header>
        </>
    )
};


export default Navigation;

