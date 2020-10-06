import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";
import UserProfile from "../components/routes/UserProfile";
import MainPage from "../components/routes/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./routes/validation/Login";
import Registraion from "./routes/validation/Registraion";

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
