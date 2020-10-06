import React from "react";

import s from '../stylesheets/valid.module.css'

import logo from '../img/logo.svg'
import {Link} from "react-router-dom";

export default () => {
    return (
        <section className={s.login_wrapper}>
            <h2>Войти в систему</h2>
            <div className={s.login_fields_wrapper}>
                <div className={s.logo_wrapper}>
                    <img src={logo} alt={'logo'}/>
                    <h2>ПУКІ</h2>
                </div>
                <div className={s.login_fields}>
                    <input type="text" name="username_email" placeholder="Логин или почта" required/>
                    <input type="password" name="password" placeholder="Пароль" required/>
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
