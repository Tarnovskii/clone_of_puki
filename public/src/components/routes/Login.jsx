import React, {useState} from "react";

import s from '../../stylesheets/routes/valid.module.css'

import logo from '../../img/logo.svg'
import {Link} from "react-router-dom";

export default (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className={s.wrapper}>
            <h3 className={s.bh3}>Войти в систему</h3>
            <div className={s.fields_wrapper}>
                <div className={s.logo_wrapper}>
                    <img src={logo} alt={'logo'}/>
                    <h2>ПУКІ</h2>
                </div>
                <div className={s.fields}>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}
                           type="text" name="username_email" placeholder="Логин или почта" required/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                           type="password" name="password" placeholder="Пароль" required/>
                </div>
                <div className={s.login_buttons}>
                    <Link to={'/register'}>Регистрация</Link>
                    <Link to={'/recovery'}>Забыли пароль</Link>
                </div>
                <input type={'submit'} className={s.submit_button} value={'Войти'}/>
            </div>
        </section>
    )
}
