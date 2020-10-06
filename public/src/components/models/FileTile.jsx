import React from "react";

import s from '../../stylesheets/models/filetile.module.css'

export default (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.icon}>
                <b>{props.type}</b>
            </div>
            <p>{props.filename}</p>
        </div>
    )
}
