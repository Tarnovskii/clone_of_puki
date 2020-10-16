import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {initialState} from "./initialState";
import thunk from "redux-thunk";
import {userState} from "./reducers/userReducers";
import {routingState} from "./reducers/routingReducers";
import {modalState} from "./reducers/modalReducers";
import {calendarState} from "./reducers/calendarReducers";

const reducers = combineReducers({
    routingState,
    userState,
    modalState,
    calendarState,
});

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(reducers, initialState, composeSetup(middlewareEnhancer));
