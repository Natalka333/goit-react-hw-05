import css from './TitlePage.module.css'

const TitlePage = ({ text }) => {
    return (
        <>
            <h1 className={css.homeHeading}>{text}</h1>
        </>
    )
}

export default TitlePage
