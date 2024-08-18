import css from './NotPage.module.css'

const NotPage = ({ seconds }) => {
    return (
        <div className={css.container}>
            <div className={css.message}>
                <span className={css.emoji}>😢</span>
                <h1 className={css.heading}> 404 NOT FOUND</h1>
            </div>
            <p className={css.timer}>You will be redirected to the homepage in {seconds} second{seconds !== 1 ? 's' : ''}...</p>

        </div>
    )
}

export default NotPage
