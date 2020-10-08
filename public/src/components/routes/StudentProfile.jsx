import React from "react";
import s from '../../stylesheets/routes/userProfile.module.css'
import arrow from "../../img/arrow.svg";
import Perfomance from "../global/Perfomance";
import News from "../../components/global/News";
import FileBrowser from "../../components/global/FileBrowser";
import UsefullLinks from "../global/UsefullLinks";

export default (props) => {
    return (
        <main className={s.wrapper}>
            <section className={s.banner}>
                <h2>{props.group}</h2>
            </section>
            <section className={s.content}>
                <h3 className={s.bh3}>Добро пожаловать, <span>Jennifer Ktototam</span></h3>
                <div className={s.calendar}>
                    <h3 className={s.bh3}>Календарь событий</h3>
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
}