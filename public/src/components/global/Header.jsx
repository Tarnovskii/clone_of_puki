import React, {Fragment} from "react";
import s from '../../stylesheets/global/header.module.css'

import logo from '../../img/logo.svg'
import {connect} from "react-redux";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {Link} from "react-router-dom";

export default connect(mapStateToProps(), mapDispatchToProps())((props) => {
    console.log(props);

    const mainPageLinks = (isAuth = false) => {
        return isAuth ? (
            <Fragment>
                <Link className={s.lb} to={'/profile'}>Войти в систему</Link>
            </Fragment>
        ) : <Link className={s.lb} to={'/profile'}>Войти в систему</Link>
    }
    const loginPageLinks =  <Link className={s.lb} to={'/'}>На главную</Link>
    const regRecPage = <Link className={s.lb} to={'/login'}>Назад</Link>

    return (
        <header className={s.header_wrapper}>
            <Link to={'/'} className={s.logo_wrapper}><img src={logo} alt={'logo'}/></Link>
            <div className={s.header_title}>
                <h1>ПУКІ</h1>
                <h2>Посібник к комп'ютерній інженерії</h2>
            </div>
            {props.pageName === 'mainPage'
                ? mainPageLinks() : props.pageName === 'loginPage'
                ? loginPageLinks : (props.pageName === 'regPage') || (props.pageName === 'recPage')
                ? regRecPage : <div>zhhzhzhz</div>
            }
        </header>
    )
})
