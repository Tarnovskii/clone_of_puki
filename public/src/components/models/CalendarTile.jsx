import React from "react";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import {mergeProps} from "../../utils/storeUtils/propsCombiner";
import s from "../../stylesheets/global/calendar.module.css";
import * as PropsType from "prop-types";
import TeacherSchedulerModal from "../../containers/models/TeacherSchedulerModal";

const CalendarTile = (props) => {
    const currentDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    const className = currentDate === props.date ? s.calendar_table_default_cell : s.calendar_table_active_cell
    return (
        <div onClick={() => {
            props.modalActions.updateModalContent(() => <TeacherSchedulerModal events={props.eventsList} date={props.date}/>)
            props.modalActions.updateModalState(true)
        }}
             className={className} id={props.date} key={props.index}>
            <span className={s.cell_date}>{props.index + 1}</span>
            {props.eventsList.map((e, index) => {
                return <p type={e.type} className={s.cell_title} key={index}>{e.title}</p>
            })}
        </div>
    )
}

CalendarTile.propTypes = {
    date: PropsType.string.isRequired,
    index: PropsType.number.isRequired,
    eventsList: PropsType.array.isRequired,
}

export default connect(null, mapDispatchToProps(), mergeProps)(CalendarTile)


