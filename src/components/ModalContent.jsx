import React from 'react';
import axios from "axios";

import { SPACE_SHADOW_URL } from "../constants";
import { getSortedPlaces, getRowsArray } from "../utils";

import "./ModalContent.scss";


export class ModalContent extends React.Component {
    state = {
        isLoading: true,

    };

    componentDidMount() {
        axios.get(`${SPACE_SHADOW_URL}?session=${this.props.sessionId}`)
            .then(({data}) =>  {
                this.setLoadingDone();
                console.log("data.space",data.space)
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

        console.log("rowsSortedByPlace", rowsSortedByPlace)
    }

    setLoadingDone = () => this.setState({isLoading: false})

    render() {
        return (
            <div className="Modal">
                <div className="Modal-Content">
                    <h2>Modal-Content</h2>
                </div>
            </div>
        )
    }
}