import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from "react-router";

import MainPage from "./components/routes/MainPage";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Login from "./containers/routes/Login";
import Registration from "./containers/routes/Registration";
import Recovery from "./containers/routes/Recovery";
import ProfileRouter from "./components/routes/ProfileRouter";

import {connect} from "react-redux";
import {mapDispatchToProps} from "./utils/storeUtils/dispatchToProps";
import {mapStateToProps} from "./utils/storeUtils/stateToProps";

export default connect(mapStateToProps(), mapDispatchToProps())((props) => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/register'} component={Registration}/>
                <Route exact path={'/recovery'} component={Recovery}/>
                <Route exact path={'/profile'} component={ProfileRouter}/>
                <Route exact path={'/'} component={MainPage}/>
                <Route path={'/'} component={() => Redirect('/')}/>
            </Switch>
            <Footer/>
        </Fragment>
    );
})
