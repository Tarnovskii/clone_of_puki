import React, {Fragment} from "react";
import s from '../../stylesheets/global/header.module.css'

import logo from '../../img/logo.svg'
import gear from '../../img/gear.svg'
import {connect} from "react-redux";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {Link} from "react-router-dom";

export default connect(mapStateToProps(), mapDispatchToProps())((props) => {
    const mainPageLinks = () => {
        if (props.userState.userRole === 'STUDENT' || props.userState.userRole === 'TEACHER') {
            return (
                <Fragment>
                    <Link className={s.lb} to={'/profile'}>Профиль</Link>
                    <Link className={s.lb} to={'/signout'}>Выйти</Link>
                    <Link className={s.lb_d} to={'/setting'}><img src={gear} alt={'gear'}/></Link>
                </Fragment>
            )
        }
    }
    const profileLinks = <Link to={'/'}> asdasd </Link>
    const loginPageLinks = <Link className={s.lb} to={'/'}>На главную</Link>
    const regRecPage = <Link className={s.lb} to={'/login'}>Назад</Link>

    return (
        <header className={s.header_wrapper}>
            <div className={s.header_title}>
                <Link to={'/'} className={s.logo_wrapper}><img src={logo} alt={'logo'}/></Link>
                <h1>ПУКІ</h1>
                <h2>Посібник к комп'ютерній інженерії</h2>
            </div>
            <div className={s.hb}>
                {props.routingState.pageName === 'mainPage'
                    ? mainPageLinks() : props.routingState.pageName === 'loginPage'
                        ? loginPageLinks : (props.routingState.pageName === 'regPage') || (props.routingState.pageName === 'recPage')
                            ? regRecPage : props.routingState.pageName === 'profilePage'
                                ? profileLinks : null
                }
            </div>
        </header>
    )
})
