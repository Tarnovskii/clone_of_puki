import React from "react";
import s from "../../stylesheets/global/news.module.css";
import ArticleTile from "../models/ArticleTile";
import arrow from "../../img/arrow.svg";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {connect} from "react-redux";
import TeacherNewsModal from "../../containers/models/TeacherNewsModal";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";

export default connect(mapStateToProps(), mapDispatchToProps())((props) => {
    if (props.type === 'medium') return (
        <section className={s.news_line}>
            <h3 className={s.bh3}>Новостная лента</h3>
            {props.userState.userRole === 'TEACHER'
                ? <button className={s.active_button} onClick={() => {
                    props.modalActions.updateModalContent(TeacherNewsModal)
                    props.modalActions.updateModalState(true)
                }}> Добавить новость </button>
                : null
            }
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
        </section>
    )
})
