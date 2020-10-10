import React from "react";
import s from '../../stylesheets/global/filebrowser.module.css'

import arrow from '../../img/arrow.svg'
import FileTile from "../models/FileTile";

export default () => {
    return (
        <section className={s.wrapper}>
            <b>Файлы</b>
            <div className={s.browser}>
                <div className={s.browser_header}>
                    <p>Группа КВ-41/Компьютерная инженерия/</p>
                    <img src={arrow} alt={'arrow'}/>
                </div>
                <div className={s.browser_content}>
                    <FileTile filename={"Лаба 1"} type={".pdf"}/>
                    <FileTile filename={"Лекционный материал"} type={".pdf"}/>
                    <FileTile filename={"Примеры прошлых годов"} type={".docx"}/>
                    <FileTile filename={"хз"} type={".xlcs"}/>
                    <FileTile filename={"код програмы на лаб. работу №1"} type={".txt"}/>
                    <FileTile filename={"ещё что то"} type={".pdf"}/>
                    <FileTile filename={"фантазия всё"} type={".doc"}/>
                    <FileTile filename={"Лаба 1"} type={".pdf"}/>
                    <FileTile filename={"Лекционный материал"} type={".pdf"}/>
                    <FileTile filename={"Примеры прошлых годов"} type={".docx"}/>
                    <FileTile filename={"хз"} type={".xlcs"}/>
                    <FileTile filename={"код програмы на лаб. работу №1"} type={".txt"}/>
                    <FileTile filename={"ещё что то"} type={".pdf"}/>
                    <FileTile filename={"фантазия всё"} type={".doc"}/>
                </div>
            </div>
        </section>
    )
}
