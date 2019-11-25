import React from 'react';
import { connect } from 'react-redux';

import { MovieList } from '../components';


const MainPage = ({movies}) => (
    <div>
        {movies.map(item => (<MovieList key={item._id} movie={item}/>))}
    </div>
);

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage)
