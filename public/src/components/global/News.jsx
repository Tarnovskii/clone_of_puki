import React from "react";
import s from "../../stylesheets/global/news.module.css";
import ArticleTile from "../models/ArticleTile";
import arrow from "../../img/arrow.svg";

export default (props) => {
    if (props.type === 'medium') return (
        <section className={s.news_line}>
            <h3 className={s.bh3}>Новостная лента</h3>
            <ArticleTile type={"medium"}/>
            <ArticleTile type={"medium"}/>
            <ArticleTile type={"medium"}/>
            <div className={s.controller}>
                <img src={arrow}/>Стр 2/28 <img src={arrow}/>
            </div>
        </section>
    )

    if (props.type === 'small') return (
        <section className={s.small_news_line}>
            <p className={s.article_block_header}>Последние новости</p>
            <ArticleTile type={"small"}/>
            <ArticleTile type={"small"}/>
            <ArticleTile type={"small"}/>
            <ArticleTile type={"small"}/>
            <ArticleTile type={"small"}/>
            <ArticleTile type={"small"}/>
        </section>
    )
}
