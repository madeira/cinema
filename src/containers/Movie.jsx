import React, {Component} from 'react';
import { connect } from 'react-redux';


class Movie extends Component {

    state = {
        movie: null,

    };

    componentDidMount() {
        const {match, movies} = this.props
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    }


    render() {
        console.log("this.state.movie", this.state.movie);
        return (
            <div>
                hello man
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie)