import React from "react";
import s from '../../stylesheets/global/header.module.css'

import logo from '../../img/logo.svg'

export default () => {
    return (
        <header className={s.header_wrapper}>
            <img className={s.logo_wrapper} src={logo} alt={'logo'}/>
            <div className={s.header_title}>
                <h1>ПУКІ</h1>
                <h2>Посібник к комп'ютерній інженерії</h2>
            </div>
            <a className={s.lb} href={'/#'}>Войти в систему</a>
        </header>
    )
}
