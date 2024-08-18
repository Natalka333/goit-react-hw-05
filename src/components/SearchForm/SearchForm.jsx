import { useState } from "react"


const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');


    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    }




    return (
        <form onSubmit={handleSubmit} className={css.moviesForm}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                autoFocus
                required
                className={css.moviesInput}
            />
            <button type="submit" className={css.moviesButton}>Search</button>
        </form>
    )
}

export default SearchForm
