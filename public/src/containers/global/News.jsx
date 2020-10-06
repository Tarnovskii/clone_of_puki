import React from "react";
import ArticleTile from "../../components/models/ArticleTile";
import arrow from "../../img/arrow.svg";

import s from '../../stylesheets/global/news.module.css'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if (this.props.type === 'medium') return (
            <section className={s.news_line}>
                <h3>Новостная лента</h3>
                <ArticleTile type={"medium"}/>
                <ArticleTile type={"medium"}/>
                <ArticleTile type={"medium"}/>
                <div className={s.controller}>
                    <img src={arrow}/>Стр 2/28 <img src={arrow}/>
                </div>
            </section>
        )

        if (this.props.type === 'small') return (
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

}
