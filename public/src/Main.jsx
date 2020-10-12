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
                <Route exact path={'/login'}><Login/></Route>
                <Route exact path={'/register'}><Registration/></Route>
                <Route exact path={'/recovery'}><Recovery/></Route>
                <Route exact path={'/profile'}><ProfileRouter/></Route>
                <Route exact path={'/'}><MainPage/></Route>
                <Route path={'/'}><Redirect to={'/'}/></Route>
            </Switch>
            <Footer/>
        </Fragment>
    );
})
