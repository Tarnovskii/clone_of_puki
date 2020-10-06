import React from 'react'
import s from "../../../stylesheets/routes/valid.module.css";
import logo from "../../../img/logo.svg";
import {Link} from "react-router-dom";


export default (props) => {
    return (
        <section className={s.wrapper}>
            <h2>Восстановление</h2>
            <div className={`${s.fields_wrapper} ${s.fields}`}>
                <div className={s.logo_wrapper}>
                    <img src={logo} alt={'logo'}/>
                    <h2>ПУКІ</h2>
                </div>
                <input value={props.login}
                       onChange={(e) => props.handler(e.target.value)}
                       type="text" name="username_email" placeholder="Логин или почта" required/>
                <Link to={'/login'} className={s.submit_button}>Восстановить</Link>
            </div>
        </section>
    )
}
