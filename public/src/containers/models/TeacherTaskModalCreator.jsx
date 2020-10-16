import React, {Fragment} from "react";
import s from '../../stylesheets/global/modal.module.css'
import arrow from '../../img/arrow.svg'
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";
import close from '../../img/close.svg'

export default connect(null, mapDispatchToProps())(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: "lec",
            date: "",
            startTime: "",
            endTime: "",
            interval: 0,
            description: "",
            files: [],
        }
    }

    eventsHandler = (action) => {
        switch (action.type) {
            case "UPDATE_TITLE":
                this.setState({title: action.value})
                break;
            case "UPDATE_TYPE":
                this.setState({type: action.value})
                break;
            case "UPDATE_DATE":
                this.setState({date: action.value})
                break;
            case "UPDATE_START_TIME":
                this.setState({startTime: action.value})
                break;
            case "UPDATE_END_TIME":
                this.setState({endTime: action.value})
                break;
            case "UPDATE_INTERVAL":
                this.setState({interval: action.value})
                break;
            case "UPDATE_DESCRIPTION":
                this.setState({description: action.value})
                break;
            case "UPDATE_FILES":
                this.setState({files: [...this.state.files, action.value]})
                break;
            default:
                break;

        }
    }

    removeFile = (size) => {
        this.setState({
            files: this.state.files.filter(file => file.size !== size)
        })
    }

    renderFileList = () => {
        return (
            <Fragment>
                {this.state.files.map(file => {
                    return (
                        <div className={s.task_list_file_tile}>
                            <p>{file.name}</p>
                            <img onClick={() => this.removeFile(file.size)} src={close} alt={'close'}/>
                        </div>
                    )
                })}
            </Fragment>
        )
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.calendarAction.addEvent(this.state)
            }} className={s.content_wrapper}>
                <div className={s.content_header}>
                    <input required={true} onChange={(e) => {
                        this.eventsHandler({type: "UPDATE_TITLE", value: e.target.value})
                    }} className={s.title_field} value={this.state.title}/>
                    <img onClick={() => this.props.modalActions.updateModalState(false)} src={arrow}/>
                </div>
                <div className={s.task_settings}>
                    <fieldset>
                        <label htmlFor={'type'}>Тип: </label>
                        <select required={true} onChange={(e) => {
                            this.eventsHandler({type: "UPDATE_TYPE", value: e.target.value})
                        }} name={'type'}>
                            <option value={'lab'}>Лабораторная</option>
                            <option value={'kr'}>Контрольная</option>
                            <option value={'lec'}>Лекция</option>
                            <option value={'pr'}>Практика</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'date'}>Дата: </label>
                        <input required={true}
                               value={this.state.date.split('/').reverse().join('-')}
                               onChange={(e) => {
                                   this.eventsHandler({
                                       type: "UPDATE_DATE",
                                       value: e.target.value.split('-').reverse().join('/')
                                   })
                               }}
                               name={'date'} type={'date' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'start_time'}>Время: Начало</label>
                        <input required={true} value={this.state.startTime} onChange={(e) => {
                            this.eventsHandler({type: "UPDATE_START_TIME", value: e.target.value})
                        }} name={'start_time'} type={'time' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'end_time'}>Конец </label>
                        <input required={true} value={this.state.endTime} onChange={(e) => {
                            this.eventsHandler({type: "UPDATE_END_TIME", value: e.target.value})
                        }} name={'end_time'} type={'time' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'interval'}>Повтор: </label>
                        <select required={true} onChange={(e) => {
                            this.eventsHandler({type: "UPDATE_INTERVAL", value: e.target.value})
                        }} name={'interval'}>
                            <option value={0}>Никогда</option>
                            <option value={1}>Ежедневно</option>
                            <option value={2}>Раз в неделю</option>
                            <option value={3}>Раз в месяц</option>
                            <option value={4}>Раз в Год</option>
                        </select>
                    </fieldset>
                </div>
                <fieldset className={s.task_description}>
                    <label htmlFor={'description'}>Описание:</label>
                    <textarea required={true} value={this.state.description} onChange={(e) => {
                        this.eventsHandler({type: "UPDATE_DESCRIPTION", value: e.target.value})
                    }} className={s.description_field} name={'description'}/>
                </fieldset>
                <fieldset className={s.task_files_list}>
                    <label htmlFor={'file'}>Файлы:</label>
                    <input placeholder={''} name='file' type={'file'} onChange={(e) => {
                        this.eventsHandler({type: "UPDATE_FILES", value: e.target.files[0]})
                    }}/>
                    <div className={s.task_list_files_wrapper}>
                        {this.renderFileList()}
                    </div>
                </fieldset>
                <button type={'submit'} className={s.active_button}>Добавить</button>
            </form>
        );
    }
})

