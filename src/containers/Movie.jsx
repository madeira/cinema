import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Movie.scss';


class Movie extends Component {

    state = {
        movie: {},
    };

    componentDidMount() {
        const { match, movies } = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    }

    getItems (itemType, classList){
        let items;
        if (itemType) {
            items = itemType.map ((item, i) => {
                if (item !== '') {
                    return <li className={classList} key={i}>{item}</li>
                }
            });
        }
        return items;
    }

    render() {
        const {movie} = this.state;

        return (
            <section className="Movie">
                <div className="Movie-ImgHolder">
                    <img className="Movie-Img" src={ movie.poster } alt=""/>
                    <button className="Movie-ByTiket">Купить билет</button>
                </div>
                <div className="Movie-Description">
                    <h1 className="Movie-Title">
                        { movie.title } 
                    </h1>
                    <ul className="GenreList">
                        { this.getItems(movie.genre, 'GenreList-Item') }
                    </ul>
                    <ul className="CountryList">
                        { this.getItems(movie.country, 'CountryList-Item') }
                    </ul>
                    <ul className="ActorList">
                        { this.getItems(movie.actors, 'ActorList-Item') }
                    </ul>
                    <span className="Movie-Age">{ movie.age + ' +' || 'без ограничений' }</span>
                    <br/>
                    <span className="Movie-Language">{ movie.language }</span>
                    <p>{ movie.description }</p>
                    <iframe className="Movie-Video" title={ movie.title } src={ movie.trailer } frameBorder="0"></iframe>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie)