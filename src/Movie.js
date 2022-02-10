import propTypes from "prop-types";
import React from "react";
import "./Movie.css";

function Movie({title,year,summary,poster}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className ="movie__data">
                <h3 className = "movie__title">{title}</h3>
                <h5 className = "movie__year">{year}</h5>
                <p className = "movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.prototype = { 
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;