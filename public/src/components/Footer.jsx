import React from "react";

import s from '../stylesheets/footer.module.css'

import logo from '../img/logo.svg'

export default () => {
    return (
        <footer className={s.footer_wrapper}>
            <section className={s.footer_content}>
                <div className={s.links}>
                    <a href={'/#'}>Пункт меню</a>
                    <a href={'/#'}>Пункт меню</a>
                    <a href={'/#'}>Пункт меню</a>
                    <a href={'/#'}>Пункт меню</a>
                    <a href={'/#'}>Пункт меню</a>
                    <a href={'/#'}>Пункт меню</a>
                </div>
                <div className={s.title}>
                    <img src={logo} alt={'logo'}/>
                    <p><span>ПУКІ</span>Посібник к комп'ютерній інженерії</p>
                </div>
            </section>
            <p className={s.cr}>© Copyright 2020 - {new Date().getFullYear()}  |  All Right Reserved  |  ACSES.MEDIA</p>
        </footer>
    )
}
