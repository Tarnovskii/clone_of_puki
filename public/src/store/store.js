import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {initialState} from "./initialState";
import thunk from "redux-thunk";
import {pageName} from "./reducers/routingReducers";
import {userState} from "./reducers/userReducers";

const reducers = combineReducers({
    pageName,
    userState,
});

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(reducers, initialState, composeSetup(middlewareEnhancer));
