import React from "react";
import s from '../../stylesheets/routes/mainPage.module.css'

import {Link} from "react-router-dom";
import News from "../../containers/global/News";
import UsefullLinks from "../global/UsefullLinks";


export default () => {
    return (
        <main className={s.main_wrapper}>
            <section className={s.banner}>

            </section>
            <section className={s.welcome_block}>
                <div className={s.welcome_block_header}>
                    <b>Добро пожаловать на портал ПУКI!</b>
                    <Link to={'/login'}>Вход/регистрация</Link>
                </div>
                <div className={s.hallo_world}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo augue id tristique semper
                        egestas quisque. Ullamcorper sed arcu diam ipsum, aliquet. Arcu, adipiscing ipsum egestas arcu,
                        pellentesque fermentum. Ornare semper odio nullam neque iaculis vel sit. Malesuada adipiscing
                        vitae venenatis urna risus purus interdum scelerisque. Magna est amet quam porttitor nunc nulla.
                        Quis nec quis odio blandit facilisi in. Pellentesque adipiscing nisi, ultrices quam orci, amet,
                        justo. Nullam suscipit dui viverra at.<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;
                        Id morbi faucibus etiam urna lorem. Vitae senectus morbi quam integer nulla id duis blandit
                        fringilla. Gravida in tellus amet aliquet at viverra lorem. Aliquam etiam sit mi, orci consequat
                        augue. Mauris ut venenatis a elit libero aliquet.
                    </p>
                    <div className={s.teacher_info}>
                        <img/>
                        <p><span>Lorem ipsum dolor sit amet</span> Commodo augue id
                            tristique semper, consectetur adipiscing elit.
                            egestas quisque</p>
                    </div>
                </div>
                <News type={'small'}/>
            </section>
            <News type={'medium'}/>
            <UsefullLinks/>
        </main>
    )
}
