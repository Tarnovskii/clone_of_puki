import React from 'react'
import s from "../../stylesheets/routes/teacherProfile.module.css";
import arrow from "../../img/arrow.svg";
import News from "../global/News";
import FileBrowser from "../global/FileBrowser";
import UsefullLinks from "../global/UsefullLinks";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import TeacherTaskModal from "../../containers/models/TeacherTaskModal";
import Calendar from "../../containers/global/Calendar";

export default connect(null, mapDispatchToProps())((props) => {
    return (
        <main className={s.wrapper}>
            <section className={s.content}>
                <Calendar/>
                <div className={s.global_db}>
                    <h3 className={s.bh3}>Глобальная база данных</h3>
                    <div className={s.bd_actions}>
                        <button className={s.active_button}>Открыть базу данных</button>
                        <button className={s.passive_button}>Добавить пользователя</button>
                    </div>
                </div>
                <News type={'medium'}/>
                <FileBrowser/>
            </section>
            <UsefullLinks/>
        </main>
    )
})
