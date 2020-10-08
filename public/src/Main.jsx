import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";

import MainPage from "./components/routes/MainPage";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import UserProfile from "./containers/routes/UserProfile";
import Login from "./containers/routes/validation/Login";
import Registraion from "./containers/routes/validation/Registraion";
import Recovery from "./containers/routes/validation/Recovery";
import AdminProfile from "./containers/routes/AdminProfile";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAdmin: false,
        }
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/register'} component={Registraion}/>
                    <Route exact path={'/recovery'} component={Recovery}/>
                    <Route exact path={'/profile'}>
                        {this.state.isUserAdmin ? <AdminProfile/> : <UserProfile/>}
                        <Footer/>
                    </Route>
                    <Route exact path={'/'}><MainPage/><Footer/></Route>
                    <Route path={'/'} component={() => Redirect('/')}/>
                </Switch>
            </Fragment>
        );
    }
}
