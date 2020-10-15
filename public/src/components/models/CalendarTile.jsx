import React from "react";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import {mergeProps} from "../../utils/storeUtils/propsCombiner";
import s from "../../stylesheets/global/calendar.module.css";
import PropsType from "prop-types";

const CalendarTile = (props) => {
    const currentDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    const className = currentDate === props.date ? s.calendar_table_default_cell : s.calendar_table_active_cell

    return (
        <div className={className} id={props.date} key={props.index}>
            <span className={s.cell_title}>{props.index + 1}</span>
            {props.eventsList.map((e) => {
                return <p>{e.title}</p>
            })}
        </div>
    )
}

CalendarTile.propTypes = {
    date: PropsType.string.isRequired,
    index: PropsType.number.isRequired,
    eventsList: PropsType.array.isRequired
}

export default connect(null, mapDispatchToProps(), mergeProps)(CalendarTile)


