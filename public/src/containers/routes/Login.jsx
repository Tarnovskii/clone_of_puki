import React from "react";

import s from '../../stylesheets/routes/valid.module.css'

import logo from '../../img/logo.svg'
import {Link} from "react-router-dom";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import {connect} from "react-redux";

export default connect(null, mapDispatchToProps())(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        props.routingActions.updateFooterStatus('hidden')
        props.routingActions.updateCurrentPageName("loginPage");
    }

    updateUsername = (value) => this.setState({username: value})
    updatePassword = (value) => this.setState({password: value})

    render() {
        return (
            <section className={s.wrapper}>
                <h3 className={s.bh3}>Войти в систему</h3>
                <form className={s.fields_wrapper}>
                    <div className={s.logo_wrapper}>
                        <img src={logo} alt={'logo'}/>
                        <h2>ПУКІ</h2>
                    </div>
                    <div className={s.fields}>
                        <input value={this.state.username}
                               onChange={(e) => this.updateUsername(e.target.value)}
                               type="text" name="username_email" placeholder="Логин или почта" required/>
                        <input value={this.state.password}
                               onChange={(e) => this.updatePassword(e.target.value)}
                               type="password" name="password" placeholder="Пароль" required/>
                    </div>
                    <div className={s.login_buttons}>
                        <Link className={s.passive_button} to={'/register'}>Регистрация</Link>
                        <Link className={s.passive_button} to={'/recovery'}>Забыли пароль</Link>
                    </div>
                    <input type={'submit'} className={s.active_button} value={'Войти'}/>
                </form>
            </section>
        )
    }
})
