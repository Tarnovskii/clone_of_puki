import React from "react";

import s from '../../../stylesheets/valid.module.css'

import logo from '../../../img/logo.svg'
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <section className={s.wrapper}>
            <h2>Войти в систему</h2>
            <div className={s.fields_wrapper}>
                <div className={s.logo_wrapper}>
                    <img src={logo} alt={'logo'}/>
                    <h2>ПУКІ</h2>
                </div>
                <div className={s.fields}>
                    <input value={props.userLogin} onChange={(e) => props.handler({
                        type: "UPDATE_LOGIN",
                        value: e.target.value
                    })} type="text" name="username_email" placeholder="Логин или почта" required/>
                    <input value={props.userPassword} onChange={(e) => props.handler({
                        type: "UPDATE_PASSWORD",
                        value: e.target.value
                    })} type="password" name="password" placeholder="Пароль" required/>
                </div>
                <div className={s.login_buttons}>
                    <Link to={'/register'}>Регистрация</Link>
                    <Link to={'/recover'}>Забыли пароль</Link>
                </div>
                <Link to={'/profile'} className={s.submit_button}>Войти</Link>
            </div>
        </section>
    )
}
