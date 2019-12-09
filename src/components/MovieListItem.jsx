import React from 'react';
import { Link } from 'react-router-dom';

import "./MovieListItem.scss";


export const MovieListItem = ({ movie }) => {
    return (
        <Link className="MovieListItem" to={`movie/${movie._id}`}>
            <div className="MovieListItem-ImgHolder">
                <img className="MovieListItem-Img" src={movie.poster} alt="{movie.title}"/>
            </div>
            <span className="MovieListItem-Title">
                {movie.title}
            </span>
        </Link>
    );
}
