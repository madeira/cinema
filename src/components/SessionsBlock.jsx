import React from 'react';

import { MovieSession } from "./MovieSession";
import "./SessionsBlock.scss";

export const SessionsBlock = ({moviesOnDate}) => {
    console.log("moviesOnDate", moviesOnDate);
    return (
        moviesOnDate.map((elem) => (
            <MovieSession key={ elem._id } session={ elem } />
        ))
    )
}