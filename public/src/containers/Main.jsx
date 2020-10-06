import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";
import UserProfile from "../components/UserProfile";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./Login";
import Registraion from "./Registraion";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'main'
        }
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/register'} component={Registraion}/>
                    <Route exact path={'/profile'}>
                        <UserProfile/>
                        <Footer/>
                    </Route>
                    <Route exact path={'/'}>
                        <MainPage/>
                        <Footer/>
                    </Route>
                    <Route path={'/'} component={() => Redirect('/')}/>
                </Switch>
            </Fragment>
        );
    }
}
