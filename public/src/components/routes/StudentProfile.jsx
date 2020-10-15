import React from "react";
import s from '../../stylesheets/routes/userProfile.module.css'
import arrow from "../../img/arrow.svg";
import Perfomance from "../global/Perfomance";
import News from "../../components/global/News";
import FileBrowser from "../../components/global/FileBrowser";
import UsefullLinks from "../global/UsefullLinks";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import Calendar from "../../containers/global/Calendar";

export default connect(null, mapDispatchToProps())((props) => {
    props.routingActions.updateFooterStatus('visible')
    props.routingActions.updateCurrentPageName("profilePage");
    return (
        <main className={s.wrapper}>
            <section className={s.banner}>
                <h2>{props.group}</h2>
            </section>
            <section className={s.content}>
                <h3 className={s.bh3}>Добро пожаловать, <span>Jennifer Ktototam</span></h3>
                <Calendar/>
                <div className={s.progress}>
                    <h3 className={s.bh3}>Успеваемость устудента</h3>
                    <Perfomance subj={'Програмирование II'}/>
                    <Perfomance subj={'Схемотехника'}/>
                </div>
                <News type={'medium'}/>
                <FileBrowser/>
            </section>
            <UsefullLinks/>
        </main>
    )
})
