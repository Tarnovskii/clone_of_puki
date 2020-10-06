import React from 'react'
import s from '../../stylesheets/global/link.module.css'

export default () => {
    return (
        <div className={s.wrapper}>
            <div className={s.preview}>
                PREVIEW
            </div>
            <p className={s.header}>Описанние данной сылки на данный ресурс</p>
            <p className={s.description}> Описание тут получится немного длиннее чем обычно, просто потому что мне
                хочется, не более того. </p>
        </div>
    )
}
