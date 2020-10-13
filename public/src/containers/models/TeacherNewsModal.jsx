import React from "react";
import {connect} from "react-redux";
import s from "../../stylesheets/global/modal.module.css";
import arrow from "../../img/arrow.svg";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";

export default connect(null, mapDispatchToProps())(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Заголовок",
            description: "",
            date: "",
            accses: "",
            img: undefined,
            isListOpen: false
        }
        console.log(props)
    }

    updateListState = () => {
        this.setState({
            isListOpen: !this.state.isListOpen
        })
    }

    render() {
        return (
            <div className={s.content_wrapper}>
                <div className={s.content_header}>
                    <input ifl={`${this.state.img === undefined}`} type={'file'}
                           style={{
                               background: this.state.img === undefined
                                   ? `#243E49`
                                   : `url('${URL.createObjectURL(this.state.img)}') center center no-repeat`,
                           }}
                           className={s.news_image_field}
                           onChange={e => this.setState({img: e.target.files[0]})}
                    />
                    <input value={this.state.title} className={s.title_field}/>
                    <img onClick={() => this.props.modalActions.updateModalState(false)} src={arrow}/>
                </div>
                <textarea className={s.description_field}/>
                <div className={s.news_footer}>
                    <fieldset>
                        <label>Дата:</label>
                        <p> {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} </p>
                    </fieldset>
                    <fieldset>
                        <label>Автор:</label>
                        <p> Имя Фамилия </p>
                    </fieldset>
                    <fieldset>
                        <label>Доступ:</label>
                        <div className={s.check_drop} tabIndex="100">
                            <span onClick={this.updateListState}>Доступ к статье</span>
                            <ul io={`${this.state.isListOpen}`}>
                                <li><input type="checkbox"/>Все</li>
                                <li><input type="checkbox"/>Студенты</li>
                                <li><input type="checkbox"/>Преподаватели</li>
                                <li><input type="checkbox"/>КВ-60</li>
                                <li><input type="checkbox"/>КВ-61</li>
                                <li><input type="checkbox"/>КВ-62</li>
                            </ul>
                        </div>
                    </fieldset>
                    <button className={s.active_button}>Опубликовать</button>
                </div>
            </div>
        );
    }
})
