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
                    <Route exact path={'/register'} component={Registration}/>
                    <Route exact path={'/recovery'} component={Recovery}/>
                    <Route exact path={'/profile'}>
                        {this.state.isUserAdmin ? <TeacherProfile/> : <StudentProfile/>}
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
