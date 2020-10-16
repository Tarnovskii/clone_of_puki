import React from "react";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import s from '../../stylesheets/global/calendar.module.css';
import arrow from "../../img/arrow.svg";
import TeacherTaskModal from "../models/TeacherTaskModalCreator";
import {getMonthName} from "../../utils/getMonthnameByNumber";
import {mergeProps} from "../../utils/storeUtils/propsCombiner";
import CalendarTile from "../../components/models/CalendarTile";

export default connect(mapStateToProps(), mapDispatchToProps(), mergeProps)(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            currentDate: new Date().getDate(),
        }
    }

    updateCurrentMonth = (to = 1, reset = false) => {
        if (reset) {
            this.setState({
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
            })
            return;
        }
        if (to > 0) {
            this.setState({
                currentMonth: this.state.currentMonth >= 11 ? 0 : this.state.currentMonth + 1,
                currentYear: this.state.currentMonth >= 11 ? this.state.currentYear + 1 : this.state.currentYear
            })
        } else this.setState({
            currentMonth: this.state.currentMonth <= 0 ? 11 : this.state.currentMonth - 1,
            currentYear: this.state.currentMonth <= 0 ? this.state.currentYear - 1 : this.state.currentYear
        })
    }

    createCalendarTable = () => {
        const days = new Date().daysInMonth(this.state.currentYear, this.state.currentMonth)
        const date = new Date(this.state.currentYear, this.state.currentMonth, 0);
        let datesCollection = []
        for (let i = 1; i <= days; i++) {
            const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
            datesCollection.push(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
        }

        return (
            <section className={s.calendar_table}>
                {datesCollection.map((date, index) => {
                    return <CalendarTile key={index} date={date}
                                         eventsList={this.props.calendarState.events.filter(e => e.date === date)}
                                         index={index}/>
                })}
            </section>
        )
    }

    render() {
        return (
            <section className={s.calendar}>
                <h3 className={s.bh3}>Календарь событий</h3>
                <div className={s.calendar_header}>
                    <div className={s.controller}>
                        <img src={arrow} onClick={() => {
                            this.updateCurrentMonth(-1)
                        }}/>
                        {`${getMonthName(this.state.currentMonth)} ${this.state.currentYear}`}
                        <img src={arrow} onClick={() => {
                            this.updateCurrentMonth(1)
                        }}/>
                    </div>
                    <button onClick={() => {
                        this.updateCurrentMonth(null, true)
                    }} className={s.passive_button}>Сьогодні
                    </button>
                    {this.props.userState.userRole === 'TEACHER' ?
                        <button className={s.active_button} onClick={() => {
                            this.props.modalActions.updateModalContent(TeacherTaskModal)
                            this.props.modalActions.updateModalState(true)
                        }}>
                            Добавить событие
                        </button> : null
                    }
                </div>
                {this.createCalendarTable()}
            </section>
        )
    }
})
