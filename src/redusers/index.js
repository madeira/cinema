import { combineReducers} from 'redux';

import { movies } from './movies'
import { loading } from './loading'


export const rootReduser = combineReducers({
    loading: loading,
    data: movies
});