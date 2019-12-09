import React from "react";

export const Poster = ({ posterLink }) => (
    <div className="Movie-ImgHolder">
        <img className="Movie-Img" src={ posterLink } alt="poster"/>
        <button className="Movie-ByTiket">Купить билет</button>
    </div>
)