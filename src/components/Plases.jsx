import React from 'react';

export const Plases = ({space, handleChosePlace}) => {
    return (
        <div className="Places">
            {space.map((item, i) => {
                return (
                    <div key={i} className="Places-Row">
                        <span className="Places-RowLegend">Ряд {i + 1}</span>
                        {
                            item.map((elem, n) => {
                                return (
                                    <div 
                                        key={`${i}-${n}`} 
                                        className={`place${elem.booked ? ' booked' : ''}`}
                                        onClick={ () => handleChosePlace(elem)}
                                    >
                                        <span>{elem.place}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
};