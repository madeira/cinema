import React, { useState } from 'react';
import { connect } from 'react-redux';

import { MovieListItem, Filter } from '../components';

import "./MainPage.scss"


const MainPage = ({movies, genres, isLoading}) => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    if (isLoading){
        return "loading..."
    }
    
    return (
        <React.Fragment>
            <Filter 
                movies={movies} 
                genres={genres} 
                setFilteredMovies={setFilteredMovies}
            />
            <div className="MovieList">
                {filteredMovies.length 
                    ? filteredMovies.map(item => (<MovieListItem key={item._id} movie={item}/>)) 
                    : movies.map(item => (<MovieListItem key={item._id} movie={item}/>))
                }
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres,
    isLoading: state.loading.isLoading
});

export const MainPageContainer = connect(mapStateToProps)(MainPage)
