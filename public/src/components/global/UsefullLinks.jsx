import React from "react";
import s from "../../stylesheets/global/usefulllinks.module.css";
import LinkTile from "../blanks/LinkTile";


export default () => {
    return (
        <section className={s.links}>
            <h3 className={s.bh3}>Полезные ссылки</h3>
            <LinkTile/>
            <LinkTile/>
            <LinkTile/>
            <LinkTile/>
        </section>
    )
}
