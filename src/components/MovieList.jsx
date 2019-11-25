import React from 'react';
import {Link} from 'react-router-dom';


export const MovieList = ({movie}) => {
    console.log(movie.title);
    return (
        <Link to={`movie/${movie._id}`}>
            <div className="moviesList">
                {movie.title}
            </div>
            <img src={movie.poster} alt="{movie.title}"/>
        </Link>
    );
}
