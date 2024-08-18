import css from './HomeContainer.module.css'

const HomeContainer = ({ children }) => {
    return <div className={css.homeContainer}>{children}</div>

}

export default HomeContainer

