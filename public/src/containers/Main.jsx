import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";
import UserProfile from "../components/UserProfile";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/profile'} component={UserProfile}/>
                    <Route exact path={'/'} component={MainPage}/>
                    <Route path={'/'} component={() => Redirect('/')}/>
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}
