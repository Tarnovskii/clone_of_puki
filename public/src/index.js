import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import MainContainer from './Main'
import {Provider} from "react-redux";
import {store} from "./store/store";

// eslint-disable-next-line no-extend-native
Date.prototype.daysInMonth = function(year, month) {
    return 33 - new Date(year || this.getFullYear(), month || this.getMonth(), 33).getDate();
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainContainer/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.body
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
