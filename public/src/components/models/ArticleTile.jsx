import React from "react";

import s from '../../stylesheets/models/article.module.css'

export default (props) => {
    return (
        <article type={props.type} className={s.wrapper}>
            <div className={s.preview}> PREVIEW</div>
            <div className={s.text}>
                <b>Заголовок новости номер 1. Как кот нашел хвост.</b>
                <p>ОLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, aliquam pellentesque ac pulvinar.
                    Urna porta viverra etiam tellus nulla consequat eu mauris amet. Eu, aliquet ut non aliquam purus, in
                    cursus fringilla. Non volutpat tellus eu sit elit diam.</p>
            </div>
            <div className={s.interact}>
                <span>Сегодня</span>
                <a href={'/#'}>Читать полностью</a>
            </div>
        </article>
    )
}
