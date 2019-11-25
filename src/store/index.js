import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { rootReduser } from "../redusers";


const composeEnchanser = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export const store = createStore(rootReduser, composeEnchanser(applyMiddleware(thunk)));
export const history = createBrowserHistory();


