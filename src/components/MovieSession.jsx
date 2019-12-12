import React, {useState} from "react";

import { Link } from 'react-router-dom';
import { ModalByTicket } from "../components";

export const MovieSession = ({session}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }
    
    return (
        <React.Fragment>
            <div className="MovieSession">
                <div className="MovieInfo">
                    <div className="Movie-ImgHolder">
                        <Link to={`movie/${session.movies._id}`} className="Movie-ImgHolder">
                            <img className="Movie-Img" src={ session.movies.poster } alt="poster"/>
                        </Link>
                        <button onClick={toggleShowModal} className="Movie-ByTiket">Купить билет</button>
                    </div>
                </div>
                <div className="MovieSession-Holder">
                    <strong className="MovieSession-Title">{session.movies.title}</strong>
                    <div className="MovieSession-Info">
                        <span className="MovieSession-Room">{session.room}</span>
                        <span className="MovieSession-Date">{new Date(session.date).toLocaleTimeString().slice(0, -3)}</span>
                    </div>
                </div>
            </div>
            {showModal && <ModalByTicket session={session} handleCloseModal={toggleShowModal}/>}
        </React.Fragment>
    );
};