import React from "react";

import s from '../../stylesheets/global/perfomance.module.css'

import arrow from '../../img/arrow.svg'

export default (props) => {
    return (
        <div className={s.wrapper}>
            <p className={s.header}>Предмет: <span>{props.subj}</span></p>
            <div className={s.content}>
                <img src={arrow}/>
                <div className={s.table_wrapper}>
                    <table cellPadding={0} cellSpacing={0}>
                        <tr>

                        </tr>
                    </table>
                </div>
                <img src={arrow}/>
            </div>
        </div>
    )
}

const perfomanceTile = (data) => {
    let result = data.mark / data.maxMark;
    let coff = result < 0.3 ? "bad" : result <= 0.6 ? "ok" : result <= 0.8 ? "good" : "perfect"

    return (
        <td className={s.perfomance_tile}>
            <p className={s.date}>{data.date}</p>
            <p coff={coff} className={s.mark}><span>{data.mark}</span>/<span>{data.maxMark}</span></p>
            <p type={data.type} className={s.description}> Описание тайла</p>
        </td>
    )
}
