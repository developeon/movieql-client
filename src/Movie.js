import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, rating, summary, poster }) => (
    <Link to={`/details/${id}`}>
        <img src={poster} alt={title}/>
        <p>{title} / {rating}</p>
        <p>{summary}</p>
    </Link>
);

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
 };
  
export default Movie;