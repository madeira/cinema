import React from 'react';
import { connect } from "react-redux";

import { getSessions } from "../actions"
import { SessionsBlock } from '../components';
import { dateOptions } from "../constants"

import './Shedule.scss'


class Shedule extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    getSessions = () => {
        const { movies, sessions, rooms } = this.props;
        const sessionsArr = movies.length && sessions.length && rooms.length
            ? sessions.map(item => {
                return item.map(elem => ({
                    ...elem,
                    room: rooms.find(room => room._id === elem.room).name,
                    movies: movies.find(movie => movie._id === elem.movie)
                }));
            })
            : [];
        return sessionsArr.map(item => item.filter(elem => elem.movie));
    };

    render() {
        const { isLoading } = this.props;

        if (isLoading){
            return "loading..."
        }
        console.log(this.getSessions());
        return (
            <div className="Shedule">
                {
                    this.getSessions().map((item, i) => (
                        <div key={i}>
                            <h2>{ new Date(item[0].date).toLocaleDateString("ru", dateOptions)}</h2>
                            <SessionsBlock moviesOnDate={item} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
    rooms: state.data.rooms
})

const mapDispatchToProps = {
    getSessions
}

export const SheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Shedule)
