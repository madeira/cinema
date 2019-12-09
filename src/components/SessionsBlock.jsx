import React from 'react';

export const SessionsBlock = ({moviesOnDate}) => {
    return (
        moviesOnDate.map((elem) => (
            <div key={ elem._id }>
                <div>Movie {elem._id }</div>
            </div>
        ))
    )
}