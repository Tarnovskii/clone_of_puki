import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";

import MainPage from "./components/routes/MainPage";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Login from "./components/routes/Login";
import Registration from "./components/routes/Registration";
import Recovery from "./components/routes/Recovery";
import StudentProfile from "./components/routes/StudentProfile";
import TeacherProfile from "./components/routes/TeacherProfile";
import {connect} from "react-redux";
import {mapDispatchToProps} from "./utils/storeUtils/dispatchToProps";

export default connect(null, mapDispatchToProps())((props) => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path={'/login'} component={() => {
                    props.updateCurrentPageName("loginPage");
                    return Login()
                }}/>
                <Route exact path={'/register'} component={() => {
                    props.updateCurrentPageName("regPage");
                    return Registration()
                }}/>
                <Route exact path={'/recovery'} component={() => {
                    props.updateCurrentPageName("recPage");
                    return Recovery()
                }}/>
                <Route exact path={'/profile'}>
                    <StudentProfile/>
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
})
