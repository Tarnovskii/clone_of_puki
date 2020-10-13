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
            title: "Заголовок",
            type: "",
            date: "",
            startTime: "",
            endTime: "",
            interval: "",
            description: "",
            files: [],
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

    addFileToState = (file) => {
        this.setState({
            files: [...this.state.files, file]
        }, () => console.log(file))
    }

    render() {
        return (
            <div className={s.content_wrapper}>
                <div className={s.content_header}>
                    <input className={s.title_field} value={this.state.title}/>
                    <img onClick={() => this.props.modalActions.updateModalState(false)} src={arrow}/>
                </div>
                <div className={s.task_settings}>
                    <fieldset>
                        <label htmlFor={'type'}>Тип: </label>
                        <select name={'type'}>
                            <option>Лабораторная</option>
                            <option>Контрольная</option>
                            <option>Лекция</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'date'}>Дата: </label>
                        <input name={'date'} type={'date' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'start_time'}>Время: Начало</label>
                        <input name={'start_time'} type={'time' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'end_time'}>Конец </label>
                        <input name={'end_time'} type={'time' || 'text'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor={'interval'}>Повтор: </label>
                        <select name={'interval'}>
                            <option>Никогда</option>
                            <option>Ежедневно</option>
                            <option>Раз в неделю</option>
                            <option>Раз в месяц</option>
                            <option>Раз в Год</option>
                        </select>
                    </fieldset>
                </div>
                <fieldset className={s.task_description}>
                    <label htmlFor={'description'}>Описание:</label>
                    <textarea className={s.description_field} name={'description'}/>
                </fieldset>
                <fieldset className={s.task_files_list}>
                    <label htmlFor={'file'}>Файлы:</label>
                    <input placeholder={''} name='file' type={'file'} onChange={e => this.addFileToState(e.target.files[0])}/>
                    <div className={s.task_list_files_wrapper}>
                        {this.renderFileList()}
                    </div>
                </fieldset>
            </div>
        );
    }
})

