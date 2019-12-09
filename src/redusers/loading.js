import { SET_MOVIES, IS_LOADING, LOADING_FAIL, SET_SESSIONS } from '../constants';

const InitialValues = {
    isLoading: false
};

export const loading = (state = InitialValues, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case SET_MOVIES:
        case SET_SESSIONS:
        case LOADING_FAIL:
            return {
                ...state,
                isLoading: false
            };
    
        default:
            return state;
    }
}