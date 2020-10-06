import React from "react";
import s from '../../stylesheets/routes/userProfile.module.css'
import arrow from "../../img/arrow.svg";
import Perfomance from "../global/Perfomance";
import News from "../../containers/global/News";
import FileBrowser from "../../containers/global/FileBrowser";
import UsefullLinks from "../global/UsefullLinks";

export default (props) => {
    return (
        <main className={s.wrapper}>
            <section className={s.banner}>
                <h2>{props.group}</h2>
            </section>
            <section className={s.content}>
                <h3>Добро пожаловать, <span>{props.firstName} {props.lastName}</span></h3>
                <div className={s.calendar}>
                    <b>Календарь событий</b>
                    <div className={s.controller}>
                        <img src={arrow}/> Октябрь 2020 <img src={arrow}/>
                    </div>
                    <table cellPadding={0} cellSpacing={0}>
                        <tr><td>27</td><td>28</td><td>29</td><td>30</td><td>1</td><td>3</td><td>3</td></tr>
                        <tr><td>4</td><td>5</td><td>6</td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </table>
                </div>
                <div className={s.progress}>
                    <b>Успеваемость устудента</b>
                    <Perfomance subj={'Програмирование II'}/>
                    <Perfomance subj={'Схемотехника'}/>
                </div>
                <News type={'medium'}/>
                <FileBrowser/>
            </section>
            <UsefullLinks/>
        </main>
    )
}
