import { SET_MOVIES, IS_LOADING, FAIL_LOADING } from '../constants';

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
            return {
                ...state
            };

        case FAIL_LOADING:
            return {
                ...state,
                isLoading: false
            };
    
        default:
            return state;
    }
}