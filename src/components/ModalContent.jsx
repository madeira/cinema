import React from 'react';
import axios from "axios";

import { SPACE_SHADOW_URL } from "../constants";
import { getSortedPlaces, getRowsArray, getRandomInt } from "../utils";
import { Plases, Form } from "./index";

import "./ModalContent.scss";


export class ModalContent extends React.Component {
    state = {
        isLoading: true,
        space: [],
        chosenPlace: null,
        showForm: false,
        user: null
    };

    componentDidMount() {
        axios.get(`${SPACE_SHADOW_URL}?session=${this.props.session._id}`)
        .then(({data}) =>  {
                this.setLoadingDone();
                this.getPlaceArray(data.space);
            })
            .catch((error) => {
                this.setLoadingDone()
                console.log(error);
            } )
        
    }

    getPlaceArray = (arr) => {
        const sortedByRow = getSortedPlaces(arr, "row");
        const rows = getRowsArray(sortedByRow);
        const rowsSortedByPlace = rows.map(item => {
            return getSortedPlaces(item, "place");
        });

        this.setState({space: rowsSortedByPlace.map((item => {
                const random = getRandomInt(2, 6);
                return item.map(elem => {
                    if (elem.place % random === 0 ) {
                        return {
                            ...elem,
                            booked: true
                        }
                    }
                    return elem;
                });
            }))
        });
    };

    setLoadingDone = () => this.setState({isLoading: false})

    handleChosePlace = (data) => {
         this.setState({chosenPlace: data})
    }

    handleOpenForm = () => {
        console.log("handleOpenForm")
        this.setState({showForm: true})
    }

    handleClicBuy = (data) => {
        this.setState({user:data})
    }

    render() {
        const { 
            isLoading,
            space, 
            chosenPlace, 
            showForm,
            user } = this.state;
        const { session, handleCloseModal } = this.props;

        console.log("session", session);

        return (
            <div className="Modal">
                <div className="Modal-Content">
                    {isLoading 
                        ? "loading..."
                        : <React.Fragment>
                            <h2 className="Modal-Heading">{session.movies.title}</h2>
                            <div className="MovieSession-Info MovieSession-Info_inModal">
                                <span className="MovieSession-Room">{session.room}</span>
                                <span className="MovieSession-Date">{new Date(session.date).toLocaleTimeString().slice(0, -3)}</span>
                            </div>
                            {
                                user
                                    ? <div className="CongratsText">{user.name}, спасибо за покупку!</div>
                                    : <React.Fragment>
                                        <Plases space={space} handleChosePlace={this.handleChosePlace}/>
                                        {
                                            chosenPlace && <div className="Modal-Footer">
                                                <p><strong>Выбрано {chosenPlace.row} место {chosenPlace.place}</strong></p>
                                                {
                                                    showForm 
                                                        ? <Form handleSubmitForm={this.handleClicBuy} />
                                                        : <button className="Movie-ByTiket" onClick={this.handleOpenForm}>Оформить билет</button>
                                                }
                                            </div>
                                        }
                                    
                                    </React.Fragment>
                            }
                            <span className="Modal-Close" onClick={handleCloseModal}>Close</span>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}