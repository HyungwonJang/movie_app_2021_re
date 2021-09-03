import React from 'react'
import PropTypes from 'prop-types'

function Movie({id, year, title, poster, summary, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li className="genres_genre" key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    )
}

PropTypes.movie = {
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;