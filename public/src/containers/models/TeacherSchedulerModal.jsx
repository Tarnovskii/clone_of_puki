import React from "react";
import {connect} from "react-redux";
import s from "../../stylesheets/global/modal.module.css";
import arrow from "../../img/arrow.svg";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {getMonthName} from "../../utils/getMonthnameByNumber";

export default connect(null, mapDispatchToProps())((props) => {
    return (
        <div className={s.content_wrapper}>
            <div className={s.scheduler_header}>
                <p><span>{props.date.split('/')[0]}</span> {getMonthName(props.date.split('/')[1] - 1)}</p>
                <img onClick={() => props.modalActions.updateModalState(false)} src={arrow}/>
            </div>
            <h3 className={s.bh3}> Рассписание на сегодня: </h3>
            <div className={s.events_list_wrapper}>
                {props.events.map((event) => {
                    return (
                        <div className={s.event_wrapper}>
                            <div className={s.time}>
                                <span>{event.startTime}</span>
                                <span>{event.endTime}</span>
                            </div>
                            <p type={event.type}>{event.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
})
