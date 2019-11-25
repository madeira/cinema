import axios from 'axios';

import { MOVIES_URL, SET_MOVIES, IS_LOADING, FAIL_LOADING } from '../constants';


export const isLoading = () => ({
    type: IS_LOADING,
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
});

export const faleLoading = () => ({
    type: FAIL_LOADING
});

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(MOVIES_URL)
            .then(({data}) => {
                dispatch(setMovies(data.movie));
            })
            .catch((error) => {
                dispatch(faleLoading());
                console.error(error)
            });
    }
}
