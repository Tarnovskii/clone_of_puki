import React from 'react'
import s from "../../stylesheets/routes/valid.module.css";
import logo from "../../img/logo.svg";
import {Link} from "react-router-dom";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username_email: "",
        }
    }

    updateRecoveryField = value => this.setState({username_email: value})

    render() {
        return (
            <section className={s.wrapper}>
                <h3 className={s.bh3}>Восстановление</h3>
                <div className={`${s.fields_wrapper} ${s.fields}`}>
                    <div className={s.logo_wrapper}>
                        <img src={logo} alt={'logo'}/>
                        <h2>ПУКІ</h2>
                    </div>
                    <input value={this.state.username_email}
                           onChange={(e) => this.updateRecoveryField(e.target.value)}
                           type="text" name="username_email" placeholder="Логин или почта" required/>
                    <Link to={'/login'} className={s.submit_button}>Восстановить</Link>
                </div>
            </section>
        )
    }
}
